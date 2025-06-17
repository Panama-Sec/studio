
import { RecommendationTool } from '@/components/recommendation-tool';
import { Lightbulb } from 'lucide-react';

export default function RecommendationsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in">
      <div className="text-center mb-12 md:mb-16">
        <Lightbulb className="h-16 w-16 text-accent mx-auto mb-6" />
        <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-4">AI-Powered Recommendations</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Describe your project needs, and our AI will suggest relevant Vront Solutions services and showcase suitable project case studies.
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        <RecommendationTool />
      </div>
    </div>
  );
}
