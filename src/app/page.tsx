"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Floating Cells Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-purple-500/10 blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl top-1/4 -right-48 animate-pulse delay-1000" />
        <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl bottom-1/4 -left-48 animate-pulse delay-2000" />
        <div className="absolute w-64 h-64 rounded-full bg-pink-500/10 blur-3xl bottom-0 right-1/4 animate-pulse delay-500" />
        
        {/* Floating particles - fixed positions to avoid hydration mismatch */}
        {[
          { left: 10, top: 20, delay: 0, duration: 15 },
          { left: 85, top: 15, delay: 2, duration: 18 },
          { left: 20, top: 60, delay: 1, duration: 20 },
          { left: 70, top: 40, delay: 3, duration: 16 },
          { left: 45, top: 80, delay: 0.5, duration: 22 },
          { left: 90, top: 70, delay: 4, duration: 14 },
          { left: 5, top: 45, delay: 2.5, duration: 19 },
          { left: 60, top: 10, delay: 1.5, duration: 17 },
          { left: 30, top: 90, delay: 3.5, duration: 21 },
          { left: 75, top: 55, delay: 0.8, duration: 15 },
          { left: 15, top: 35, delay: 2.2, duration: 18 },
          { left: 50, top: 25, delay: 4.5, duration: 20 },
          { left: 95, top: 85, delay: 1.2, duration: 16 },
          { left: 40, top: 50, delay: 3.8, duration: 23 },
          { left: 25, top: 75, delay: 0.3, duration: 19 },
        ].map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation - transforms on scroll */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-slate-950/95 backdrop-blur-lg border-b border-white/10 py-3" 
          : "bg-transparent py-6"
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <Image 
              src="/NervoidLogoWithoutWords.png" 
              alt="Nervoid" 
              width={40} 
              height={40}
              className={`transition-transform duration-300 group-hover:scale-110 ${isScrolled ? "w-8 h-8" : "w-10 h-10"}`}
            />
            <span className={`font-bold text-white transition-all duration-300 ${isScrolled ? "text-xl" : "text-2xl"}`}>
              Nervoid
            </span>
          </a>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-white/70 hover:text-white transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
            </a>
            <a href="#technology" className="text-white/70 hover:text-white transition-colors relative group">
              Technology
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
            </a>
            <a href="#team" className="text-white/70 hover:text-white transition-colors relative group">
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
            </a>
            <a 
              href="#waitlist" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Join Waitlist
            </a>
            {/* TODO: Uncomment when app is ready
            <a 
              href="https://app.nervoid.ai" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started
            </a>
            */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div 
          className="max-w-5xl mx-auto text-center px-6"
          style={{ transform: `translateY(${scrollY * 0.3}px)`, opacity: Math.max(0, 1 - scrollY / 600) }}
        >
          {/* Animated Logo */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 animate-pulse" />
            <Image 
              src="/NervoidLogo.png" 
              alt="Nervoid" 
              width={300} 
              height={120}
              className="relative mx-auto hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-gradient">
              Decoding Disease,
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Delivering Cures
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            AI-powered cell imaging that uncovers altered signaling pathways directly from microscopy images
          </p>
          
          {/* Waitlist Form */}
          <div id="waitlist" className="max-w-md mx-auto">
            {!isSubmitted ? (
              <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </button>
              </form>
            ) : (
              <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-6 text-center">
                <svg className="w-12 h-12 text-green-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-green-400 font-semibold text-lg">You&apos;re on the list!</p>
                <p className="text-white/60 mt-2">We&apos;ll notify you when Nervoid launches.</p>
              </div>
            )}
            <p className="text-white/50 text-sm mt-4">Be the first to access our AI-powered cell imaging platform</p>
          </div>

          {/* TODO: Uncomment when app is ready
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://app.nervoid.ai" 
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Start Analyzing</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href="#about" 
              className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:bg-white/5"
            >
              Learn More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          */}
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section - with parallax image */}
      <section id="about" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Real-time identification of candidates{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  directly from images
                </span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Nervoid uses AI Vision to uncover altered signaling pathways from just images. 
                Our AI-powered computer vision platform rapidly prioritizes hits based on morphology 
                to find translatable candidates for drug development.
              </p>
              <div className="space-y-4">
                {["Automated mechanism discovery", "Integrated into screening hardware", "SaaS platform for drug development"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center animate-pulse">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-white/60 text-sm">Cell Imaging Analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Our Technology</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Powered by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Advanced AI
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                title: "Image Analysis",
                desc: "Upload cell images and receive instant AI-powered morphological analysis",
                color: "from-cyan-500 to-blue-500"
              },
              { 
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                title: "Pathway Discovery",
                desc: "Automatically identify altered signaling pathways from visual data",
                color: "from-purple-500 to-pink-500"
              },
              { 
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Rapid Results",
                desc: "Get prioritized hit candidates in real-time for faster drug development",
                color: "from-orange-500 to-red-500"
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Meet the Founders</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Pavana Rotti, PhD", role: "Founder & CEO", initials: "PR", linkedin: "https://www.linkedin.com/in/pavana-rotti-phd-60a79827/", gradient: "from-cyan-500 to-blue-600" },
              { name: "Jacob Fishman", role: "Founder & CTO", initials: "JF", linkedin: "https://www.linkedin.com/in/jacobfishman783/", gradient: "from-purple-500 to-pink-600" }
            ].map((person, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500">
                  <div className={`w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br ${person.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    <span className="text-3xl font-bold text-white">{person.initials}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">{person.name}</h3>
                  <p className="text-cyan-400 mb-6">{person.role}</p>
                  <a 
                    href={person.linkedin}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group/link"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="group-hover/link:underline">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzLTItMi00LTJjLTIgMC00IDItNCAyczIgMiA0IDJjMiAwIDQtMiA0LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Transform Drug Discovery?</h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join leading researchers on the waitlist for early access to Nervoid
              </p>
              <a 
                href="#waitlist" 
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-purple-600 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Join the Waitlist
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </a>
              {/* TODO: Uncomment when app is ready
              <a 
                href="https://app.nervoid.ai" 
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-purple-600 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Get Started Free
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image src="/NervoidLogoWithoutWords.png" alt="Nervoid" width={32} height={32} />
            <span className="text-xl font-bold text-white">Nervoid</span>
          </div>
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Nervoid Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#about" className="text-white/60 hover:text-white transition-colors text-sm">About</a>
            <a href="#technology" className="text-white/60 hover:text-white transition-colors text-sm">Technology</a>
            <a href="#team" className="text-white/60 hover:text-white transition-colors text-sm">Team</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
