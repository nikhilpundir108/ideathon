'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, CheckCircle, Users, Trophy } from 'lucide-react';

const timelineEvents = [
  {
    icon: Calendar,
    title: 'Submission through Unstop',
    date: '18 Oct 2025 - 25 Nov 2025',
    description: 'Submission round through Unstop platform.',
  },
  {
    icon: CheckCircle,
    title: 'Offline Round',
    date: '31 Oct 2025',
    description: 'Final round will be the on-campus round.',
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Event Timeline
          </h2>
          <p className="text-xl text-slate-400">
            Mark your calendars and stay on track
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-600" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-gradient-to-br from-blue-900/30 to-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                        <event.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-lg text-blue-300 font-semibold mb-2">
                      {event.date}
                    </p>
                    <p className="text-slate-400">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex w-2/12 justify-center items-center my-4 md:my-0">
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full shadow-lg shadow-blue-500/50 z-10 ring-4 ring-slate-900" />
                </div>

                <div className="w-full md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
