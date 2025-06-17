
import { Briefcase, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 text-xl font-headline font-bold text-primary mb-4">
              <Briefcase className="h-6 w-6 text-accent" />
              <span>Vront Solutions</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Crafting innovative digital solutions to elevate your business.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-headline font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/our-work" className="hover:text-primary transition-colors">Our Work</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-headline font-semibold text-primary mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@vrontsolutions.com" className="hover:text-primary transition-colors">info@vrontsolutions.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>123 Digital Avenue, Tech City</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-headline font-semibold text-primary mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Vront Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
