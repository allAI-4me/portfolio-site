import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <motion.div
        className="max-w-2xl mx-auto text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold mb-4 text-primary">
          Data with purpose
        </h1>
        <p className="text-xl mb-8">
          I’m Dr. Rumana Pathan—Educational Data Analytics researcher exploring AR/VR, metacognition & learner visibility.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
        >
          Work With Me
        </a>
      </motion.div>
    </section>
  );
}
