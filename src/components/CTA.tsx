"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Loader2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { useSDK } from "@letterhead/core/react";
import { toast } from "sonner";
import Link from "next/link";

interface TimeSlot {
    day_of_week: number;
    start_time: string;
    end_time: string;
}

interface Availability {
    id: string;
    duration: number;
    time_slots: TimeSlot[];
    timezone: string;
}

interface CTAProps {
    getStartedHref?: string;
    getStartedText?: string;
    talkToExpertText?: string;
    className?: string;
    availabilityId?: string;
}

export function CTA(props: CTAProps) {
    const { getStartedHref = "/try", getStartedText = "Get Started", talkToExpertText = "Talk to an Expert", className = "", availabilityId = process.env.NEXT_PUBLIC_SCHEDULING_AVAILABILITY_ID } = props;
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeAvailability, setActiveAvailability] = useState<Availability | null>(null);
    const [generatedTimes, setGeneratedTimes] = useState<string[]>([]);
    const [loadingSlots, setLoadingSlots] = useState(false);
    const sdk = useSDK();

    // Fetch default availability if not provided
    useEffect(() => {
        if (!activeAvailability && isOpen) {
            const orgId = sdk.organizationId;
            if (orgId) {
                sdk.scheduling.list(orgId).then((res) => {
                    if (res.data && res.data.length > 0) {
                        setActiveAvailability(res.data[0]);
                    }
                }).catch(console.error);
            }
        }
    }, [isOpen, activeAvailability, sdk]);

    // Fetches available slots from backend
    useEffect(() => {
        let iscancelled = false;
        async function fetchSlots() {
            if (!selectedDate || !activeAvailability) {
                setGeneratedTimes([]);
                return;
            }

            setLoadingSlots(true);
            setGeneratedTimes([]);

            try {
                const start = new Date(selectedDate);
                start.setHours(0, 0, 0, 0);

                const end = new Date(selectedDate);
                end.setHours(23, 59, 59, 999);

                const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
                const availabilityId = activeAvailability.id;

                const res = await fetch(`${apiUrl}/api/v1/scheduling/slots?availabilityId=${availabilityId}&from=${start.toISOString()}&to=${end.toISOString()}`);

                if (!res.ok) {
                    throw new Error('Failed to fetch slots');
                }

                const data = await res.json();
                if (!iscancelled && data.slots) {
                    // Format slots to "hh:mm a"
                    const formattedTimes = data.slots.map((slot: string) => format(new Date(slot), "hh:mm a"));
                    setGeneratedTimes(formattedTimes);
                }
            } catch (error) {
                console.error("Error fetching slots:", error);
                if (!iscancelled) setGeneratedTimes([]);
            } finally {
                if (!iscancelled) setLoadingSlots(false);
            }
        }

        fetchSlots();

        return () => {
            iscancelled = true;
        }
    }, [selectedDate, activeAvailability]);

    const formSchema = z.object({
        fullName: z.string().min(2, "Full name must be at least 2 characters"),
        email: z.email("Please enter a valid email address"),
        phone: z.string().min(10, "Phone number must be at least 10 digits"),
        meetingDate: z.date({
            message: "Please select a meeting date",
        }),
        meetingTime: z.string({
            message: "Please select a meeting time",
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            const targetAvailabilityId = activeAvailability?.id || availabilityId;

            if (!targetAvailabilityId) {
                throw new Error("Availability ID is not configured and no default could be found");
            }

            // Parse time string (e.g., "09:00 AM") and combine with date
            const [timeStr, period] = values.meetingTime.split(" ");
            let [hours, minutes] = timeStr.split(":").map(Number);

            if (period === "PM" && hours !== 12) hours += 12;
            if (period === "AM" && hours === 12) hours = 0;

            const startTime = new Date(values.meetingDate);
            startTime.setHours(hours, minutes, 0, 0);

            await sdk.scheduling.book({
                availability_id: targetAvailabilityId,
                attendee_name: values.fullName,
                attendee_email: values.email,
                attendee_phone: values.phone,
                start_time: startTime.toISOString(),
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                notes: "Scheduled via Website",
            });

            toast.success("Meeting Scheduled!", {
                description: "We'll send you a confirmation email shortly.",
            });

            form.reset();
            setSelectedDate(undefined);
            setIsOpen(false);
        } catch (error: any) {
            console.error(error);
            toast.error("Something went wrong", {
                description: error.message || "Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className={cn("flex sm:flex-row gap-4 items-center justify-center", className)}>
            <Link href={getStartedHref}>
                <Button size="sm" variant={'outline'} className="group px-8 py-6 cursor-pointer">
                    {getStartedText}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
            </Link>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button size="sm" className="px-8 py-6 cursor-pointer">
                        {talkToExpertText}
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">Schedule a Meeting</DialogTitle>
                        <DialogDescription>
                            Fill out the form below and we&apos;ll get back to you shortly to confirm your meeting.
                        </DialogDescription>
                    </DialogHeader>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="fullName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John Doe" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="john@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone Number</FormLabel>
                                            <FormControl>
                                                <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="meetingDate"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Meeting Date</FormLabel>
                                            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={(date) => {
                                                            field.onChange(date);
                                                            setSelectedDate(date);
                                                            setIsCalendarOpen(false);
                                                        }}
                                                        disabled={(date) => {
                                                            const isPast = date < new Date() || date < new Date("1900-01-01");
                                                            if (isPast) return true;

                                                            if (activeAvailability) {
                                                                const dayOfWeek = date.getDay();
                                                                const hasSlot = activeAvailability.time_slots.some(s => s.day_of_week === dayOfWeek);
                                                                return !hasSlot;
                                                            }
                                                            return false;
                                                        }}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            {selectedDate && (
                                <FormField
                                    control={form.control}
                                    name="meetingTime"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Meeting Time</FormLabel>
                                            <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto">
                                                {loadingSlots ? (
                                                    <div className="col-span-3 flex justify-center py-4">
                                                        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                                                    </div>
                                                ) : generatedTimes.length === 0 ? (
                                                    <div className="col-span-3 text-center text-sm text-muted-foreground py-4">
                                                        No available times for this date
                                                    </div>
                                                ) : generatedTimes.map((time) => (
                                                    <Button
                                                        key={time}
                                                        type="button"
                                                        variant={field.value === time ? "default" : "outline"}
                                                        className="w-full"
                                                        onClick={() => field.onChange(time)}
                                                    >
                                                        {time}
                                                    </Button>
                                                ))}
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )}
                            <div className="flex justify-end gap-3 pt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setIsOpen(false)}
                                    disabled={isSubmitting}
                                >
                                    Cancel
                                </Button>
                                <Button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Scheduling..." : "Schedule Meeting"}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
