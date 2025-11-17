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

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export default function NewsletterSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const newsletterCollection = useCollection("newsletter");

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

      toast.success("Successfully subscribed!", {
        description: "Thank you for subscribing to our newsletter.",
      });

      form.reset();
    } catch (error: any) {
      toast.error("Subscription Failed", {
        description: error.message || "Failed to subscribe. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="w-full py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-400 mb-8 text-[18px]">
            Subscribe to our newsletter for the latest insights on African data intelligence,
            mapping innovations, and industry trends.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="border border-[#343333] flex items-center rounded-lg overflow-hidden">

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          className="px-6 py-3 rounded-full bg-background text-foreground placeholder:text-foreground/50 border-0 h-auto"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-background/80 text-left" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-[#343333] hover:bg-[#252424] cursor-pointer text-foreground transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed h-auto rounded-none"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
            </form>
          </Form>
          <p className="text-sm text-background/60 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
