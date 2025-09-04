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
                We reserve the right to modify these Terms at any time with thirty (30) days advance notice. We will notify you of material changes by email (if provided) or through in-app notifications. Your continued use of the App after any such changes constitutes your acceptance of the new Terms.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Eligibility and Age Requirements</h2>
              <p>
                By using the App, you represent and warrant that:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>You are at least 13 years of age</li>
                <li>You have the legal capacity to enter into these Terms</li>
                <li>If you are between 13 and 18 years of age, you have obtained verifiable parental or guardian consent to use the App</li>
                <li>Your use of the App complies with all applicable laws and regulations in your jurisdiction</li>
                <li>You are not located in a country subject to a US government embargo or designated as a "terrorist supporting" country</li>
                <li>You are not listed on any US government list of prohibited or restricted parties</li>
              </ul>
              <p>
                If you are a parent or guardian and you believe your child under 13 has provided us with personal information, please contact us immediately so we can delete such information.
              </p>
              <p>
                We reserve the right to verify your age and legal capacity at any time and may suspend or terminate your access if we cannot verify your eligibility.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Description of Service</h2>
              <p>
                FindMyThings is an item tracking and inventory management application that allows users to organize, categorize, and locate their personal belongings. The App offers both free and premium subscription services with varying features.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. App Store and Device Requirements</h2>
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
              <h2 className="text-2xl font-semibold mb-4">5. User Accounts</h2>
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
              <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
              <p>
                We may terminate or suspend your account and access to the App immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms.
              </p>
              
              <h3 className="text-xl font-medium mb-2 mt-4">Immediate Termination</h3>
              <p>We reserve the right to immediately terminate or suspend your access without notice if:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>You violate any provision of these Terms</li>
                <li>You use the App for any unlawful purpose</li>
                <li>You attempt to circumvent security measures or access restrictions</li>
                <li>You provide false, misleading, or incomplete information</li>
                <li>You engage in conduct that could damage our reputation or harm other users</li>
                <li>We are required to do so by law or court order</li>
                <li>We suspect fraudulent, abusive, or suspicious activity</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-2">Effect of Termination</h3>
              <p>
                Upon termination, your right to use the App will cease immediately. All data stored locally on your device will remain, but we may delete any data stored on our servers. You remain liable for all charges incurred prior to termination.
              </p>
              
              <p className="mt-4">
                <strong>Survival:</strong> Sections relating to intellectual property, liability limitations, indemnification, and dispute resolution will survive termination of these Terms.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. User Content</h2>
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
              <h2 className="text-2xl font-semibold mb-4">8. Prohibited Uses</h2>
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
              <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
              <p>
                The App and its original content, features, and functionality are owned by FindMyThings and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
              <p>
                <strong>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW</strong>, in no event shall FindMyThings, the author/creator of FindMyThings, its directors, employees, partners, agents, suppliers, affiliates, successors, or assigns be liable for any direct, indirect, incidental, special, consequential, exemplary, or punitive damages, including without limitation:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Loss of profits, revenue, business, or anticipated savings</li>
                <li>Loss of data, files, or information</li>
                <li>Loss of use, goodwill, or reputation</li>
                <li>Personal injury or property damage</li>
                <li>Business interruption or downtime</li>
                <li>Cost of substitute goods or services</li>
                <li>Any other intangible losses</li>
              </ul>
              
              <p>This limitation applies regardless of:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Your access to, use of, or inability to access or use the App</li>
                <li>Any conduct or content of any third party</li>
                <li>Any content obtained from the App</li>
                <li>Unauthorized access, use, or alteration of your data</li>
                <li>Loss, theft, damage, or inability to locate physical items</li>
                <li>Failure of notifications, reminders, or alerts to function or deliver</li>
                <li>Data loss, corruption, synchronization, or backup failures</li>
                <li>App crashes, bugs, errors, or malfunctions</li>
                <li>Interruption, suspension, or termination of service</li>
                <li>Updates that cause compatibility issues or data loss</li>
                <li>Third-party integrations or services (including Apple services)</li>
                <li>Acts of God, natural disasters, or events beyond our control</li>
              </ul>
              
              <p>
                This limitation applies whether the claim is based on contract, tort (including negligence), strict liability, breach of warranty, or any other legal theory, and whether or not we have been advised of the possibility of such damages.
              </p>
              
              <p>
                <strong>AGGREGATE LIABILITY CAP:</strong> Our total aggregate liability to you for any and all damages, losses, and causes of action (whether in contract, tort, negligence, strict liability, or otherwise) arising out of or relating to these Terms or your use of the App shall not exceed the greater of (i) the total amount you have paid us in the twelve (12) months preceding the claim, or (ii) £10 (ten pounds sterling).
              </p>
              
              <p>
                Some jurisdictions do not allow the limitation or exclusion of certain damages, so some of the above limitations may not apply to you. In such jurisdictions, our liability will be limited to the fullest extent permitted by law.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Disclaimers</h2>
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
              <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless FindMyThings, the author/creator of FindMyThings, and our respective directors, employees, agents, suppliers, affiliates, successors, and assigns from and against any and all claims, liabilities, damages, losses, costs, expenses, fees (including reasonable attorneys' fees and court costs) that arise from or relate to:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Your use or misuse of the App</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of any third party</li>
                <li>Your User Content or any content you submit through the App</li>
                <li>Any false, misleading, or inaccurate information you provide</li>
                <li>Your negligent, willful, or unlawful conduct</li>
                <li>Any claim that your use of the App caused damage to a third party</li>
                <li>Any disputes between you and third parties</li>
                <li>Any loss, theft, or damage to physical items that you track in the App</li>
                <li>Your reliance on App data, notifications, or reminders for critical decisions</li>
              </ul>
              <p>
                This indemnification obligation will survive termination of these Terms and your use of the App. We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you, and you agree to cooperate with our defense of such claims.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">13. Governing Law and Dispute Resolution</h2>
              <p className="mb-4">
                These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
              </p>
              
              <h3 className="text-xl font-medium mb-2">Dispute Resolution</h3>
              <p className="mb-4">
                Any disputes arising out of or relating to these Terms or your use of the App shall be resolved as follows:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li><strong>Informal Resolution:</strong> Before initiating formal proceedings, you agree to first contact us at sachtech.com.apps@gmail.com to attempt to resolve the dispute informally.</li>
                <li><strong>Jurisdiction:</strong> If informal resolution fails, any legal proceedings shall be brought exclusively in the courts of England and Wales, and you consent to the jurisdiction of such courts.</li>
                <li><strong>Class Action Waiver:</strong> You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.</li>
                <li><strong>Limitation Period:</strong> Any claim must be brought within one (1) year after the cause of action arises, or such claim will be permanently barred.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">14. Contact Us</h2>
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