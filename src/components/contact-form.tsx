
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

// Server action (simulated)
async function submitContactForm(data: FormData): Promise<{ success: boolean; message: string }> {
  "use server";
  // In a real app, you'd send this data to your backend, email service, or database.
  console.log("Form data received:", data);

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate success/failure
  if (data.email.includes("fail")) { // Simple test condition for failure
      return { success: false, message: "Submission failed. Please try again." };
  }
  return { success: true, message: "Your message has been sent successfully! We'll be in touch soon." };
}


export function ContactForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const serviceQuery = searchParams.get('service');
  
  const defaultSubject = serviceQuery ? `Inquiry about ${serviceQuery}` : "";

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: defaultSubject,
      message: "",
    },
  });

  const onSubmit = (values: FormData) => {
    startTransition(async () => {
      const result = await submitContactForm(values);
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 border rounded-lg shadow-sm bg-card">
        <FormField
          control={form.control}
          name="name"
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
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Project Inquiry" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your project or inquiry..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full font-semibold" disabled={isPending}>
          {isPending ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center">
              <Send className="mr-2 h-5 w-5" /> Send Message
            </span>
          )}
        </Button>
      </form>
    </Form>
  );
}
