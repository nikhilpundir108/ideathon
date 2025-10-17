'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, Medal } from 'lucide-react';

const prizes = [
  {
    icon: Trophy,
    position: '1st Prize',
    amount: '₹10,000',
    color: 'from-yellow-500 to-yellow-600',
    bgColor: 'from-yellow-900/30 to-slate-800/30',
    borderColor: 'border-yellow-500/30',
    glowColor: 'shadow-yellow-500/50',
    rank: '🥇',
  },
  {
    icon: Award,
    position: '2nd Prize',
    amount: '₹5,000',
    color: 'from-slate-400 to-slate-500',
    bgColor: 'from-slate-700/30 to-slate-800/30',
    borderColor: 'border-slate-500/30',
    glowColor: 'shadow-slate-500/50',
    rank: '🥈',
  },
  {
    icon: Medal,
    position: '3rd Prize',
    amount: '₹3,000',
    color: 'from-orange-600 to-orange-700',
    bgColor: 'from-orange-900/30 to-slate-800/30',
    borderColor: 'border-orange-500/30',
    glowColor: 'shadow-orange-500/50',
    rank: '🥉',
  },
];

export default function Prizes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Exciting Prizes
          </h2>
          <p className="text-xl text-slate-400">
            Compete for amazing rewards and recognition
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.position}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={index === 0 ? 'md:scale-110 md:mt-0' : index === 1 ? 'md:mt-8' : 'md:mt-8'}
            >
              <div
                className={`relative bg-gradient-to-br ${prize.bgColor} backdrop-blur-sm border-2 ${prize.borderColor} rounded-3xl p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl ${prize.glowColor} group`}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${prize.color} rounded-full flex items-center justify-center shadow-lg ${prize.glowColor} group-hover:scale-110 transition-transform duration-300 ring-4 ring-slate-900`}>
                    <prize.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="text-center mt-8">
                  <div className="text-5xl mb-4">{prize.rank}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {prize.position}
                  </h3>
                  <div className="relative inline-block mb-4">
                    <div className={`text-5xl font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                      {prize.amount}
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Cash Prize + Certificate
                  </p>
                </div>

                {index === 0 && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                    Winner
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-br from-blue-900/20 to-slate-800/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-slate-300 text-lg">
              All participants will receive <span className="text-blue-400 font-semibold">certificates of participation</span> and
              <span className="text-cyan-400 font-semibold"> exclusive goodies</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
