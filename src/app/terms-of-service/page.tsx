
export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in">
      <div className="prose lg:prose-xl max-w-3xl mx-auto">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-8 text-primary">Terms of Service</h1>
        
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Vrontfolio website (the "Service") operated by Vront Solutions ("us", "we", or "our").</p>
        
        <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
        
        <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

        <h2 className="font-headline text-2xl font-semibold mt-8 mb-4 text-primary">Intellectual Property</h2>
        <p>The Service and its original content, features and functionality are and will remain the exclusive property of Vront Solutions and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Vront Solutions.</p>

        <h2 className="font-headline text-2xl font-semibold mt-8 mb-4 text-primary">Links To Other Web Sites</h2>
        <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Vront Solutions.</p>
        <p>Vront Solutions has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Vront Solutions shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
        <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>

        <h2 className="font-headline text-2xl font-semibold mt-8 mb-4 text-primary">Termination</h2>
        <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
        <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
        
        <h2 className="font-headline text-2xl font-semibold mt-8 mb-4 text-primary">Disclaimer</h2>
        <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>

        <h2 className="font-headline text-2xl font-semibold mt-8 mb-4 text-primary">Governing Law</h2>
        <p>These Terms shall be governed and construed in accordance with the laws of Texas, United States, without regard to its conflict of law provisions.</p>
        <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>

        <h2 className="font-headline text-2xl font-semibold mt-8 mb-4 text-primary">Changes</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
        <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>

        <h2 className="font-headline text-2xl font-semibold mt-8 mb-4 text-primary">Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us:</p>
        <ul>
          <li>By email: legal@vrontsolutions.com</li>
        </ul>
        
        <p className="mt-12 text-sm text-muted-foreground"><em>This is a placeholder terms of service. Consult with a legal professional to create terms suitable for your specific needs.</em></p>
      </div>
    </div>
  );
}
