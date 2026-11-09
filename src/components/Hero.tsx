import React, { useEffect, useRef } from 'react';
import { ArrowRight, Rocket, Sparkles, Terminal, ChevronDown } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from(badgeRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
      })
        .from(
          headlineRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 1.1,
          },
          '-=0.5'
        )
        .from(
          subtitleRef.current,
          {
            y: 25,
            opacity: 0,
            duration: 0.9,
          },
          '-=0.7'
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.6'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Background radial spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Top Tagline Badge */}
        <div ref={badgeRef} className="inline-block mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/25 backdrop-blur-md shadow-inner shadow-emerald-500/10">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-300 font-semibold">
              University of Sahiwal • Student Innovation Hub
            </span>
          </div>
        </div>

        {/* Display Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.08] mb-6"
        >
          Think. Build.{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Launch.
          </span>
        </h1>

        {/* Descriptor line */}
        <div className="mb-4">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-emerald-400 font-medium">
            Entrepreneurship • Innovation • Technology
          </span>
        </div>

        {/* Subtitle / Value proposition */}
        <p
          ref={subtitleRef}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-normal mb-9"
        >
          A cross-disciplinary, student-led collective empowering every department
          at the <span className="text-white font-medium">University of Sahiwal</span> to
          build modern software, master founder skills, and create real ventures.
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#get-involved"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-gray-950 bg-emerald-400 hover:bg-emerald-300 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get Involved</span>
            <Rocket className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/uos-entrepreneurship"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-gray-200 glass-panel hover:bg-white/10 hover:text-white transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>Explore Organization Hub</span>
            <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
          </a>
        </div>

        {/* Micro Credibility Bar */}
        <div className="mt-14 pt-8 border-t border-white/5 w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col">
            <span className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
              5 Pillars
            </span>
            <span className="text-[11px] text-gray-400 uppercase tracking-wider font-mono">
              Core Focus Areas
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight">
              100%
            </span>
            <span className="text-[11px] text-gray-400 uppercase tracking-wider font-mono">
              Student-Led
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
              All Depts
            </span>
            <span className="text-[11px] text-gray-400 uppercase tracking-wider font-mono">
              CS • BBA • Arts • Sci
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-xl sm:text-2xl font-bold text-cyan-400 tracking-tight">
              Open Source
            </span>
            <span className="text-[11px] text-gray-400 uppercase tracking-wider font-mono">
              GitHub Backed
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <a
        href="#marquee"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-emerald-400 transition-colors pointer-events-auto"
        aria-label="Scroll to content"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
