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
              The MIET Ideathon 2025 aims to encourage innovation and entrepreneurship among students by providing them with a platform to identify, analyze, and solve real-world problems using technology-driven, sustainable, and market-ready solutions.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              The event will serve as a launchpad for start-up ideas, guiding participants toward prototype development, incubation, and potential funding opportunities. This Ideathon will bring together students from all departments to collaboratively design solutions that improve everyday life, support sustainable growth, and promote digital transformation across various sectors, including Engineering, health, education, agriculture, the environment, governance, and Management.
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
              <h3 className="text-xl font-semibold text-white mb-2">Vision</h3>
              <p className="text-slate-400">
                To cultivate a culture of innovation and entrepreneurship that empowers students to design smart, sustainable, and inclusive solutions for real-world community challenges, driving MIET toward becoming a hub of impactful ideas and startup incubation.

              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/30 to-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Mission</h3>
              <p className="text-slate-400">
                To inspire and empower students to become innovative thinkers and problem-solvers who can address real-world community challenges through creativity, technology, and collaboration. The event aims to foster interdisciplinary teamwork among students from engineering, management, and sciences to design sustainable, scalable, and socially impactful solutions.
              </p>
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
