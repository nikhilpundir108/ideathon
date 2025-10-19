'use client';

import { motion } from 'framer-motion';
import { Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            suppressHydrationWarning
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/50"
          >
            <Lightbulb className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          >
            Ideathon 2K25
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl text-blue-200 mb-4 font-light"
          >
            Ignite Innovation | Inspire the Future
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto"
          >
            A National-Level Idea Pitching Challenge organized by Meerut Institute of Engineering and Technology (MIET).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-500/50 hover:shadow-blue-600/60 transition-all duration-300 group"
            >
              <a href="https://unstop.com/p/ideathon-2k25-meerut-institute-of-engineering-and-technology-miet-meerut-1575882" target="_blank" rel="noopener noreferrer">
                Register Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16"
          >
            <p className="text-slate-400 text-sm mb-2">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-slate-400 rounded-full mx-auto flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ height: ['20%', '80%', '20%'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 bg-slate-400 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
