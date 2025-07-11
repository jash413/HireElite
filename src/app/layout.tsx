import type { Metadata } from "next";
import { ThemeProvider } from "../providers/theme-provider";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "In 10 Minutes - Hire Elite Software Developers in New York.",
    template: "%s | HireElite - Hire Elite Software Developers in New York",
  },
  description:
    "Skip the wait. Instantly hire software developers and top software engineers in New York. Try risk-free with our 1-week trial & get 25% OFF your first month.",
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
    "full-stack developers",
  ],
  authors: [{ name: "HireElite" }],
  creator: "HireElite",
  publisher: "HireElite",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hireelite.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "In 10 Minutes - Hire Elite Software Developers in New York.",
    description:
      "Skip the wait. Instantly hire software developers and top software engineers in New York. Try risk-free with our 1-week trial & get 25% OFF your first month.",
    url: "https://hireelite.dev",
    siteName: "HireElite",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HireElite - Hire Software Developer in New York",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "In 10 Minutes - Hire Elite Software Developers in New York.",
    description:
      "Skip the wait. Instantly hire software developers and top software engineers in New York. Try risk-free with our 1-week trial & get 25% OFF your first month.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const offerItems = [
    {
      icon: "🎉",
      text: "25% OFF First Month",
      highlight: "Limited Time Offer",
    },
    {
      icon: "⚡",
      text: "48-Hour Developer Onboarding",
      highlight: "Guaranteed",
    },
    {
      icon: "🔥",
      text: "Risk-Free 1-Week Trial",
      highlight: "No Questions Asked",
    },
    { icon: "💎", text: "Top 1% Talent", highlight: "Pre-Vetted" },
    {
      icon: "🚀",
      text: "Start Your Project Today",
      highlight: "No Setup Fees",
    },
    {
      icon: "⭐",
      text: "100% Success Rate",
      highlight: "Money Back Guarantee",
    },
  ];

  // Corporate Schema
  const corporateSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "HireElite",
    "alternateName": "Hire Elite Software Developers",
    "url": "https://hireelite.dev/",
    "logo": "",
    "sameAs": [
      "https://www.linkedin.com/company/hireelite",
      "https://www.instagram.com/hireelite/",
      "https://www.youtube.com/@Hire-Elite",
      "https://x.com/Hire_Elite",
      "https://www.facebook.com/hireelite"
    ]
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "HireElite",
    "url": "https://hireelite.dev/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://hireelite.dev/search?q=hiredeveloper{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How fast can I hire software developer talent in New York with HireElite?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our global IT recruitment community in New York has millions of connections with software developers, so you can expect to get a list of the best software candidates available in your city, country, or worldwide within 72 hours after posting your vacancy on HireElite. When you need to hire software engineers quickly, we deliver results."
      }
    },{
      "@type": "Question",
      "name": "How can HireElite help me with the hiring process when I hire software engineers in New York?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our team will walk you through your Employer account, help with job postings, notify you about new candidates, and provide you with additional information about them if need be. Upon request, the HireElite team can also prepare reports about the most suitable candidates with the necessary software engineers in New York."
      }
    },{
      "@type": "Question",
      "name": "Do you provide freelance software developers when I hire a software programmer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At HireElite, we focus on building long-lasting relationships between our clients and tech specialists. You are free to hire software developer talent for dedicated roles. However, our recruiters can provide you with both on-site and remote freelance specialists to extend your software development team in New York."
      }
    },{
      "@type": "Question",
      "name": "What are some tips for hiring developers from New York fast and easy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One of the core conditions for successful tech recruitment in New York is a clear understanding of who exactly you need to hire. There about a perfect candidate profile and create a detailed job description based on this information. Additionally, you should determine your budget and the best salaries to attract top talent. When using HireElite, don't forget about the recruiter fee. There are 14 talent agencies providing services in your vicinity in the first place."
      }
    },{
      "@type": "Question",
      "name": "What soft skills should I look for when I hire software engineers in New York long-term?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Communication skills, collaboration, teamwork, problem-solving skills, adaptability, and resilience are just a few requirements among the most important soft skills a good developer should possess. You also need to be sure that the candidate can align with your company culture and that they have the same values. In addition, you should also ensure that the developer is a good team player when you hire a software programmer."
      }
    },{
      "@type": "Question",
      "name": "How much does it cost to hire software engineers in New York on HireElite?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend you set a price that balances the premium of 25% of a developer's annual salary, or at least $3,000 (whichever is bigger). From our experience, this is the fee that will be the most attractive to candidates. If you need to fill a contractor role, consider efficient for hiring junior and senior specialists. A realistic account recruitment prices decrease the chances of getting the best talent. You can always check the current market requirements into the HireElite calculator to instantly see the precise cost of hiring with us."
      }
    },{
      "@type": "Question",
      "name": "What do I need to start hiring developers in New York with HireElite?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To start using HireElite as an employer, you should have a quick intro call with us and register your account. Once your account is created, feel free to post as many software development jobs as you need for free. Set a price that fits the HireElite budget and wait for the first talented candidates to appear in your account when you hire software developer talent."
      }
    },{
      "@type": "Question",
      "name": "How does HireElite pre-screen software developers from New York?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "During the recruiting process, we have implemented a multi-step experienced recruiters upload CVs of the applicants that meet your listed criteria profile. The core of these algorithm checks every CV to predict user requirements. Finally, all applicants CVs are verified by HireElite's internal team of tech recruiters. Such a mix of technology and human touch ensures that you're presented with the best developers in New York for hire."
      }
    },{
      "@type": "Question",
      "name": "What is the difference between hiring developers in New York through HireElite and outsourcing/outstaffing agencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Outsourcing/outstaffing agencies aim to provide you with specialists who will temporarily support your IT house. Software team with experience to back. On the other hand, HireElite is a talent acquisition platform. The main difference between HireElite and outsourcing/outstaffing agencies is the pricing model. Agencies usually charge hourly rates for every developer who works on your project during the whole time of cooperation. Thus, you pay for additional services like project management as well as software business legal compliance. HireElite works based on a success fee one-time recruitment pricing model that allows you to decide on the recruitment fee on your own and pay only one hire is made."
      }
    },{
      "@type": "Question",
      "name": "How is HireElite different from job boards when I hire a software programmer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Job boards connect companies with candidates directly, while HireElite is a mediator between companies and tech recruiters. Thus, when you're looking for software developers for hire on HireElite, you're presented with candidates recommended by our professional recruiters rather than those who submit their resumes. This approach saves you time and effort while ensuring a higher quality of candidates, better cultural fit, more efficient job posting, and quick pipeline generation."
      }
    }]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10797578968"
        ></script> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10797578968');
          `,
          }}
        /> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T5TJ42Q4')
          `,
          }}
        />

        {/* Corporate Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(corporateSchema),
          }}
        />
        
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
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
        {/* Google Tag Manager */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T5TJ42Q4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
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
                    <div
                      key={index}
                      className="inline-flex items-center mx-8 group"
                    >
                      <span
                        className="text-2xl mr-3 animate-bounce-subtle"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
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
