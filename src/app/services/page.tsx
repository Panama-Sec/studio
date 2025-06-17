
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BarChart3, Palette, Smartphone, CloudCog, Megaphone, Lightbulb, SearchCode, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'web-dev',
    icon: <BarChart3 className="h-12 w-12 text-accent" />,
    title: 'Custom Web Development',
    description: 'We build scalable, secure, and high-performance web applications tailored to your specific business requirements. From e-commerce platforms to complex enterprise solutions, we deliver excellence.',
    details: [
      'Frontend Development (React, Next.js, Vue)',
      'Backend Development (Node.js, Python, Java)',
      'Full-Stack Solutions',
      'API Development & Integration',
      'CMS Development (WordPress, Strapi)',
    ],
  },
  {
    id: 'ui-ux',
    icon: <Palette className="h-12 w-12 text-accent" />,
    title: 'UI/UX Design',
    description: 'Our user-centric design approach ensures intuitive and engaging experiences. We craft visually appealing interfaces that are easy to navigate and drive user satisfaction.',
    details: [
      'User Research & Persona Development',
      'Wireframing & Prototyping',
      'Interaction Design',
      'Visual Design & Branding',
      'Usability Testing',
    ],
  },
  {
    id: 'mobile-apps',
    icon: <Smartphone className="h-12 w-12 text-accent" />,
    title: 'Mobile App Development',
    description: 'We develop native and cross-platform mobile applications for iOS and Android that provide seamless user experiences and robust functionality.',
    details: [
      'iOS App Development (Swift, Objective-C)',
      'Android App Development (Kotlin, Java)',
      'Cross-Platform Development (React Native, Flutter)',
      'App Maintenance & Support',
    ],
  },
  {
    id: 'cloud-solutions',
    icon: <CloudCog className="h-12 w-12 text-accent" />,
    title: 'Cloud Solutions',
    description: 'Leverage the power of the cloud with our expert services. We help you migrate, manage, and optimize your cloud infrastructure for scalability, reliability, and cost-efficiency.',
    details: [
      'Cloud Migration (AWS, Azure, GCP)',
      'DevOps & CI/CD Implementation',
      'Serverless Architecture',
      'Cloud Security & Compliance',
      'Infrastructure as Code (Terraform)',
    ],
  },
  {
    id: 'digital-marketing',
    icon: <Megaphone className="h-12 w-12 text-accent" />,
    title: 'Digital Marketing',
    description: 'Boost your online presence and reach your target audience effectively with our data-driven digital marketing strategies.',
    details: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click (PPC) Advertising',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
    ],
  },
  {
    id: 'ai-consulting',
    icon: <Lightbulb className="h-12 w-12 text-accent" />,
    title: 'AI & Machine Learning',
    description: 'Unlock the potential of Artificial Intelligence for your business. We provide AI consulting and develop custom ML models to solve complex challenges.',
    details: [
      'AI Strategy Consulting',
      'Custom Machine Learning Model Development',
      'Natural Language Processing (NLP)',
      'Computer Vision Solutions',
      'Data Analytics & Predictive Modeling',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive digital solutions designed to propel your business forward.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={service.id} id={service.id} className="flex flex-col hover:shadow-xl transition-shadow duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
            <CardHeader className="items-center text-center">
              <div className="p-4 bg-primary/10 rounded-full w-fit mb-4">
                {service.icon}
              </div>
              <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <h4 className="font-semibold mb-2 text-primary">Key areas include:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                {service.details.slice(0,3).map((detail, i) => ( // Show first 3 details
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
                <Button variant="outline" asChild className="w-full font-semibold border-primary text-primary hover:bg-primary/10">
                  <Link href={`/contact?service=${encodeURIComponent(service.title)}`}>Inquire About {service.title}</Link>
                </Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="text-center mt-16 md:mt-24">
        <SearchCode className="h-16 w-16 text-accent mx-auto mb-6" />
        <h2 className="font-headline text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Let's discuss how our expertise can help you achieve your business objectives.
        </p>
        <Button asChild size="lg" className="font-semibold">
          <Link href="/contact">Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </div>
    </div>
  );
}
