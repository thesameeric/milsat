'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useCollection } from "@/lib/sdk";
import { useTranslations } from 'next-intl';

export default function NewsletterSection() {
  const t = useTranslations('newsletter');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const newsletterCollection = useCollection("newsletter");

  const formSchema = z.object({
    email: z.string().email(t('invalidEmail')),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      await newsletterCollection.add({
        email: values.email,
        subscribed_at: new Date().toISOString(),
      });

      toast.success(t('successTitle'), {
        description: t('successDescription'),
      });

      form.reset();
    } catch (error: any) {
      toast.error(t('errorTitle'), {
        description: error.message || t('errorDescription'),
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="w-full flex items-center py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-400 mb-10 text-[18px]">
            {t('description')}
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
              <div className="border border-[#343333] flex flex-col sm:flex-row items-stretch sm:items-center rounded-lg overflow-hidden">

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t('placeholder')}
                          className="px-4 sm:px-6 py-3 outline-none rounded-none bg-background text-foreground placeholder:text-foreground/50 border-0 h-auto text-sm sm:text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-background/80 text-left px-4 text-xs sm:text-sm" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 sm:px-8 py-3 bg-[#343333] hover:bg-[#252424] cursor-pointer text-foreground transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed h-auto rounded-none text-sm sm:text-base"
                >
                  {isSubmitting ? t('subscribing') : t('subscribe')}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
