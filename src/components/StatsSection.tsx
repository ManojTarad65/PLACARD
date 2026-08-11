"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "5M+", label: "Units Deployed" },
  { value: "40+", label: "Countries Served" },
  { value: "99.9%", label: "System Reliability" },
  { value: "25+", label: "Years Experience" },
];

export default function StatsSection() {
  return (
    <section className="relative py-28 bg-gray-50 border-y border-black/5 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container/10 via-gray-50/50 to-transparent blur-3xl transform -rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-headline-md text-headline-md text-black uppercase mb-5 tracking-tight">
            Trusted Worldwide
          </h2>
          <p className="font-body-lg text-body-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality has made PLACARD the standard for residential and industrial electrical solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-black/5">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`flex flex-col items-center justify-center text-center p-6 ${index > 1 ? 'pt-8 md:pt-6' : ''}`}
            >
              <div className="font-headline-xl text-headline-xl md:text-[72px] font-black text-black tracking-tighter mb-2">
                {stat.value}
              </div>
              <div className="font-label-caps text-label-caps uppercase text-primary-container tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
