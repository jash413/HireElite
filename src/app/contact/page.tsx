import { Mail, Phone, MapPin, MessageSquare, Clock, Users, Shield, Zap } from 'lucide-react';
import ContactForm from '@/components/sections/contact/ContactForm';
import GradientText from '@/components/ui/GradientText';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - Hire Software Developer in New York | HireElite",
  description: "Ready to hire software developer talent? Contact HireElite to hire software engineers in New York. Get started with our risk-free trial when you hire a software programmer through our platform.",
  keywords: "hire software developer contact, hire software engineers New York, hire a software programmer, contact HireElite, New York developers",
  openGraph: {
    title: "Contact Us - Hire Software Developer in New York | HireElite",
    description: "Ready to hire software developer talent? Contact HireElite to hire software engineers in New York.",
    url: 'https://hireelite.dev/contact',
  },
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      value: '(+91) 832-005-2869',
      action: 'tel:+918320052869'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a detailed message',
      value: 'info@hireelite.dev',
      action: 'mailto:info@hireelite.dev'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: '24/7 instant support',
      value: 'Start Chat',
      action: '#'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: '10-Minute Response',
      description: 'Get a response within 10 minutes during business hours when you hire software developer talent'
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Free consultation with our technical experts to hire software engineers'
    },
    {
      icon: Shield,
      title: 'Risk-Free Trial',
      description: '1-week trial period with money-back guarantee when you hire a software programmer'
    },
    {
      icon: Zap,
      title: 'Quick Start',
      description: 'Developers can start within 48 hours in New York'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact HireElite - Hire Software Developer in New York",
    "description": "Contact HireElite to hire software developer talent in New York",
    "url": "https://hireelite.dev/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "HireElite",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-832-005-2869",
        "contactType": "customer service",
        "email": "info@hireelite.dev",
        "areaServed": "New York",
        "availableLanguage": "English"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Hire Software Developer <GradientText>Elite Talent?</GradientText>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Get started with New York's premier software development talent. 
              Contact us today for a free consultation and 25% off your first month when you hire software engineers.
            </p>

            {/* Special Offer */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white mb-12 shadow-lg">
              <span className="text-lg font-bold">🎉 Limited Time: 25% OFF First Month</span>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div key={method.title} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                  
                  <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {method.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {method.description}
                    </p>
                    
                    <a
                      href={method.action}
                      className="inline-flex items-center px-6 py-3 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors font-medium"
                    >
                      {method.value}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Tell Us About Your Project to Hire Software Developer
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Fill out the form below and we'll get back to you within 10 minutes 
                with a customized solution for your development needs. When you hire a software programmer 
                through HireElite, you get personalized service.
              </p>
              <ContactForm />
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Hire Software Engineers Through HireElite?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                We make hiring elite software developers simple, fast, and risk-free.
                When you need to hire software engineers in New York, we deliver results.
              </p>
              
              <div className="space-y-6">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur opacity-20" />
              
              <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Our Location - Hire Software Developer in New York
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Serving New York and surrounding areas with on-site and remote development teams.
                  When you hire software developer talent with us, location is never a barrier.
                </p>
                <div className="text-gray-900 dark:text-white font-medium">
                  New York, NY<br />
                  United States
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur opacity-20" />
              
              <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      24/7 Emergency Support Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}