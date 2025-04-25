import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                Welcome to FindMyThings ("we," "our," or "us"). We are committed to protecting your privacy and the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our FindMyThings mobile application ("App").
              </p>
              <p>
                Please read this Privacy Policy carefully. By using the App, you agree to the terms of this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access or use the App.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <h3 className="text-xl font-medium mb-2">Personal Information</h3>
              <p>We may collect the following personal information:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Your name and email address when you create an account</li>
                <li>Device information, including device model, operating system, and unique device identifiers</li>
                <li>App usage data and preferences</li>
                <li>Photos you upload to the App</li>
                <li>Location data (if you grant permission)</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-2">Item Information</h3>
              <p>When you add items to the App, we collect information about those items, including:</p>
              <ul className="list-disc pl-5">
                <li>Item descriptions and categorizations</li>
                <li>Photos of items</li>
                <li>Location data associated with items</li>
                <li>Custom tags and notes</li>
                <li>Value information (for Premium users)</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-5">
                <li>Provide, maintain, and improve the App functionality</li>
                <li>Process and fulfill your requests, such as tracking items and providing notifications</li>
                <li>Personalize your experience and deliver content relevant to your interests</li>
                <li>Communicate with you about updates, security alerts, and support</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Protect against, identify, and prevent fraud and other illegal activity</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              <p>
                Your data is stored on secure servers and within your device's local storage. We use encryption to protect sensitive information transmitted online.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
              <ul className="list-disc pl-5">
                <li>With service providers who perform services on our behalf</li>
                <li>To comply with legal obligations</li>
                <li>To protect and defend our rights and property</li>
                <li>With your consent or at your direction</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Choices</h2>
              <p>You have several choices regarding your personal information:</p>
              <ul className="list-disc pl-5">
                <li>You can access and update your account information through the App settings</li>
                <li>You can choose whether to allow location permissions</li>
                <li>You can delete items and their associated data from your inventory</li>
                <li>You can request deletion of your account by contacting support</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
              <p>
                Our App is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <p className="font-medium mt-2">
                privacy@findmythings.app
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 