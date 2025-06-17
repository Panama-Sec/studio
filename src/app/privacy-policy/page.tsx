
export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fade-in">
      <div className="prose lg:prose-xl max-w-3xl mx-auto">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-8 text-primary">Privacy Policy</h1>
        
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <p>Vront Solutions ("us", "we", or "our") operates the Vrontfolio website (the "Service").</p>
        
        <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for Vront Solutions is created with the help of a Privacy Policy Generator.</p>
        
        <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from Vrontfolio.</p>

        <h2 className="font-headline text-2xl font-semibold mt-8 mb-4 text-primary">Information Collection and Use</h2>
        <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
        
        <h3 className="font-headline text-xl font-semibold mt-6 mb-3 text-primary">Types of Data Collected</h3>
        
        <h4 className="font-headline text-lg font-semibold mt-4 mb-2 text-primary">Personal Data</h4>
        <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
        <ul>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Cookies and Usage Data</li>
        </ul>

        <h4 className="font-headline text-lg font-semibold mt-4 mb-2 text-primary">Usage Data</h4>
        <p>We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>

        <h2 className="font-headline text-2xl font-semibold mt-8 mb-4 text-primary">Use of Data</h2>
        <p>Vront Solutions uses the collected data for various purposes:</p>
        <ul>
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
          <li>To provide customer care and support</li>
          <li>To provide analysis or valuable information so that we can improve the Service</li>
          <li>To monitor the usage of the Service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>

        <h2 className="font-headline text-2xl font-semibold mt-8 mb-4 text-primary">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <ul>
          <li>By email: privacy@vrontsolutions.com</li>
        </ul>
        
        <p className="mt-12 text-sm text-muted-foreground"><em>This is a placeholder privacy policy. Consult with a legal professional to create a policy suitable for your specific needs.</em></p>
      </div>
    </div>
  );
}
