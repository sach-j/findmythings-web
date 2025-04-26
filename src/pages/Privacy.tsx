import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Find My Things Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                Find My Things ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our mobile application Find My Things (the "App").
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>

              <h3 className="text-xl font-medium mb-2">Information You Provide</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Personal information such as name and email address</li>
                  <li>Subscription and payment information (processed securely by Apple)</li>
              </ul>

              <h3 className="text-xl font-medium mb-2">Information Collected Automatically</h3>
              <ul className="list-disc pl-5">
                <li>Device information (model, operating system)</li>
                <li>App usage statistics and analytics</li>
                <li>Error logs and performance data</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-5">
                <li>Provide, maintain, and improve the App</li>
                <li>Process transactions and manage your account</li>
                <li>Respond to your comments and questions</li>
                <li>Send you technical notices and updates</li>
                <li>Analyze usage patterns to enhance user experience</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
              <p>
                All your inventory data is stored locally on your device and optionally backed up using your iCloud account. We implement appropriate technical and organizational measures to protect your personal information.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Subscription Information</h2>
              <p>
                Subscription payments are processed by Apple. We do not store your payment information. For information about how Apple handles your payment data, please refer to Apple's Privacy Policy.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p>Our app may use third-party services that collect information. These services include:</p>
              <ul className="list-disc pl-5">
                <li>Analytics tools to improve app performance</li>
                <li>Error reporting tools to identify and fix bugs</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
              <p>
                The App is not directed to children under 13, and we do not knowingly collect personal information from children under 13.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="font-medium mt-2">
                sachtech.com.apps@gmail.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 