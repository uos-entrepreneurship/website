import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Mandate', href: '#about' },
    { label: 'Five Pillars', href: '#pillars' },
    { label: 'Cohorts & Workshops', href: '#programs' },
    { label: 'Calendar', href: '#schedule' },
    { label: 'Governance', href: '#governance' },
    { label: 'Open Syllabi', href: '#resources' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-200 glass-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Academic Crest */}
          <a href="#" className="flex items-center gap-3.5 group">
            {/* University Emblem Crest */}
            <div className="w-12 h-12 rounded-xl bg-slate-900 border-2 border-amber-500/80 p-0.5 shadow-md flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-slate-950 rounded-[8px] flex flex-col items-center justify-center text-center">
                <span className="font-mono text-amber-400 font-extrabold text-sm tracking-tighter leading-none">
                  UOS
                </span>
                <span className="font-mono text-white text-[9px] font-semibold tracking-tight">
                  ES
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors">
                  UOS Entrepreneurship Society
                </span>
                <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-emerald-600" title="Active University Chapter" />
              </div>
              <span className="text-xs font-mono text-slate-500 tracking-wide uppercase">
                University of Sahiwal • Student Chapter
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/uos-entrepreneurship"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-slate-600 hover:text-slate-900 flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <span>GitHub Hub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href="#membership"
              className="px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-blue-950 border border-slate-800 shadow-sm transition-all"
            >
              Apply for Membership
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://github.com/uos-entrepreneurship"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-slate-600 py-2 flex items-center justify-between"
            >
              <span>GitHub Organization Hub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#membership"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-xs font-bold text-white bg-slate-900"
            >
              Apply for Membership
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
