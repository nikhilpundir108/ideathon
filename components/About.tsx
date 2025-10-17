'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Target, Users } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Ideathon 2K25
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              Ideathon 2K25 is a national-level innovation challenge that brings together the brightest minds
              to solve real-world problems through creative thinking and innovative solutions. This platform
              empowers students and young professionals to transform their ideas into impactful projects.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              We believe in encouraging innovation, creativity, and problem-solving among young minds.
              Whether you're passionate about technology, sustainability, healthcare, or social impact,
              Ideathon 2K25 provides the perfect stage to showcase your vision and compete for exciting prizes.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              Join us in this journey of innovation and be part of a community that's shaping the future.
              Connect with like-minded innovators, receive mentorship from industry experts, and turn your
              ideas into reality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid gap-6"
          >
            <div className="bg-gradient-to-br from-blue-900/30 to-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
              <p className="text-slate-400">
                Transform groundbreaking ideas into actionable solutions that make a difference.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/30 to-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real Impact</h3>
              <p className="text-slate-400">
                Focus on solutions that address genuine challenges and create meaningful change.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Collaborative Spirit</h3>
              <p className="text-slate-400">
                Connect with fellow innovators and build lasting partnerships for the future.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
