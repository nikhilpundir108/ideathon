'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Heart, Building2, Leaf, Smartphone, Globe } from 'lucide-react';

const themes = [
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Leverage artificial intelligence to solve complex problems and automate processes.',
    color: 'from-blue-600 to-blue-400',
    bgColor: 'from-blue-900/30 to-slate-800/30',
    borderColor: 'border-blue-500/20 hover:border-blue-500/40',
  },
  {
    icon: Leaf,
    title: 'Sustainability & Environment',
    description: 'Create eco-friendly solutions for a greener and more sustainable future.',
    color: 'from-green-600 to-emerald-400',
    bgColor: 'from-green-900/30 to-slate-800/30',
    borderColor: 'border-green-500/20 hover:border-green-500/40',
  },
  {
    icon: Heart,
    title: 'Healthcare Innovation',
    description: 'Develop technologies to improve healthcare accessibility and patient outcomes.',
    color: 'from-red-600 to-pink-400',
    bgColor: 'from-red-900/30 to-slate-800/30',
    borderColor: 'border-red-500/20 hover:border-red-500/40',
  },
  {
    icon: Building2,
    title: 'Smart Cities',
    description: 'Design intelligent urban solutions for better infrastructure and city management.',
    color: 'from-cyan-600 to-cyan-400',
    bgColor: 'from-cyan-900/30 to-slate-800/30',
    borderColor: 'border-cyan-500/20 hover:border-cyan-500/40',
  },
  {
    icon: Smartphone,
    title: 'EdTech & Learning',
    description: 'Revolutionize education through innovative digital learning platforms.',
    color: 'from-orange-600 to-yellow-400',
    bgColor: 'from-orange-900/30 to-slate-800/30',
    borderColor: 'border-orange-500/20 hover:border-orange-500/40',
  },
  {
    icon: Globe,
    title: 'Social Impact',
    description: 'Address social challenges and create positive change in communities.',
    color: 'from-purple-600 to-pink-400',
    bgColor: 'from-purple-900/30 to-slate-800/30',
    borderColor: 'border-purple-500/20 hover:border-purple-500/40',
  },
];

export default function Themes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="container mx-auto max-w-7xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Challenge Themes
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Choose your domain and create innovative solutions that matter
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`bg-gradient-to-br ${theme.bgColor} backdrop-blur-sm border ${theme.borderColor} rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${theme.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <theme.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-3">
                  {theme.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {theme.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
