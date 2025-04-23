import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-6">About FindMyThings</h1>
          <p className="text-xl text-gray-600 mb-8">
            We built FindMyThings with a simple mission: to help you keep track of the things that matter most.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              FindMyThings was born out of frustration. Like many people, our founder was tired of constantly losing important items like keys, wallets, and phones.
            </p>
            <p className="text-gray-600">
              After yet another morning spent searching for car keys, we decided there had to be a better way. Using cutting-edge technology, we developed a system that makes finding your belongings simple and stress-free.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-100 rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We believe that technology should simplify your life, not complicate it. Our mission is to give you peace of mind by ensuring you never lose your important items again.
            </p>
            <p className="text-gray-600">
              We're committed to creating products that are:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-2">
              <li>Simple and intuitive to use</li>
              <li>Respectful of your privacy</li>
              <li>Reliable when you need them most</li>
              <li>Constantly improving through innovation</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 