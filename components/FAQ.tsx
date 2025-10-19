'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    category: "Registration and Submission",
    items: [
      {
        q: "What is the process for registration and idea submission?",
        a: (
          <>
            <p>To participate, please follow these simple steps:</p>
            <ol className="list-decimal ml-6 mt-2 space-y-1 text-slate-400">
              <li>
                Click on the official Ideathon website:{" "}
                <a
                  href="https://ideathon-2k25.vercel.app/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  https://ideathon-2k25.vercel.app/#
                </a>
              </li>
              <li>Click on “Register” to go to the Unstop registration page.</li>
              <li>Complete your registration by filling in your details.</li>
              <li>Choose to “Join a Team” or “Create a Team.”</li>
              <li>Navigate to “Update Details” → “Idea Submission” and upload your idea.</li>
            </ol>
          </>
        ),
      },
      {
        q: "What is the required format for the final presentation?",
        a: (
          <>
            <p>
              All teams must submit their final presentation (PPT) in the specified format shared in the official email.
            </p>
            <ul className="list-disc ml-6 mt-2 text-slate-400 space-y-1">
              <li>Teams that have already submitted correctly don’t need to resubmit.</li>
              <li>New teams must adhere to the shared format.</li>
            </ul>
          </>
        ),
      },
      {
        q: "What are the domains for idea submission?",
        a: (
          <ul className="list-disc ml-6 mt-2 text-slate-400 space-y-1">
            <li>Smart Cities & Public Services</li>
            <li>Health & Well-being</li>
            <li>Environment & Sustainability</li>
            <li>Education & Digital Inclusion</li>
            <li>Agriculture & Rural Development</li>
            <li>Satellite & Space Systems</li>
            <li>Transportation & Safety</li>
            <li>Society & Lifestyle</li>
            <li>Energy & Utilities</li>
            <li>Entrepreneurship & Local Economy</li>
            <li>Governance & Social Impact</li>
            <li>Banking & Security</li>
          </ul>
        ),
      },
      {
        q: "What are the important deadlines and dates?",
        a: (
          <ul className="list-disc ml-6 mt-2 text-slate-400 space-y-1">
            <li><strong>Registration Deadline:</strong> 25th October 2025, midnight</li>
            <li><strong>Finalist Announcement:</strong> Via email and official WhatsApp group</li>
            <li><strong>Final Round:</strong> 31st October 2025, Meerut Institute of Technology</li>
          </ul>
        ),
      },
    ],
  },
  {
    category: "Team Formation and Rules",
    items: [
      { q: "Is individual participation allowed?", a: "No. Participation is strictly team-based (2–3 members per team)." },
      { q: "Can our team submit more than one idea?", a: "No. Each team can submit only one idea. Multiple submissions will lead to disqualification." },
      { q: "Can I be a member of more than one team?", a: "No. A participant can only be part of one team. Being in multiple teams results in disqualification of all involved." },
    ],
  },
  {
    category: "Prizes and Benefits",
    items: [
      {
        q: "What are the prizes and benefits for participants?",
        a: (
          <>
            <p className="mb-2">Top-performing teams receive:</p>
            <ul className="list-disc ml-6 text-slate-400 space-y-1">
              <li>1st Place: ₹5,000</li>
              <li>2nd Place: ₹4,000</li>
              <li>3rd Place: ₹3,000</li>
              <li>4th Place: ₹2,000</li>
              <li>5th Place: ₹1,000</li>
            </ul>
            <p className="mt-2">Top 30 teams (including top 5) will get direct entry to the upcoming Hackathon.</p>
          </>
        ),
      },
    ],
  },
  {
    category: "Judging Criteria",
    items: [
      {
        q: "What are the key criteria for judging the submissions?",
        a: (
          <ul className="list-disc ml-6 text-slate-400 space-y-1">
            <li>Innovation & Originality – How unique is the solution?</li>
            <li>Practicality & Feasibility – Can it be realistically implemented?</li>
            <li>Impact – What’s the potential for positive, scalable change?</li>
          </ul>
        ),
      },
    ],
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(6,182,212,0.05),transparent_50%)]" />
      <div className="container mx-auto max-w-5xl relative z-10" ref={ref}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex justify-center items-center gap-3">
            <HelpCircle className="w-8 h-8 text-cyan-400" />
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-400">Everything you need to know about Ideathon 2K25</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 border-l-4 border-cyan-500 pl-4">
                {section.category} FAQ
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                {section.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${section.category}-${i}`}
                    className="border border-cyan-500/20 rounded-xl bg-gradient-to-br from-cyan-900/30 to-slate-800/30 backdrop-blur-sm"
                  >
                    <AccordionTrigger className="px-6 text-white hover:text-cyan-400 hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-slate-400 text-sm">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
