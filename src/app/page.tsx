
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Lightbulb, Briefcase, Users, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: <BarChart3 className="h-10 w-10 text-accent" />,
    title: 'Web Development',
    description: 'Crafting responsive and high-performance websites tailored to your business needs.',
    link: '/services#web-dev',
  },
  {
    icon: <Briefcase className="h-10 w-10 text-accent" />,
    title: 'Digital Strategy',
    description: 'Innovative strategies to boost your online presence and achieve your goals.',
    link: '/services#digital-strategy',
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: 'UI/UX Design',
    description: 'User-centric designs that are both beautiful and intuitive.',
    link: '/services#ui-ux',
  },
];

const featuredProjects = [
  {
    id: '1',
    title: 'E-commerce Platform Redesign',
    category: 'Web Development',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'modern website',
    description: 'Revamped an outdated e-commerce site, boosting sales by 30% and improving user experience.',
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    category: 'UI/UX Design',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile app',
    description: 'Designed an intuitive mobile banking application focusing on security and ease of use.',
  },
];

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Innovative <span className="text-primary">Digital Solutions</span> for a Brighter Future
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Vront Solutions empowers businesses with cutting-edge technology and creative strategies to thrive in the digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/projects">Explore Our Work <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-semibold border-primary text-primary hover:bg-primary/10">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services-overview" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a range of services designed to meet your unique business challenges and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="text-center hover:shadow-xl transition-shadow duration-300 animate-slide-up">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="link" asChild className="text-primary font-semibold">
                    <Link href={service.link}>Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a glimpse at some of the impactful solutions we've delivered for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slide-up">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                  data-ai-hint={project.imageHint}
                />
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-accent font-semibold">{project.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                   <Button variant="outline" asChild className="font-semibold border-primary text-primary hover:bg-primary/10">
                    <Link href={`/projects#${project.id}`}>View Case Study <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/projects">See All Projects <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* AI Recommendation Teaser Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-primary-foreground p-8 md:p-12 shadow-xl animate-slide-up">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-4">Need Project Guidance?</h2>
                <p className="text-lg text-primary-foreground/80 mb-6">
                  Use our AI-powered tool to get personalized service recommendations and relevant case studies based on your project needs.
                </p>
                 <Button asChild size="lg" variant="secondary" className="font-semibold bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/recommendations">Try AI Recommender <Lightbulb className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Lightbulb className="h-24 w-24 md:h-32 md:w-32 text-accent" />
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
