import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Track your belongings with just a tap
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Introducing FindMyThings, the app that simplifies item tracking
                and inventory management. Add items, categorize them, and never
                lose track of what matters to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#download">
                  <img
                    src="/images/appstoredownload-white.png"
                    alt="Download on the App Store"
                    className="h-20"
                  />
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center gap-8">
              <img
                src="/images/1267@3x.png"
                alt="App screenshot 1"
                className="rounded-xl shadow-xl transform rotate-3 w-2/5"
              />
              <img
                src="/images/1265@3x.png"
                alt="App screenshot 2"
                className="rounded-xl shadow-xl transform -rotate-3 w-2/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How does it work Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">
            How does FindMyThings work?
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex justify-center items-center gap-8">
              <img
                src="/images/1268@3x.png"
                alt="Feature screenshot 1"
                className="rounded-xl shadow-lg transform rotate-355 w-2/5"
              />
              <img
                src="/images/1269@3x.png"
                alt="Feature screenshot 2"
                className="rounded-xl shadow-lg transform -rotate-355 w-2/5"
              />
            </div>
            <div className="flex-1">
              <p className="text-lg text-gray-700">
                When you add an item to FindMyThings, our app helps you
                categorize and organize it properly. You can add photos,
                descriptions, location information, tags, and even set reminders
                for items you've loaned out.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                Our intelligent search and filtering system makes it easy to
                find exactly what you're looking for, while also allowing you to
                categorise your items are by creating custom lists. With Premium
                features, you get unlimited items, custom item notifications and
                advanced borrowed item reminders.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20 bg-primary/5 text-center">
        <div className="container">
          <h2 className="text-4xl font-bold mb-6">Try FindMyThings today</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Never lose track of what matters to you
          </p>
          <a
            href="#download"
            className="inline-block bg-primary text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
