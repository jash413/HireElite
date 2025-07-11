import {
  CheckCircle,
  Calendar,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import GradientText from "@/components/ui/GradientText";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You - Hire Software Developer Request Received | HireElite",
  description:
    "Thank you for your request to hire software developer talent. We'll contact you within 10 minutes to help you hire software engineers in New York.",

  alternates: {
    canonical: "/thank-you",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  const nextSteps = [
    {
      icon: Clock,
      title: "Response Within 10 Minutes",
      description:
        "Our team will review your requirements and contact you within 10 minutes during business hours to discuss how to hire software developer talent.",
      time: "10 min",
    },
    {
      icon: Calendar,
      title: "Free Consultation Call",
      description:
        "Schedule a detailed discussion about your project needs and get matched with perfect developers when you hire software engineers.",
      time: "30 min",
    },
    {
      icon: CheckCircle,
      title: "Developer Matching",
      description:
        "We'll present you with 2-3 pre-vetted developers that match your specific requirements to hire a software programmer.",
      time: "24 hours",
    },
    {
      icon: ArrowRight,
      title: "Start Your Project",
      description:
        "Begin working with your chosen developer within 48 hours with our risk-free trial period in New York.",
      time: "48 hours",
    },
  ];

  const urgentContact = [
    {
      icon: Phone,
      title: "Call Now",
      value: "(+91) 832-005-2869",
      action: "tel:+918320052869",
      description: "Speak with us immediately",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@hireelite.dev",
      action: "mailto:info@hireelite.dev",
      description: "Send additional details",
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Success Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full blur opacity-30 animate-pulse" />
            <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <GradientText>Thank You!</GradientText> Hire Software Developer
            Request Received
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Your request has been successfully submitted. We're excited to help
            you hire elite software developers in New York and get your project
            started. When you hire software engineers through HireElite, success
            is guaranteed.
          </p>

          {/* Confirmation Details */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-8">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="font-medium">
              Confirmation: Your 25% discount is reserved!
            </span>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            What Happens <GradientText>Next?</GradientText>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nextSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  {/* Connecting Line */}
                  {index < nextSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 left-[calc(50%+4rem)] right-0 h-0.5">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
                      <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-purple-500" />
                    </div>
                  )}

                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />

                    <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl blur opacity-30" />
                        <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
                          <Icon className="w-8 h-8" />
                        </div>

                        {/* Time Badge */}
                        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {step.time}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                        {step.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Urgent Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl blur opacity-20" />

            <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Need Immediate Assistance to Hire Software Developer?
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Can't wait for our response? Contact us directly for immediate
                support when you need to hire a software programmer.
              </p>

              <div className="space-y-4">
                {urgentContact.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={contact.title}
                      href={contact.action}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {contact.title}: {contact.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {contact.description}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur opacity-20" />

            <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Your Benefits When You Hire Software Engineers
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    25% OFF first month reserved
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Risk-free 1-week trial period
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Priority developer matching
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Free technical consultation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    48-hour project start guarantee
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-green-700 dark:text-green-300 font-medium text-center">
                  🎉 Your spot is secured! We'll have developers ready within 48
                  hours in New York.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur opacity-20" />

            <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                While You Wait...
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Learn more about our process and see what other clients are
                saying about HireElite when they hire software developer talent.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#how-we-work"
                  className="px-6 py-3 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors font-medium"
                >
                  Learn Our Process
                </Link>

                <Link
                  href="/#testimonials"
                  className="px-6 py-3 text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-400 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/50 transition-colors font-medium"
                >
                  Read Success Stories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
