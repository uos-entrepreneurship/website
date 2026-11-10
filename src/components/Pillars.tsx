import React from 'react';
import { Rocket, Lightbulb, Cpu, Users, Network, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Pillars() {
  const pillars = [
    {
      id: '01',
      title: 'Entrepreneurship',
      tagline: 'Start and grow viable businesses',
      icon: Rocket,
      accent: 'border-l-blue-700',
      badgeBg: 'bg-blue-50 text-blue-900 border-blue-200',
      description:
        'Guiding student founders through idea validation, customer discovery, financial modeling, and early traction before graduation.',
      outcomes: [
        'Lean canvas & business model validation',
        'Customer discovery & problem interview sprints',
        'Pitch deck preparation for grants and incubators',
        'Digital agency workflows & freelance contract acquisition',
      ],
    },
    {
      id: '02',
      title: 'Innovation',
      tagline: 'Solve problems and develop ideas',
      icon: Lightbulb,
      accent: 'border-l-amber-600',
      badgeBg: 'bg-amber-50 text-amber-900 border-amber-200',
      description:
        'Applying design thinking and rapid prototyping to regional friction, campus operations, and local business challenges.',
      outcomes: [
        'Human-centered design thinking methodology',
        'Rapid MVP prototyping cycles (Zero-to-One)',
        'Iterative testing and user feedback loops',
        'Case study competitions and solution roadmaps',
      ],
    },
    {
      id: '03',
      title: 'Technology',
      tagline: 'Explore AI, software and emerging tech',
      icon: Cpu,
      accent: 'border-l-emerald-700',
      badgeBg: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      description:
        'Demystifying software development, Git version control, generative AI workflows, and modern cloud deployment for every department.',
      outcomes: [
        'Collaborative Git & GitHub version control from scratch',
        'Full-stack web architecture & API integration',
        'AI agents & automated developer productivity stacks',
        'Manual GitHub Student Developer Pack verification clinics',
      ],
    },
    {
      id: '04',
      title: 'Professional Skills',
      tagline: 'Learn communication, sales and leadership',
      icon: Users,
      accent: 'border-l-purple-700',
      badgeBg: 'bg-purple-50 text-purple-900 border-purple-200',
      description:
        'Equipping members with the executive communication, team leadership, and consultative sales skills essential for modern careers.',
      outcomes: [
        'High-stakes demo presentations & stage presence',
        'Consultative selling & client negotiation',
        'Cross-disciplinary team management',
        'Personal branding & technical portfolio curation',
      ],
    },
    {
      id: '05',
      title: 'Opportunities',
      tagline: 'Connect with founders, mentors and companies',
      icon: Network,
      accent: 'border-l-slate-800',
      badgeBg: 'bg-slate-100 text-slate-900 border-slate-300',
      description:
        'Establishing direct linkages between University of Sahiwal students and the national tech, freelance, and startup ecosystem.',
      outcomes: [
        'Direct mentorship from practicing tech & agency founders',
        'Alumni networking & corporate apprenticeship fast-tracks',
        'Intra-university and national hackathon sponsorships',
        'GitHub Campus Expert community accreditation pipeline',
      ],
    },
  ];

  return (
    <section id="pillars" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-900 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
          Institutional Curriculum
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
          Five Core Areas of Achievement
        </h2>
        <p className="text-base text-slate-600 leading-relaxed">
          Structured so that a student from BBA, English, Mathematics, or Computer Science can find an immediate, high-value place to contribute and excel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              className={`institution-card rounded-2xl p-7 border-l-4 ${pillar.accent} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    AREA {pillar.id}
                  </span>
                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border font-semibold ${pillar.badgeBg}`}>
                    {pillar.title}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 mb-4">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono font-medium text-blue-900 mb-3">
                  {pillar.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-2.5">
                  Demonstrable Outcomes:
                </span>
                <ul className="space-y-2">
                  {pillar.outcomes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}

        {/* 6th Card: Join Society Overview */}
        <div className="institution-card rounded-2xl p-7 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-amber-400 block mb-4">
              JOIN THE CHAPTER
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">
              Ready to build with us?
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              Membership is open to all actively enrolled undergraduate and graduate students at the University of Sahiwal. No prior coding or business background required.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <a
              href="#membership"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
            >
              <span>Submit Membership Application</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <span className="text-[11px] font-mono text-slate-400 text-center block">
              Spring 2027 Cohort Registrations Open
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
