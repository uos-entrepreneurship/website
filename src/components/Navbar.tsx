import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

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
    { label: 'Mission', href: '#mission' },
    { label: 'Pillars', href: '#pillars' },
    { label: 'Programs', href: '#programs' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Community', href: '#team' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-600 to-teal-800 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
              <div className="w-full h-full bg-gray-950 rounded-[10px] flex items-center justify-center">
                <span className="font-mono text-emerald-400 font-bold text-base tracking-tighter">
                  ES
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white flex items-center gap-1.5">
                UOS Entrepreneurship
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[11px] font-mono text-gray-400 tracking-wider uppercase">
                Univ. of Sahiwal
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-gray-900/60 border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 text-xs font-medium text-gray-300 hover:text-white rounded-full hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/uos-entrepreneurship"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-gray-400 hover:text-emerald-400 flex items-center gap-1 transition-colors px-3 py-1.5"
            >
              GitHub Org
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#get-involved"
              className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs font-semibold text-gray-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Join Society
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg bg-gray-900 border border-white/10 text-gray-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden glass-nav border-t border-white/5 px-4 pt-4 pb-6 mt-3 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/5 flex flex-col gap-2">
            <a
              href="https://github.com/uos-entrepreneurship"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-gray-400 hover:text-emerald-400 py-1.5 flex items-center justify-between"
            >
              <span>GitHub Organization</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#get-involved"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-2.5 rounded-xl text-xs font-semibold text-gray-950 bg-emerald-400 hover:bg-emerald-300"
            >
              Join the Society
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
