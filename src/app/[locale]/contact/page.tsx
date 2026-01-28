'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Mail, MapPin, Clock, Loader2 } from "lucide-react";
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
import { useState, useEffect } from "react";
import { useSDK } from "@letterhead/core/react";
import { toast } from "sonner";
import { useTranslations } from 'next-intl';

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

export default function ContactUs() {
    const t = useTranslations('contact');
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [activeAvailability, setActiveAvailability] = useState<Availability | null>(null);
    const [generatedTimes, setGeneratedTimes] = useState<string[]>([]);
    const [loadingSlots, setLoadingSlots] = useState(false);
    const sdk = useSDK();

    // Fetch default availability
    useEffect(() => {
        const orgId = sdk.organizationId;
        if (orgId && !activeAvailability) {
            sdk.scheduling.list(orgId).then((res) => {
                if (res.data && res.data.length > 0) {
                    setActiveAvailability(res.data[0]);
                }
            }).catch(console.error);
        }
    }, [sdk, activeAvailability]);

    // Fetches available slots from backend
    useEffect(() => {
        let iscancelled = false;
        async function fetchSlots() {
            if (!selectedDate || !activeAvailability) {
                setGeneratedTimes([]);
                return;
            }

            // Clear times while loading
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
                    // The backend returns ISO strings, we format them to match the UI expectation
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
        fullName: z.string().min(2, t('validation.fullNameMin')),
        email: z.string().email(t('validation.emailInvalid')),
        phone: z.string().min(10, t('validation.phoneMin')),
        meetingDate: z.date({
            message: t('validation.dateRequired'),
        }),
        meetingTime: z.string({
            message: t('validation.timeRequired'),
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
            if (!activeAvailability) {
                throw new Error("No availability found");
            }

            // Parse time string (e.g., "09:00 AM") and combine with date
            const [timeStr, period] = values.meetingTime.split(" ");
            let [hours, minutes] = timeStr.split(":").map(Number);

            if (period === "PM" && hours !== 12) hours += 12;
            if (period === "AM" && hours === 12) hours = 0;

            const startTime = new Date(values.meetingDate);
            startTime.setHours(hours, minutes, 0, 0);

            await sdk.scheduling.book({
                availability_id: activeAvailability.id,
                attendee_name: values.fullName,
                attendee_email: values.email,
                attendee_phone: values.phone,
                start_time: startTime.toISOString(),
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                notes: "Scheduled via Contact Page",
            });

            toast.success(t('successTitle'), {
                description: t('successDescription'),
            });

            form.reset();
            setSelectedDate(undefined);
        } catch (error: any) {
            toast.error(t('errorTitle'), {
                description: error.message || t('errorDescription'),
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="min-h-screen text-white selection:bg-teal-900 selection:text-white">
            <div className="container mx-auto px-4 py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Column: Contact Info */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <span className="inline-block text-teal-400 uppercase tracking-[0.2em] text-sm font-medium">
                                {t('getInTouch')}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                                {t('title')}
                            </h1>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="mt-1 p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors border border-white/10">
                                    <Mail className="w-6 h-6 text-teal-400" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">{t('mailTo')}</p>
                                    <a
                                        href="mailto:support@milsat.africa"
                                        className="block text-2xl md:text-3xl font-light hover:text-teal-400 transition-colors"
                                    >
                                        support@milsat.africa
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="mt-1 p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors border border-white/10">
                                    <MapPin className="w-6 h-6 text-teal-400" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">{t('address')}</p>
                                    <p className="text-xl md:text-2xl font-light text-gray-200 leading-relaxed max-w-md">
                                        {t('addressText')}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="mt-1 p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors border border-white/10">
                                    <Clock className="w-6 h-6 text-teal-400" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">{t('officeHours')}</p>
                                    <p className="text-xl md:text-2xl font-light text-gray-200">
                                        {t('officeHoursText')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white/[0.02] border border-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-10 lg:p-12">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <div className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="fullName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-base text-gray-300">{t('fullName')}</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder={t('fullNamePlaceholder')}
                                                        {...field}
                                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-teal-500/50 focus:ring-teal-500/20 h-12"
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-base text-gray-300">{t('email')}</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="email"
                                                        placeholder={t('emailPlaceholder')}
                                                        {...field}
                                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-teal-500/50 focus:ring-teal-500/20 h-12"
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-base text-gray-300">{t('phone')}</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="tel"
                                                        placeholder={t('phonePlaceholder')}
                                                        {...field}
                                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-teal-500/50 focus:ring-teal-500/20 h-12"
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="meetingDate"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-col">
                                                    <FormLabel className="text-base text-gray-300">{t('meetingDate')}</FormLabel>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <FormControl>
                                                                <Button
                                                                    variant={"outline"}
                                                                    className={cn(
                                                                        "w-full pl-3 text-left font-normal bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white h-12",
                                                                        !field.value && "text-gray-500"
                                                                    )}
                                                                >
                                                                    {field.value ? (
                                                                        format(field.value, "PPP")
                                                                    ) : (
                                                                        <span>{t('pickDate')}</span>
                                                                    )}
                                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                </Button>
                                                            </FormControl>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto p-0 bg-zinc-900 border-zinc-800" align="start">
                                                            <Calendar
                                                                mode="single"
                                                                selected={field.value}
                                                                onSelect={(date) => {
                                                                    field.onChange(date);
                                                                    setSelectedDate(date);
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
                                                                className="bg-[#01191D] text-white rounded-md border border-white/10"
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                    <FormMessage className="text-red-400" />
                                                </FormItem>
                                            )}
                                        />

                                        {selectedDate && (
                                            <FormField
                                                control={form.control}
                                                name="meetingTime"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel className="text-base text-gray-300 flex items-center gap-2">
                                                            {t('meetingTime')}
                                                            {loadingSlots && <Loader2 className="h-4 w-4 animate-spin text-teal-400" />}
                                                        </FormLabel>
                                                        <FormControl>
                                                            <select
                                                                onChange={(e) => field.onChange(e.target.value)}
                                                                className="h-12 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-teal-500/50 focus:ring-teal-500/20 focus:outline-none"
                                                                value={field.value || ""}
                                                                disabled={loadingSlots}
                                                            >
                                                                <option value="" disabled>Select time</option>
                                                                {loadingSlots ? (
                                                                    <option value="" disabled>Loading availability...</option>
                                                                ) : generatedTimes.length === 0 ? (
                                                                    <option value="" disabled>No available times</option>
                                                                ) : generatedTimes.map((time) => (
                                                                    <option key={time} value={time} className="bg-zinc-900 text-white">
                                                                        {time}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </FormControl>
                                                        <FormMessage className="text-red-400" />
                                                    </FormItem>
                                                )}
                                            />
                                        )}
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-14 text-lg font-medium bg-teal-600 hover:bg-teal-500 text-white transition-all duration-300 rounded-xl mt-4"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? t('submitting') : t('scheduleMeeting')}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}
