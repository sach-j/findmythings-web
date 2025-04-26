import React from "react";

const Support: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-16">Support</h1>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 max-w-3xl">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">
                How do I add a new item?
              </h3>
              <p className="text-gray-700">
                To add a new item, open the app and tap on the "+" button at the
                top right of the screen. Fill in the item details like name,
                category, and add a photo if needed. Finally, tap "Save" to add
                the item to your inventory.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is my data secure?</h3>
              <p className="text-gray-700">
                Yes, your information is stored locally on your device and is
                not shared with anyone.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">
                How do I upgrade to Premium?
              </h3>
              <p className="text-gray-700">
                To upgrade to Premium, tap the crown 👑 icon on the top right of
                the homepage and select either the monthly or yearly plan.
                Follow the instructions to complete the purchase through the App
                Store.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">
                Can I create shared lists with my family/friends?
              </h3>
              <p className="text-gray-700">
                This feature is coming soon! There is a family/friend sharing
                feature in the works :).
              </p>
            </div>
          </div>
        </section>

        {/* User Guide */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">User Guide</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Download FindMyThings from the App Store</li>
                <li>Allow permissions for photos and notifications</li>
                <li>Add your first item by tapping "+"</li>
                <li>Explore the app's features and categories</li>
              </ol>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Managing Items</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Add detailed information for each item</li>
                <li>Categorize items for better organization</li>
                <li>Add photos to help identify items</li>
                <li>Customise categories and locations in the settings</li>
                <li>Set up alerts and reminders if needed</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Troubleshooting</h2>

          <div className="space-y-6 max-w-3xl">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">App Crashing</h3>
              <p className="text-gray-700 mb-4">
                If the app crashes, please try the following steps:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Close all background apps and restart FindMyThings</li>
                <li>Restart your device</li>
                <li>Make sure you have the latest app version</li>
                <li>If problems persist, please contact our support team</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Contact Support</h2>

          <div className="bg-white p-8 rounded-lg shadow-sm max-w-2xl">
            <p className="mb-6 text-gray-700">
              Need help with something not covered here? Our support team is
              ready to assist you. Please email us using the address below and
              we'll get back to you as soon as possible.
            </p>

            {/* <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">Issue Type</label>
                <select 
                  id="issue" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select an issue</option>
                  <option value="account">Account Problem</option>
                  <option value="subscription">Subscription Issue</option>
                  <option value="bug">Bug Report</option>
                  <option value="feature">Feature Request</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                Submit
              </button>
            </form> */}

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="font-medium">Email Support</p>
              <p className="text-gray-600">sachtech.com.apps@gmail.com</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Support;
