
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
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { serviceRecommendation, ServiceRecommendationOutput } from "@/ai/flows/service-recommendation";
import { useState, useTransition } from "react";
import { Lightbulb, Sparkles, CheckSquare, FileText } from "lucide-react";

const formSchema = z.object({
  projectNeeds: z.string().min(20, { message: "Please describe your project needs in at least 20 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function RecommendationTool() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [recommendationResult, setRecommendationResult] = useState<ServiceRecommendationOutput | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectNeeds: "",
    },
  });

  const onSubmit = (values: FormData) => {
    setRecommendationResult(null); // Clear previous results
    startTransition(async () => {
      try {
        const result = await serviceRecommendation({ projectNeeds: values.projectNeeds });
        setRecommendationResult(result);
        toast({
          title: "Recommendations Generated!",
          description: "Here are some suggestions based on your input.",
        });
      } catch (error) {
        console.error("Recommendation error:", error);
        toast({
          title: "Error",
          description: "Failed to generate recommendations. Please try again.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center">
          <Sparkles className="h-6 w-6 mr-2 text-accent" />
          Describe Your Project
        </CardTitle>
        <CardDescription>
          Provide details about your project, goals, and any specific challenges. Our AI will analyze your needs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="projectNeeds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Needs</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'I need a modern e-commerce website for selling handmade crafts, with secure payments and inventory management...'"
                      className="min-h-[150px]"
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
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </span>
              ) : (
                <span className="flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5" /> Get Recommendations
                </span>
              )}
            </Button>
          </form>
        </Form>

        {isPending && (
          <div className="mt-8 text-center">
            <p className="text-muted-foreground flex items-center justify-center">
              <Sparkles className="h-5 w-5 mr-2 animate-pulse text-accent" />
              Our AI is thinking... Please wait.
            </p>
          </div>
        )}

        {recommendationResult && !isPending && (
          <div className="mt-10 space-y-8 animate-fade-in">
            <Card className="bg-secondary/50">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                  <CheckSquare className="h-6 w-6 mr-2 text-primary" />
                  Recommended Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                {recommendationResult.recommendedServices.length > 0 ? (
                  <ul className="list-disc list-inside space-y-2 text-foreground">
                    {recommendationResult.recommendedServices.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">No specific services could be recommended based on your input. Try to be more specific.</p>
                )}
              </CardContent>
            </Card>

            <Card className="bg-secondary/50">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-primary" />
                  Relevant Case Studies
                </CardTitle>
              </CardHeader>
              <CardContent>
                 {recommendationResult.relevantCaseStudies.length > 0 ? (
                  <ul className="list-disc list-inside space-y-2 text-foreground">
                    {recommendationResult.relevantCaseStudies.map((study, index) => (
                      <li key={index}>{study}</li>
                    ))}
                  </ul>
                 ) : (
                  <p className="text-muted-foreground">No specific case studies found matching your input. You can browse all our projects.</p>
                 )}
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
