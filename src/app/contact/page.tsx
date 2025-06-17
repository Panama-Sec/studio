
import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We're here to answer your questions and help you get started on your next digital project.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8 animate-slide-up">
          <div>
            <h2 className="font-headline text-2xl font-semibold mb-4 text-primary">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <a href="mailto:info@vrontsolutions.com" className="text-muted-foreground hover:text-primary transition-colors">info@vrontsolutions.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">+1 (234) 567-890</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold">Our Office</h3>
                  <p className="text-muted-foreground">123 Digital Avenue, Suite 400<br />Tech City, TX 75001</p>
                </div>
              </div>
            </div>
          </div>
           <div>
            <h2 className="font-headline text-2xl font-semibold mb-4 text-primary">Business Hours</h2>
            <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
            <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
          </div>
        </div>

        <div className="animate-slide-up" style={{animationDelay: '0.1s'}}>
          <h2 className="font-headline text-2xl font-semibold mb-6 text-primary text-center md:text-left">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
       <div className="mt-16 md:mt-24">
        <h2 className="font-headline text-3xl font-bold text-center mb-8">Our Location</h2>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.930799876595!2d-96.79685598481784!3d32.77666418100136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9927b2708653%3A0x53b586f9cf03798!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            title="Vront Solutions Location"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
