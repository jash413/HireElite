import type { Metadata } from "next";
import { ThemeProvider } from "../providers/theme-provider";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "HireElite - Top JavaScript & TypeScript Developers",
    template: "%s | HireElite",
  },
  description:
    "Hire top JavaScript and TypeScript developers for your projects. Expert React, Node.js, and full-stack developers with risk-free trial period.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const offerItems = [
    { icon: "🎉", text: "25% OFF First Month", highlight: "Limited Time Offer" },
        { icon: "🎉", text: "25% OFF First Month", highlight: "Limited Time Offer" },
        { icon: "🎉", text: "25% OFF First Month", highlight: "Limited Time Offer" },
        { icon: "🎉", text: "25% OFF First Month", highlight: "Limited Time Offer" },
        { icon: "🎉", text: "25% OFF First Month", highlight: "Limited Time Offer" }
    // { icon: "⚡", text: "48-Hour Developer Onboarding", highlight: "Guaranteed" },
    // { icon: "🔥", text: "Risk-Free 1-Week Trial", highlight: "No Questions Asked" },
    // { icon: "💎", text: "Top 1% JavaScript Talent", highlight: "Pre-Vetted" },
    // { icon: "🚀", text: "Start Your Project Today", highlight: "No Setup Fees" },
    // { icon: "⭐", text: "100% Success Rate", highlight: "Money Back Guarantee" }
  ];

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