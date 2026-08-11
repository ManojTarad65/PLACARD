"use client";

import { motion } from "framer-motion";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface uppercase font-black tracking-tighter mb-6"
          >
            Get In <span className="text-primary-container">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl"
          >
            Connect with our engineering specialists and sales team for inquiries, support, or partnership opportunities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#161616] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 md:p-12 shadow-xl"
          >
            <h2 className="font-headline-md text-headline-md text-on-surface mb-8 tracking-tight">Send a Message</h2>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="font-label-caps text-label-caps uppercase text-text-muted">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="bg-[#0D0D0D] border border-[rgba(255,255,255,0.1)] rounded-[12px] px-4 py-3 text-on-surface font-body-md focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="font-label-caps text-label-caps uppercase text-text-muted">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="bg-[#0D0D0D] border border-[rgba(255,255,255,0.1)] rounded-[12px] px-4 py-3 text-on-surface font-body-md focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-label-caps text-label-caps uppercase text-text-muted">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="bg-[#0D0D0D] border border-[rgba(255,255,255,0.1)] rounded-[12px] px-4 py-3 text-on-surface font-body-md focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                  placeholder="john@company.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-label-caps text-label-caps uppercase text-text-muted">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="bg-[#0D0D0D] border border-[rgba(255,255,255,0.1)] rounded-[12px] px-4 py-3 text-on-surface font-body-md focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-label-caps text-label-caps uppercase text-text-muted">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="bg-[#0D0D0D] border border-[rgba(255,255,255,0.1)] rounded-[12px] px-4 py-3 text-on-surface font-body-md focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="mt-4 bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase px-8 py-4 rounded-[12px] hover:bg-inverse-primary transition-all duration-300 shadow-[0_4px_14px_rgba(215,25,32,0.2)] hover:shadow-[0_6px_20px_rgba(215,25,32,0.4)] w-full sm:w-auto self-start"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Details & Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-10 lg:pl-8"
          >
            <div>
              <h2 className="font-headline-xl text-[48px] text-on-surface font-black tracking-tighter mb-4">Say Hello!</h2>
              <p className="font-body-lg text-[18px] text-on-surface-variant max-w-md leading-relaxed">
                Share your product, supply, or project requirement with Placard Electric Pvt Ltd.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {/* Enquiries */}
              <div className="border-b border-[rgba(255,255,255,0.08)] pb-8">
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight mb-4">Enquiries</h3>
                <div className="flex flex-col gap-1">
                  <span className="font-body-md text-primary-container mb-1">Email Id</span>
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                    <a href="mailto:placardelectric1341@gmail.com" className="font-body-md hover:text-primary-container transition-colors">placardelectric1341@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant mt-3">
                    <span className="material-symbols-outlined text-[18px]">call</span>
                    <a href="tel:+919462621341" className="font-body-md hover:text-primary-container transition-colors">+91 9462621341</a>
                  </div>
                </div>
              </div>

              {/* Head Office */}
              <div className="border-b border-[rgba(255,255,255,0.08)] pb-8">
                <h3 className="font-body-lg text-primary-container mb-3 block">Head Office</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-sm">
                  Property No – VL01/3846, Julluddin Compound, Nr Nagarsevak Bunglow, Dhumal Nagar, Vasai Phata, Vasai (E), Dist Palghar – 401208
                </p>
              </div>

              {/* Placard Electric Pvt Ltd */}
              <div className="pb-4">
                <h3 className="font-body-lg text-primary-container mb-3 block">Placard Electric Pvt Ltd</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Placard Electric Pvt Ltd<br />
                  2 KH-12 Sager Vihar Vaishali Nager<br />
                  Ajmer Rajasthan
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
