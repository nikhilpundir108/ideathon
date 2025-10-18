'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const ref = useRef(null);
  // Trigger animation a bit earlier
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

  return (
    // Reduced vertical padding on mobile (py-16) and kept it for medium+ (md:py-24)
    <section className="py-16 md:py-24 px-4 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16" // Slightly less margin on mobile
        >
          {/* Main heading size is already responsive, which is great */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          {/* Made sub-heading text slightly smaller on mobile */}
          <p className="text-lg md:text-xl text-slate-400">
            Have questions? We're here to help
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Explicitly set grid-cols-1 for mobile and md:grid-cols-2 for desktop.
          Reduced gap slightly on mobile (gap-6) and kept it for medium+ (md:gap-8).
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Card 1: Email */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="mailto:ideathon@yourcollege.edu"
              // Reduced padding on mobile (p-6) and kept it for medium+ (md:p-8)
              className="block bg-gradient-to-br from-blue-900/30 to-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 md:p-8 h-full hover:border-blue-500/40 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-7 h-7 text-blue-400" />
              </div>
              {/* Made card titles slightly smaller on mobile */}
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-blue-300 font-mono break-words">cswd@miet.ac.in </p>
              <p className="text-blue-300 font-mono break-words">mlsa.community@miet.ac.in </p>
              <p className="text-blue-300 font-mono break-words">scit@miet.ac.in </p>
              <p className="text-slate-400 text-sm mt-2">
                Send us your queries and we'll respond within 24 hours
              </p>
            </a>
          </motion.div>

          {/* Card 2: Phone */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="tel:+919876543210"
              // Reduced padding on mobile (p-6)
              className="block bg-gradient-to-br from-cyan-900/30 to-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 md:p-8 h-full hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-14 h-14 bg-cyan-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-cyan-300 font-mono">+91 7088660889</p>
            </a>
          </motion.div>

          {/* Card 3: WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Card container */}
            <div className="bg-gradient-to-br from-green-900/30 to-slate-800/30 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 md:p-8 h-full hover:border-green-500/40 transition-all duration-300 hover:scale-105 group">
              <div className="w-14 h-14 bg-green-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                WhatsApp Community
              </h3>
              <p className="text-slate-400 mb-4">
                Join our WhatsApp group for instant updates
              </p>
              <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center">
                <Link
                  href="https://chat.whatsapp.com/BqstgLz5GgZExcpQciuq9Q?mode=wwc"
                  target="_blank" 
                  className="px-6 py-2 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </motion.div>


          {/* Card 4: Address */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {/* Reduced padding on mobile (p-6) */}
            <div className="bg-gradient-to-br from-purple-900/30 to-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 md:p-8 h-full hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group">
              <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Visit Us</h3>
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