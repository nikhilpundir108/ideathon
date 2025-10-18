'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// ✅ Replace these with actual logo image paths in your /public folder
const sponsors = [
  { name: 'Tech Innovations Inc', image: '/ideathon-logo.png' },
  { name: 'Future Labs', image: '/ideathon-logo.png' },
  { name: 'Digital Ventures', image: '/ideathon-logo.png' },
  { name: 'Innovation Hub', image: '/ideathon-logo.png' },
];

export default function Sponsors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Proud Sponsors
          </h2>
          <p className="text-xl text-slate-400">
            Supported by industry leaders and innovators
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Sponsor Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full flex flex-col items-center justify-center gap-4 hover:border-blue-500/30 hover:scale-105 transition-all duration-300 group">
                <div className="relative w-24 h-24 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-3 drop-shadow-lg group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white text-center group-hover:text-blue-300 transition-colors">
                  {sponsor.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
