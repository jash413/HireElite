import type { Metadata } from "next";
import { ThemeProvider } from "../providers/theme-provider";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Hire Software Developer - Top JavaScript & TypeScript Talent in New York | HireElite",
    template: "%s | HireElite - Hire Software Developer in New York",
  },
  description:
    "Hire software developer talent in New York. Expert JavaScript, TypeScript, React, and Node.js developers. When you hire software engineers through HireElite, get risk-free trial period and guaranteed results. Best place to hire a software programmer.",
  keywords: [
    "hire software developer",
    "hire software engineers", 
    "hire a software programmer",
    "New York developers",
    "JavaScript developers",
    "TypeScript developers",
    "React developers",
    "Node.js developers",
    "software development New York",
    "remote developers",
    "full-stack developers"
  ],
  authors: [{ name: "HireElite" }],
  creator: "HireElite",
  publisher: "HireElite",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hireelite.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Hire Software Developer - Top JavaScript & TypeScript Talent in New York",
    description: "Hire software developer talent in New York. Expert JavaScript, TypeScript, React, and Node.js developers with risk-free trial period.",
    url: 'https://hireelite.dev',
    siteName: 'HireElite',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HireElite - Hire Software Developer in New York',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hire Software Developer - Top JavaScript & TypeScript Talent in New York",
    description: "Hire software developer talent in New York. Expert JavaScript, TypeScript, React, and Node.js developers with risk-free trial period.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const offerItems = [
    { icon: "🎉", text: "25% OFF First Month", highlight: "Limited Time Offer" },
    { icon: "⚡", text: "48-Hour Developer Onboarding", highlight: "Guaranteed" },
    { icon: "🔥", text: "Risk-Free 1-Week Trial", highlight: "No Questions Asked" },
    { icon: "💎", text: "Top 1% Talent", highlight: "Pre-Vetted" },
    { icon: "🚀", text: "Start Your Project Today", highlight: "No Setup Fees" },
    { icon: "⭐", text: "100% Success Rate", highlight: "Money Back Guarantee" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HireElite",
    "url": "https://hireelite.dev",
    "logo": "https://hireelite.dev/logo.png",
    "description": "Hire software developer talent in New York. Expert JavaScript, TypeScript, React, and Node.js developers.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-832-005-2869",
      "contactType": "customer service",
      "email": "info@hireelite.dev",
      "areaServed": "Worldwide",
      "availableLanguage": ["English"],
    },
    "sameAs": [
      "https://twitter.com/HireElite",
      "https://linkedin.com/company/HireElite",
      "https://github.com/HireElite",
    ],
    "service": {
      "@type": "Service",
      "name": "Software Developer Hiring",
      "description": "Professional software developer recruitment and hiring services",
      "provider": {
        "@type": "Organization",
        "name": "HireElite"
      },
      "areaServed": {
        "@type": "Place",
        "name": "New York"
      }
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10797578968"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10797578968');
          `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
        <script 
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="aaa2dv"
        />
      </head>
      <body
        className="antialiased min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* Elegant Moving Offer Banner with Theme Colors */}
          <div className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
            {/* Gradient Background with Theme Colors */}
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 animate-gradient-x">
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>
              
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
              
              {/* Content */}
              <div className="relative py-3 px-4">
                <div className="flex animate-scroll-elegant whitespace-nowrap">
                  {/* Duplicate items for seamless loop */}
                  {[...offerItems, ...offerItems].map((item, index) => (
                    <div key={index} className="inline-flex items-center mx-8 group">
                      <span className="text-2xl mr-3 animate-bounce-subtle" style={{ animationDelay: `${index * 0.2}s` }}>
                        {item.icon}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-white font-bold text-sm tracking-wide">
                          {item.text}
                        </span>
                        <span className="text-blue-100 text-xs font-medium opacity-90">
                          {item.highlight}
                        </span>
                      </div>
                      {/* Separator */}
                      <div className="ml-8 w-px h-8 bg-white/20"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom border with shimmer effect using theme colors */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-200/60 to-transparent animate-shimmer"></div>
            </div>
          </div>
          
          {/* Navbar with top margin to account for banner */}
          <div className="mt-16">
            <Navbar />
          </div>
          
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingCallButton />
        </ThemeProvider>
      </body>
    </html>
  );
}