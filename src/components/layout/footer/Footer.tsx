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
              Your trusted partner for on-demand JavaScript and TypeScript
              developers. Building exceptional teams for exceptional projects.
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

        {/* Payment Partner Section */}
        <motion.a
          href="https://www.refrens.com/gst-billing-software"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-start mt-8"
        >
          <img
            src="/refrens.png"
            alt="Billing Powered by Refrens"
            className="h-12"
          />
        </motion.a>

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
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
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
