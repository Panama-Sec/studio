
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Zap, Eye, Handshake, Brain } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Elara Vance',
    role: 'CEO & Chief Strategist',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'professional woman',
    bio: 'Visionary leader with 15+ years in tech innovation, driving Vront Solutions towards new frontiers.',
  },
  {
    name: 'Marcus Cole',
    role: 'CTO & Lead Architect',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'professional man',
    bio: 'Expert technologist ensuring robust and scalable solutions, passionate about emerging technologies.',
  },
  {
    name: 'Sofia Chen',
    role: 'Head of Design',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'creative designer',
    bio: 'Creative powerhouse translating complex ideas into intuitive and beautiful user experiences.',
  },
  {
    name: 'Raj Patel',
    role: 'Director of Engineering',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'engineer team lead',
    bio: 'Seasoned engineer leading our development teams to deliver high-quality, impactful products.',
  },
];

const values = [
  { icon: <Zap className="h-8 w-8 text-accent" />, title: 'Innovation', description: 'We constantly seek creative solutions and embrace new technologies to stay ahead.' },
  { icon: <Handshake className="h-8 w-8 text-accent" />, title: 'Collaboration', description: 'We believe in strong partnerships with our clients and within our team to achieve shared goals.' },
  { icon: <Target className="h-8 w-8 text-accent" />, title: 'Excellence', description: 'We are committed to delivering high-quality work that exceeds expectations.' },
  { icon: <Brain className="h-8 w-8 text-accent" />, title: 'Integrity', description: 'We operate with transparency and honesty in all our interactions.' },
];

export default function OurWorkPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section for Our Work */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">About Vront Solutions</h1>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Discover the driving force behind our innovative solutions – our vision, mission, values, and the talented team that makes it all happen.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Eye className="h-16 w-16 text-primary mb-6" />
              <h2 className="font-headline text-3xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To be a globally recognized leader in digital transformation, empowering businesses to achieve sustainable growth and make a positive impact through technology.
              </p>
              <Image src="https://placehold.co/600x400.png" alt="Vision Abstract" data-ai-hint="abstract future" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
            <div className="animate-slide-up" style={{animationDelay: '0.1s'}}>
              <Target className="h-16 w-16 text-primary mb-6" />
              <h2 className="font-headline text-3xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To deliver innovative, reliable, and tailored digital solutions that solve complex challenges, enhance user experiences, and drive measurable results for our clients.
              </p>
              <Image src="https://placehold.co/600x400.png" alt="Mission Abstract" data-ai-hint="team working" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
       <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our culture.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center hover:shadow-xl transition-shadow duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="font-headline text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate group of strategists, designers, and developers dedicated to your success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="text-center overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover object-top"
                  data-ai-hint={member.imageHint}
                />
                <CardHeader className="pb-2">
                  <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-accent font-semibold mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
