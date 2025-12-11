'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Mail, MapPin, Clock } from "lucide-react";
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
import { useCollection } from "@/lib/sdk";
import { toast } from "sonner";
import { useTranslations } from 'next-intl';

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
    const t = useTranslations('contact');
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const contactCollection = useCollection("contact_us");

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
            await contactCollection.add({
                full_name: values.fullName,
                email: values.email,
                phone: values.phone,
                meeting_date: values.meetingDate.toISOString(),
                meeting_time: values.meetingTime,
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
                                                                disabled={(date) =>
                                                                    date < new Date() || date < new Date("1900-01-01")
                                                                }
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
                                                        <FormLabel className="text-base text-gray-300">{t('meetingTime')}</FormLabel>
                                                        <FormControl>
                                                            <select
                                                                onChange={(e) => field.onChange(e.target.value)}
                                                                className="h-12 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-teal-500/50 focus:ring-teal-500/20 focus:outline-none"
                                                                value={field.value || ""}
                                                            >
                                                                <option value="" disabled>Select time</option>
                                                                {availableTimes.map((time) => (
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
