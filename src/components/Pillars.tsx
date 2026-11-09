import React, { useState } from 'react';
import { Rocket, Cpu, Lightbulb, Users, Network, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Pillars() {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  const pillars = [
    {
      id: 1,
      title: 'Entrepreneurship',
      tagline: 'Start and grow real businesses',
      icon: Rocket,
      color: 'emerald',
      size: 'large', // 2 cols
      summary:
        'Transforming conceptual ideas into validated commercial models, pitch decks, and launched products.',
      achievements: [
        'Business model validation & lean startup mechanics',
        'Customer discovery sprints & problem interviewing',
        'Pitch deck crafting & investor presentation skills',
        'Freelance agency operations & client acquisition',
      ],
      badge: 'Core Engine',
    },
    {
      id: 2,
      title: 'Innovation',
      tagline: 'Solve problems and develop ideas',
      icon: Lightbulb,
      color: 'cyan',
      size: 'normal',
      summary:
        'Applying design thinking and rapid prototyping to solve real friction on campus and in regional industries.',
      achievements: [
        'Design thinking & user research',
        'Rapid MVP prototyping cycles',
        'Zero-to-one problem solving',
      ],
      badge: 'Creative Lab',
    },
    {
      id: 3,
      title: 'Technology',
      tagline: 'Explore AI, software and emerging tech',
      icon: Cpu,
      color: 'teal',
      size: 'normal',
      summary:
        'Hands-on immersion into modern development: Git, full-stack web, generative AI workflows, and automation.',
      achievements: [
        'Git & GitHub version control from ground zero',
        'Modern web frameworks & API architecture',
        'AI tooling & developer productivity workflows',
      ],
      badge: 'Tech Core',
    },
    {
      id: 4,
      title: 'Professional Skills',
      tagline: 'Learn communication, sales and leadership',
      icon: Users,
      color: 'amber',
      size: 'normal',
      summary:
        'Equipping members with the soft and hard leadership skills needed to command respect in the modern workforce.',
      achievements: [
        'High-stakes public speaking & demo delivery',
        'Consultative selling & negotiation fundamentals',
        'Cross-functional team leadership',
      ],
      badge: 'Leadership',
    },
    {
      id: 5,
      title: 'Opportunities',
      tagline: 'Connect with founders, mentors and companies',
      icon: Network,
      color: 'purple',
      size: 'large', // 2 cols
      summary:
        'Direct access to a curated network of founders, corporate sponsors, alumni mentors, and global programs.',
      achievements: [
        'Mentorship from practicing agency and SaaS founders',
        'GitHub Campus Program & student developer pack access',
        'Apprenticeship & internship talent matching',
        'Intra-university and national hackathon access',
      ],
      badge: 'Ecosystem',
    },
  ];

  return (
    <section id="pillars" class="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-4">
          <span>Five Strategic Pillars</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          A place for every builder, thinker, and creator.
        </h2>
        <p className="text-base text-gray-400 leading-relaxed">
          Our curriculum and initiatives are engineered across five distinct verticals so students from every discipline achieve measurable growth.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          const isLarge = pillar.size === 'large';

          return (
            <div
              key={pillar.id}
              onMouseEnter={() => setActivePillar(pillar.id)}
              onMouseLeave={() => setActivePillar(null)}
              className={`glass-panel rounded-3xl p-7 transition-all duration-300 relative group overflow-hidden border border-white/5 hover:border-emerald-500/40 hover:-translate-y-1 ${
                isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
              }`}
            >
              {/* Subtle top corner gradient glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 group-hover:bg-emerald-500/10 blur-3xl rounded-full transition-all duration-500 pointer-events-none" />

              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gray-900 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-gray-950 transition-colors shadow-lg shadow-black/40">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-gray-400 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                  {pillar.badge}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 flex items-center gap-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-emerald-400/90 mb-4">
                {pillar.tagline}
              </p>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {pillar.summary}
              </p>

              {/* Achievements bullet list */}
              <div className="space-y-2 pt-4 border-t border-white/5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-2">
                  What You Will Master:
                </span>
                <div className={`grid ${isLarge ? 'sm:grid-cols-2' : 'grid-cols-1'} gap-2.5`}>
                  {pillar.achievements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-300 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
