
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const projects = [
  {
    id: '1',
    title: 'E-commerce Platform Redesign',
    category: 'Web Development & UI/UX',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'modern website',
    problem: 'Client faced declining sales and poor user engagement on their outdated e-commerce platform.',
    solution: 'We conducted a complete overhaul of the platform, focusing on a modern UI/UX, streamlined checkout process, and improved performance. Implemented a new inventory management system.',
    outcomes: [
      '30% increase in sales within 3 months.',
      '40% improvement in user engagement metrics.',
      'Reduced cart abandonment rate by 25%.',
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Stripe API', 'PostgreSQL'],
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    category: 'Mobile App Development & UI/UX Design',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile app interface',
    problem: 'A regional bank needed a secure and user-friendly mobile banking app to compete with larger institutions.',
    solution: 'Designed and developed a native mobile app with features like biometric login, fund transfers, bill payments, and transaction history. Prioritized security with multi-factor authentication and encryption.',
    outcomes: [
      'Successfully launched on iOS and Android platforms.',
      'Achieved 4.8-star average rating in app stores.',
      '20% increase in mobile banking adoption among customers.',
    ],
    technologies: ['React Native', 'Firebase', 'AES-256 Encryption'],
  },
  {
    id: '3',
    title: 'Cloud Migration for SaaS Company',
    category: 'Cloud Solutions & DevOps',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cloud infrastructure',
    problem: 'A growing SaaS company struggled with scalability and reliability of their on-premise infrastructure.',
    solution: 'Migrated their entire infrastructure to AWS, implementing auto-scaling, load balancing, and a CI/CD pipeline for efficient deployments. Enhanced monitoring and logging capabilities.',
    outcomes: [
      '99.99% uptime achieved.',
      'Reduced infrastructure costs by 15%.',
      'Improved deployment frequency by 50%.',
    ],
    technologies: ['AWS (EC2, S3, RDS, Lambda)', 'Docker', 'Kubernetes', 'Jenkins'],
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-4">Our Portfolio</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our successful projects and see how we've helped businesses achieve their digital ambitions.
        </p>
      </div>

      <div className="space-y-16 md:space-y-24">
        {projects.map((project, index) => (
          <Card key={project.id} id={project.id} className="overflow-hidden shadow-lg animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="md:flex">
              <div className="md:w-2/5">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-full object-cover"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <div className="md:w-3/5">
                <CardHeader className="p-6">
                  <CardTitle className="font-headline text-2xl sm:text-3xl mb-1">{project.title}</CardTitle>
                  <CardDescription className="text-accent font-semibold text-md">{project.category}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-headline text-lg font-semibold mb-2 text-primary">The Challenge</h3>
                      <p className="text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold mb-2 text-primary">Our Solution</h3>
                      <p className="text-muted-foreground">{project.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold mb-2 text-primary">Key Outcomes</h3>
                      <ul className="space-y-1">
                        {project.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                     <div>
                      <h3 className="font-headline text-lg font-semibold mb-2 text-primary">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16 md:mt-24">
        <p className="text-lg text-muted-foreground mb-6">Interested in starting a project with us?</p>
        <Button asChild size="lg" className="font-semibold">
          <Link href="/contact">Let's Talk <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </div>
    </div>
  );
}
