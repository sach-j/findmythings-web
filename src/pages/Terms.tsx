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
              <h2 className="text-2xl font-semibold mb-4">3. App Store and Device Requirements</h2>
              <p>
                FindMyThings is available exclusively through the Apple App Store and requires:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>iOS 16.0 or later</li>
                <li>Compatible iPhone device</li>
                <li>Valid Apple ID for App Store access</li>
                <li>Internet connection for premium features and updates</li>
              </ul>
              <p>
                Your use of the App is also governed by Apple's Terms of Service and the Licensed Application End User License Agreement (EULA). In case of conflict between these Terms and Apple's terms, Apple's terms shall prevail regarding your use of the App through the Apple App Store.
              </p>
              <p className="mt-2">
                Apple is not responsible for the App, its content, maintenance, or support services. Any claims, losses, liabilities, damages, costs, or expenses attributable to failure to conform to any warranty will be our sole responsibility.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. User Accounts</h2>
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
              <h2 className="text-2xl font-semibold mb-4">5. Subscription Terms</h2>
              <p>
                FindMyThings offers a free basic service and a premium subscription service. By subscribing to our premium service, you agree to the following terms:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>
                  <strong>Billing:</strong> Premium subscriptions are billed either monthly (£2.99) or annually (£30.99) in advance through Apple's App Store.
                </li>
                <li>
                  <strong>Automatic Renewal:</strong> Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period through your App Store account settings.
                </li>
                <li>
                  <strong>Payment:</strong> Payment will be charged to your Apple ID account at confirmation of purchase. Subscription payments are processed by Apple, not by us.
                </li>
                <li>
                  <strong>Managing Subscriptions:</strong> You can manage and cancel subscriptions by going to your App Store account settings after purchase. Subscriptions may be managed by going to Settings &gt; [your name] &gt; Subscriptions on your device.
                </li>
                <li>
                  <strong>Cancellation:</strong> You can cancel your subscription through your App Store account settings. No refunds will be provided for any unused portion of a subscription period, as per Apple's standard terms.
                </li>
                <li>
                  <strong>Feature Access:</strong> Premium features will remain accessible until the end of your current billing period if you cancel. After cancellation, you will revert to the free service tier.
                </li>
                <li>
                  <strong>Price Changes:</strong> We reserve the right to adjust pricing for our service. Price changes for existing subscribers will take effect at the next renewal period following notice to you.
                </li>
              </ul>
              <p>
                For subscription issues, billing questions, or refund requests, please contact Apple Support directly, as all subscription transactions are handled by Apple.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. User Content</h2>
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
              <h2 className="text-2xl font-semibold mb-4">7. Prohibited Uses</h2>
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
              <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
              <p>
                The App and its original content, features, and functionality are owned by FindMyThings and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
              <p>
                In no event shall FindMyThings, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Your access to or use of or inability to access or use the App</li>
                <li>Any conduct or content of any third party on the App</li>
                <li>Any content obtained from the App</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                <li>Loss or theft of physical items, regardless of whether they were tracked in the App</li>
                <li>Failure of notifications to deliver due to device settings, network issues, or other technical problems</li>
                <li>Data loss, corruption, or synchronization failures</li>
                <li>Interruption or termination of service</li>
              </ul>
              <p>
                Our total liability to you for any damages, losses, and causes of action (whether in contract, tort, or otherwise) shall not exceed the amount you have paid us in the twelve (12) months preceding the claim.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Disclaimers</h2>
              <p>
                The App is provided on an "AS IS" and "AS AVAILABLE" basis without any warranties, either express or implied. We do not guarantee that the App will always be available, uninterrupted, or error-free.
              </p>
              <p>
                While FindMyThings helps you track and organize your belongings, we cannot guarantee the recovery of lost or stolen items. The App is meant to be an organizational tool, not a security or theft prevention system. We make no warranty that:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Notifications will be delivered reliably or on time</li>
                <li>Data will be preserved without loss or corruption</li>
                <li>The App will meet your specific requirements</li>
                <li>Any errors or defects will be corrected</li>
                <li>The App will be compatible with future iOS updates</li>
              </ul>
              <p>
                You acknowledge that the App's effectiveness depends on proper usage, device settings, and network connectivity, which are outside our control.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
              <p>
                If you have any questions or concerns about these Terms, please contact us at:
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

export default Terms; 