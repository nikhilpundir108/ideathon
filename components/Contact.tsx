'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

export default function Contact() {
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
            Get In Touch
          </h2>
          <p className="text-xl text-slate-400">
            Have questions? We're here to help
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="mailto:ideathon@yourcollege.edu"
              className="block bg-gradient-to-br from-blue-900/30 to-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 h-full hover:border-blue-500/40 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-blue-300 font-mono">cswd@miet.ac.in </p>
              <p className="text-blue-300 font-mono">mlsa.community@miet.ac.in </p>
              <p className="text-blue-300 font-mono">scit@miet.ac.in </p>
              <p className="text-slate-400 text-sm mt-2">
                Send us your queries and we'll respond within 24 hours
              </p>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="tel:+919876543210"
              className="block bg-gradient-to-br from-cyan-900/30 to-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-14 h-14 bg-cyan-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-cyan-300 font-mono">+91 999XX65455</p>
              <p className="text-slate-400 text-sm mt-2">
                Available Monday to Friday, 9 AM - 6 PM IST
              </p>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-green-900/30 to-slate-800/30 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 h-full hover:border-green-500/40 transition-all duration-300 hover:scale-105 group">
              <div className="w-14 h-14 bg-green-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">WhatsApp Community</h3>
              <p className="text-slate-400 mb-4">
                Join our WhatsApp group for instant updates
              </p>
              <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-slate-800 text-xs">soon...</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="bg-gradient-to-br from-purple-900/30 to-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 h-full hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group">
              <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300 mb-2">Meerut Institute Of Engineering & Technology</p>
              <p className="text-slate-400 text-sm">
                N.H. 58, Delhi-Roorkee Highway, Baghpat Road
                Bypass Crossing<br />
                Meerut - 250005, Uttar Pradesh (India)

              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
