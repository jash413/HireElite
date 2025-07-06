"use client";

import { motion } from "framer-motion";
import FooterSection from "./FooterSection";
import SocialLinks from "./SocialLinks";
import Newsletter from "./Newsletter";
import { footerSections } from "./footerData";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-white mb-4">HireElite</h2>
            <p className="text-gray-400 mb-6">
              Your trusted partner to hire software developer talent in New York. 
              When you need to hire software engineers or hire a software programmer, 
              we deliver exceptional teams for exceptional projects.
            </p>
            <SocialLinks />
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <FooterSection
              key={section.title}
              section={section}
              index={index}
            />
          ))}

          {/* Newsletter */}
          <Newsletter />
        </div>

        {/* SEO Rich Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 p-6 bg-gray-800 rounded-lg"
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            Hire Software Developer Talent in New York
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            HireElite is New York's premier platform to hire software developer professionals. 
            Whether you need to hire software engineers for full-time positions or hire a software programmer 
            for project-based work, we connect you with top-tier talent. Our New York-based developers 
            specialize in JavaScript, TypeScript, React, Node.js, and modern web technologies. 
            When you hire software developer talent through HireElite, you get pre-vetted professionals 
            with proven track records and guaranteed results.
          </p>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-8 mt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} HireElite. All rights reserved. 
              Hire Software Developer | Hire Software Engineers | New York
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}