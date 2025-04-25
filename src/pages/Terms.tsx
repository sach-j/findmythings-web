import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the FindMyThings mobile application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you should not use the App.
              </p>
              <p>
                We reserve the right to modify these Terms at any time. Your continued use of the App after any such changes constitutes your acceptance of the new Terms.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p>
                FindMyThings is an item tracking and inventory management application that allows users to organize, categorize, and locate their personal belongings. The App offers both free and premium subscription services with varying features.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
              <p>
                To use certain features of the App, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to:
              </p>
              <ul className="list-disc pl-5">
                <li>Provide accurate and complete information when creating your account</li>
                <li>Update your information as needed to keep it current</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Be responsible for all activities that occur under your account</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Subscription Terms</h2>
              <p>
                FindMyThings offers a free basic service and a premium subscription service. By subscribing to our premium service, you agree to the following terms:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Billing:</strong> Premium subscriptions are billed either monthly (£2.99) or annually (£30.99) in advance.
                </li>
                <li>
                  <strong>Automatic Renewal:</strong> Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period.
                </li>
                <li>
                  <strong>Cancellation:</strong> You can cancel your subscription through your App Store account settings. No refunds will be provided for any unused portion of a subscription period.
                </li>
                <li>
                  <strong>Price Changes:</strong> We reserve the right to adjust pricing for our service or any components thereof in any manner and at any time as we may determine in our sole and absolute discretion. Any price changes will take effect following notice to you.
                </li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. User Content</h2>
              <p>
                You retain all rights to any content you submit, post, or display on or through the App ("User Content"). By submitting User Content to the App, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, modify, and display the User Content in connection with the service.
              </p>
              <p>
                You represent and warrant that:
              </p>
              <ul className="list-disc pl-5">
                <li>You own the User Content or have the right to use and license it to us</li>
                <li>The User Content does not violate the rights of any third party</li>
                <li>The User Content complies with these Terms and all applicable laws</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Prohibited Uses</h2>
              <p>
                You agree not to use the App for any unlawful purpose or in any way that could damage, disable, overburden, or impair the App. Prohibited activities include:
              </p>
              <ul className="list-disc pl-5">
                <li>Using the App to track items that do not belong to you without permission</li>
                <li>Attempting to gain unauthorized access to the App or other users' accounts</li>
                <li>Using the App to transmit viruses, malware, or other harmful code</li>
                <li>Interfering with or disrupting the integrity or performance of the App</li>
                <li>Reverse engineering or attempting to extract the source code of the App</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
              <p>
                The App and its original content, features, and functionality are owned by FindMyThings and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p>
                In no event shall FindMyThings, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-5">
                <li>Your access to or use of or inability to access or use the App</li>
                <li>Any conduct or content of any third party on the App</li>
                <li>Any content obtained from the App</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Disclaimers</h2>
              <p>
                The App is provided on an "AS IS" and "AS AVAILABLE" basis without any warranties, either express or implied. We do not guarantee that the App will always be available, uninterrupted, or error-free.
              </p>
              <p>
                While FindMyThings helps you track and organize your belongings, we cannot guarantee the recovery of lost or stolen items. The App is meant to be an organizational tool, not a security or theft prevention system.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
              <p>
                If you have any questions or concerns about these Terms, please contact us at:
              </p>
              <p className="font-medium mt-2">
                legal@findmythings.app
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms; 