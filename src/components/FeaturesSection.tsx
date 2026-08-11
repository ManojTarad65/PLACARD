"use client";

import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-background flex-grow relative z-10">
      <div className="max-w-container-max mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-headline-md text-headline-md text-on-surface uppercase border-l-[3px] border-primary-container pl-5"
          >
            Uncompromising Standards
          </motion.h2>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {/* Feature Card 1 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="bg-[#161616] border border-[rgba(255,255,255,0.08)] rounded-[18px] p-8 hover:border-[rgba(255,255,255,0.15)] transition-all duration-300 flex flex-col group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="mb-8 text-primary-container opacity-80 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-[40px]" data-icon="verified">
                verified
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 tracking-tight">Certified Quality</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              ISO 9001:2015 compliant manufacturing ensuring peak operational integrity.
            </p>
          </motion.div>
          {/* Feature Card 2 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="bg-[#161616] border border-[rgba(255,255,255,0.08)] rounded-[18px] p-8 hover:border-[rgba(255,255,255,0.15)] transition-all duration-300 flex flex-col group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="mb-8 text-primary-container opacity-80 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-[40px]" data-icon="public">
                public
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 tracking-tight">Global Distribution</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Strategic logistics hubs across London, Berlin, and Tokyo for rapid deployment.
            </p>
          </motion.div>
          {/* Feature Card 3 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="bg-[#161616] border border-[rgba(255,255,255,0.08)] rounded-[18px] p-8 hover:border-[rgba(255,255,255,0.15)] transition-all duration-300 flex flex-col group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="mb-8 text-primary-container opacity-80 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-[40px]" data-icon="bolt">
                bolt
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 tracking-tight">Maximum Efficiency</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Engineered to reduce energy loss and optimize thermal management under heavy loads.
            </p>
          </motion.div>
          {/* Feature Card 4 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="bg-[#161616] border border-[rgba(255,255,255,0.08)] rounded-[18px] p-8 hover:border-[rgba(255,255,255,0.15)] transition-all duration-300 flex flex-col group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="mb-8 text-primary-container opacity-80 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-[40px]" data-icon="support_agent">
                support_agent
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 tracking-tight">24/7 Support</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Dedicated technical teams available around the clock for mission-critical troubleshooting.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
