import React from 'react';
import { Target, Users, GitPullRequest, Laptop, ShieldCheck } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      value: '200+',
      label: 'Students to Onboard',
      detail: 'Hands-on training across all campus departments',
      icon: Users,
    },
    {
      value: '10+',
      label: 'Interactive Bootcamps',
      detail: 'From Git basics to Full-Stack & AI prototyping',
      icon: Laptop,
    },
    {
      value: '100+',
      label: 'Open-Source PRs',
      detail: 'Real student contributions merged to public code',
      icon: GitPullRequest,
    },
    {
      value: '8+',
      label: 'Ventures & Prototypes',
      detail: 'Student-built SaaS, client apps & products',
      icon: Target,
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/5 relative overflow-hidden bg-gradient-to-b from-gray-900/60 to-gray-950/80">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Target Metrics (12-Month Horizon)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Accountability & Tangible Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-950/40 border border-white/5 hover:border-emerald-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-3xl sm:text-4xl font-black text-white group-hover:text-emerald-400 transition-colors tracking-tight mb-2">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-gray-200 mb-1">
                  {stat.label}
                </span>
                <span className="text-xs text-gray-400 leading-relaxed">
                  {stat.detail}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
