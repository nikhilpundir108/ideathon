'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Settings, MessageSquare, Globe2, Users, FileText } from 'lucide-react';

const criteria = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Originality and creativity of the idea',
  },
  {
    icon: Settings,
    title: 'Feasibility',
    description: 'Practicality and implementation potential',
  },
  {
    icon: MessageSquare,
    title: 'Presentation',
    description: 'Clarity and effectiveness of pitch',
  },
  {
    icon: Globe2,
    title: 'Impact',
    description: 'Potential to create meaningful change',
  },
];

export default function Judging() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.05),transparent_50%)]" />

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Judging Criteria
          </h2>
          <p className="text-xl text-slate-400">
            Your ideas will be evaluated on these key parameters
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {criteria.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-cyan-900/30 to-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 h-full hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-blue-900/30 to-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6 text-blue-400" />
            Rules & Eligibility
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Team Size</h4>
                  <p className="text-slate-400">Teams of 2-3 members are allowed. </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Eligibility</h4>
                  <p className="text-slate-400">Open to all undergraduate and postgraduate students only MIET group of College.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Original Work</h4>
                  <p className="text-slate-400">All submissions must be original ideas developed by the team.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Submission Format</h4>
                  <p className="text-slate-400">Submit a detailed project proposal with problem statement, solution, and implementation plan.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Presentation</h4>
                  <p className="text-slate-400">Shortlisted teams will present their ideas in a 10-minute pitch followed by Q&A.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Code of Conduct</h4>
                  <p className="text-slate-400">Maintain professionalism and respect throughout the competition.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
