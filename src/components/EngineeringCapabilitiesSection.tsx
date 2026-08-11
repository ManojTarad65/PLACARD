"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    id: "01",
    title: "AUTOMATED ASSEMBLY",
    description: "Robotic assembly lines capable of sub-millimeter precision, reducing variance and ensuring absolute consistency across high-volume production runs.",
    tags: ["Robotics", "Precision", "Automation"]
  },
  {
    id: "02",
    title: "QUALITY TESTING LAB",
    description: "In-house thermal, kinetic, and voltage stress testing environments that simulate conditions far exceeding standard operational parameters.",
    tags: ["Thermal Stress", "Kinetic", "Voltage Testing"]
  },
  {
    id: "03",
    title: "R&D CENTER",
    description: "Dedicated engineering teams focused on material science advancements and IoT integration for next-generation smart architecture.",
    tags: ["IoT Integration", "Material Science", "Smart Tech"]
  }
];

export default function EngineeringCapabilitiesSection() {
  return (
    <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden border-b border-black/5">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-label-caps text-[11px] tracking-[0.2em] text-black uppercase font-bold mb-6 block drop-shadow-sm">Our Capabilities</span>
            <h2 className="font-black text-5xl md:text-7xl uppercase tracking-tighter text-black leading-[0.95]">
              BUILT AROUND <br/>
              <span className="text-black/40">PRECISION.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-body-lg text-black/60 max-w-md font-light leading-relaxed"
          >
            A completely integrated approach from concept to deployment, ensuring absolute maximum operational uptime.
          </motion.p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 border-t border-black/10">
          
          {/* Main Left Feature */}
          <div className="lg:col-span-5 relative group transition-all duration-700 rounded-[20px]">
            <div className="absolute inset-0 bg-gray-50 rounded-[20px] overflow-hidden border border-black/10 group-hover:border-black/30 transition-colors duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              {/* Tech lines */}
              <div className="absolute top-0 right-12 w-px h-full bg-black/10"></div>
              <div className="absolute top-1/2 left-0 w-full h-px bg-black/10"></div>
            </div>
            
            <div className="relative z-10 p-10 flex flex-col h-full min-h-[400px]">
              <span className="font-headline-xl text-6xl font-black text-black/10 mb-auto">{capabilities[0].id}</span>
              
              <div className="mt-8">
                <h3 className="font-black text-3xl uppercase tracking-tighter text-black mb-4 group-hover:text-black/70 transition-colors duration-300">
                  {capabilities[0].title}
                </h3>
                <p className="font-body-md text-black/60 font-light text-lg mb-8 max-w-sm">
                  {capabilities[0].description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {capabilities[0].tags.map((tag, i) => (
                    <span key={i} className="font-label-caps text-[9px] tracking-widest uppercase border border-black/10 text-black/70 px-3 py-1.5 rounded-sm bg-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {capabilities.slice(1).map((cap, idx) => (
              <motion.div 
                key={cap.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col p-8 border border-black/5 bg-gray-50 rounded-[20px] hover:bg-gray-100 hover:shadow-lg transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
                
                <span className="font-headline-sm text-2xl font-black text-black/10 mb-6">{cap.id}</span>
                <h3 className="font-black text-xl uppercase tracking-tighter text-black/90 mb-3 group-hover:text-black transition-colors duration-300">
                  {cap.title}
                </h3>
                <p className="font-body-md text-black/60 font-light text-sm mb-6 flex-grow">
                  {cap.description}
                </p>
                <div className="flex gap-2 flex-wrap mt-auto">
                  {cap.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="font-label-caps text-[9px] tracking-[0.2em] uppercase text-black/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
