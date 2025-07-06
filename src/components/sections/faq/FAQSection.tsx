"use client";

import { motion } from "framer-motion";
import {
  HelpCircle,
  Phone,
  Mail,
  Clock,
  Users,
  CheckCircle,
  Calendar,
} from "lucide-react";
import { FadeIn } from "@/components/ui/animations";
import GradientText from "@/components/ui/GradientText";
import { faqData } from "./faqData";

export default function FAQSection() {
  // Split FAQ data into two columns for better balance
  const midpoint = Math.ceil(faqData.length / 2);
  const leftColumnFAQs = faqData.slice(0, midpoint);
  const rightColumnFAQs = faqData.slice(midpoint);

  const openCalendly = () => {
    // @ts-ignore - Calendly is loaded from external script
    window.Calendly?.initPopupWidget({
      url: 'https://calendly.com/hireelite-info/30min'
    });
  };

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEwMSwgMTAwLCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40 dark:opacity-20" />

      <div className="container relative mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 mb-8 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50">
              <HelpCircle className="w-5 h-5 mr-3" />
              <span className="text-sm font-semibold tracking-wide">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Got <GradientText>Questions?</GradientText>
              <br />
              <span className="text-4xl md:text-5xl">We Have Answers</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to know about hiring elite developers through
              HireElite.
              <br />
              <span className="text-lg text-gray-500 dark:text-gray-400">
                Can't find what you're looking for? Contact us directly.
              </span>
            </p>
          </FadeIn>
        </div>

        {/* Enhanced FAQ Grid */}
        <div className="max-w-8xl mx-auto mb-24">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {leftColumnFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Enhanced Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-50" />

                  {/* FAQ Card */}
                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-blue-300/50 dark:group-hover:border-blue-600/50">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {faq.question}
                        </h3>

                        <div
                          className="text-gray-600 dark:text-gray-300 leading-relaxed text-base"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {rightColumnFAQs.map((faq, index) => (
                <motion.div
                  key={index + midpoint}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: (index + 0.2) * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Enhanced Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl opacity-50" />

                  {/* FAQ Card */}
                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-purple-300/50 dark:group-hover:border-purple-600/50">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {faq.question}
                        </h3>

                        <div
                          className="text-gray-600 dark:text-gray-300 leading-relaxed text-base"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Contact CTA with Free Consultation */}
        <div className="text-center">
          <FadeIn>
            <div className="relative max-w-6xl mx-auto">
              {/* Enhanced Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl" />

              {/* Content */}
              <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
                <div className="mb-8">
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    Still Have <GradientText>Questions?</GradientText>
                  </h3>

                  <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                    Our team is here to help you find the perfect developers for
                    your project.
                  </p>

                  {/* Free Consultation Highlight */}
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white mb-6 shadow-lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="text-lg font-bold">🎉 FREE 30-Minute Consultation</span>
                  </div>

                  <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    Get personalized advice on hiring the right developers for your project. 
                    No commitment required - just expert guidance to help you succeed.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                  <motion.button
                    onClick={openCalendly}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-2xl transition-all duration-300 text-lg font-semibold"
                  >
                    <span className="flex items-center">
                      <Calendar className="w-6 h-6 mr-3" />
                      Book Free Consultation
                    </span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-10 py-5 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-all duration-300 text-lg font-semibold"
                  >
                    <a href="#contact" className="flex items-center">
                      <Mail className="w-6 h-6 mr-3" />
                      Send Message
                    </a>
                  </motion.button>
                </div>

                {/* Enhanced Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-center group"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-4 group-hover:scale-110 transition-transform">
                      <Clock className="w-8 h-8" />
                    </div>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                      10 min
                    </div>
                    <div className="text-base text-gray-600 dark:text-gray-400 font-medium">
                      Response Time
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center group"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 text-white mb-4 group-hover:scale-110 transition-transform">
                      <Users className="w-8 h-8" />
                    </div>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
                      48 hrs
                    </div>
                    <div className="text-base text-gray-600 dark:text-gray-400 font-medium">
                      Developer Start
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center group"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 text-white mb-4 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-2">
                      100%
                    </div>
                    <div className="text-base text-gray-600 dark:text-gray-400 font-medium">
                      Success Rate
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}