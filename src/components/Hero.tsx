import React from 'react';
import { ArrowRight, BookOpen, Calendar, ChevronRight, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-slate-100/60 border-b border-slate-200 bg-grid-subtle overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Institutional Charter Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-mono font-medium shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
            <span>University of Sahiwal</span>
          </div>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
            Student-Led Entrepreneurship & Innovation Chapter
          </span>
        </div>

        {/* Display Headline */}
        <div className="max-w-4xl mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
            Transforming academic theory into{' '}
            <span className="font-serif italic font-normal text-blue-900 underline decoration-amber-400 decoration-4 underline-offset-8">
              real-world ventures
            </span>{' '}
            and software.
          </h1>
        </div>

        {/* Descriptor line */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-0.5 w-8 bg-amber-500 inline-block" />
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest font-bold text-slate-700">
            ENTREPRENEURSHIP • INNOVATION • TECHNOLOGY
          </span>
        </div>

        {/* Subtitle */}
        <p className="max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed mb-9">
          The official cross-disciplinary society uniting students from <strong className="text-slate-900 font-semibold">Computer Science</strong>, <strong className="text-slate-900 font-semibold">Business Administration (BBA)</strong>, <strong className="text-slate-900 font-semibold">Economics</strong>, and across all departments at the University of Sahiwal. We provide structured bootcamps, founder mentorship, and open-source collaboration to build scalable ventures.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-14">
          <a
            href="#membership"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-blue-950 shadow-md hover:shadow-lg transition-all"
          >
            <span>Apply for Spring 2027 Cohort</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </a>

          <a
            href="#schedule"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all"
          >
            <Calendar className="w-4 h-4 text-slate-500" />
            <span>View Semester Schedule</span>
          </a>

          <a
            href="https://github.com/uos-entrepreneurship/.github/blob/main/WORKSHOP_SERIES_GIT_ZERO_TO_HERO.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-xs font-mono text-slate-600 hover:text-slate-900 transition-colors"
          >
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>Workshop Syllabus</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Institutional Pillars Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 border-t border-slate-200">
          <div className="institution-card p-5 rounded-2xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-900 font-bold text-xs">
                01
              </div>
              <h3 className="font-bold text-sm text-slate-900">Cross-Faculty Collaboration</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pairing technical developers from CS with strategists from BBA & Commerce to form balanced, execution-capable venture teams.
            </p>
          </div>

          <div className="institution-card p-5 rounded-2xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 font-bold text-xs">
                02
              </div>
              <h3 className="font-bold text-sm text-slate-900">Applied Tech & Open Source</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mastering industry-grade tools—Git, GitHub Actions, Full-Stack engineering, and automating business workflows with modern AI.
            </p>
          </div>

          <div className="institution-card p-5 rounded-2xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 font-bold text-xs">
                03
              </div>
              <h3 className="font-bold text-sm text-slate-900">Commercial Incubation</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Moving past theoretical slides: customer validation, MVP launching, client acquisition, and pitch preparation for external grants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
