'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
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
import { useState } from "react";

const formSchema = z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    meetingDate: z.date({
        required_error: "Please select a date and time for the meeting",
    }),
    meetingTime: z.string({
        required_error: "Please select a time for the meeting",
    }),
});

const availableTimes = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
];

export default function ContactUs() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return <div>
        <section className="container flex mx-auto my-40">
            <div className="w-3/12">
                <p className="text-gray-400 uppercase tracking-widest text-sm mb-5">Get in Touch</p>
            </div>
            <div>
                <h1 className="text-5xl">
                    Ready to discover what we know about your area of interest?
                </h1>
                <div className="mt-20">
                    <p className="tracking-widest uppercase text-sm">Mail to</p>
                    <a className="text-5xl" href="mailto:support@milsat.africa">support@milsat.africa</a>
                </div>
                <div className="flex items-center justify-between">
                    <div className="mt-20">
                        <p className="tracking-widest uppercase text-sm">Address</p>
                        <a className="text-xl text-gray-400" href="mailto:support@milsat.africa">H4, Plot 574, Ameh Ebute Street, Wuye District, Abuja.</a>
                    </div>
                    <div className="mt-20">
                        <p className="tracking-widest uppercase text-sm">Office Hours</p>
                        <a className="text-xl text-gray-400" href="mailto:support@milsat.africa">Monday to Friday: 9:00 AM - 6:00PM</a>
                    </div>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-40">
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
                                        <FormLabel>Email Address</FormLabel>
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
                                            <Input type="tel" placeholder="+234 800 000 0000" {...field} />
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
                                        <Popover>
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
                                                    }}
                                                    disabled={(date) =>
                                                        date < new Date() || date < new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {selectedDate && (
                                <FormField
                                    control={form.control}
                                    name="meetingTime"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Meeting Time</FormLabel>
                                            <div className="grid grid-cols-3 gap-2">
                                                {availableTimes.map((time) => (
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
                        </div>
                        <div className="mt-10">
                            <Button type="submit" className="px-6 py-3">Schedule Meeting</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
        <section className="container mx-auto mb-20">
        </section>
    </div>
}