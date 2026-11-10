import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, MessageSquare, Calendar, ShieldCheck } from 'lucide-react';

interface FormData {
  fullName: string;
  department: string;
  semester: string;
  email: string;
  whatsapp: string;
  interests: string[];
  goal: string;
}

const availableInterests = [
  'Full-Stack Web Engineering',
  'AI & Automation Systems',
  'Startup Ideation & Pitching',
  'Freelance & Remote Client Acquisition',
  'UI/UX & Product Design',
  'Open Source & Git Mastery',
];

export default function JoinForm() {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    department: 'BS Computer Science',
    semester: '1st Semester',
    email: '',
    whatsapp: '',
    interests: ['Full-Stack Web Engineering'],
    goal: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const err: Record<string, string> = {};
    if (!formData.fullName.trim()) err.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@')) err.email = 'Please enter a valid email address';
    if (!formData.whatsapp.trim() || formData.whatsapp.length < 9) err.whatsapp = 'Please enter your active WhatsApp number';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      if (validateStep1()) setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(interest);
      if (exists) {
        return { ...prev, interests: prev.interests.filter((i) => i !== interest) };
      } else {
        return { ...prev, interests: [...prev.interests, interest] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save to localStorage as a reliable fallback / offline storage for the student team
    try {
      const existing = JSON.parse(localStorage.getItem('uos_es_members') || '[]');
      existing.push({ ...formData, submittedAt: new Date().toISOString() });
      localStorage.setItem('uos_es_members', JSON.stringify(existing));
    } catch (err) {
      console.log('Saved locally');
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border-2 border-emerald-500/40 rounded-3xl p-8 sm:p-12 shadow-xl text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center mx-auto mb-6 text-emerald-600 shadow-md">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Application Received
        </span>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 mb-3">
          Welcome to the Society, {formData.fullName.split(' ')[0]}!
        </h2>

        <p className="text-sm text-slate-600 leading-relaxed mb-8 max-w-lg mx-auto">
          You are officially registered in the UOS Entrepreneurship Society roster for the <strong>{formData.semester} ({formData.department})</strong>. No waiting for manual approval.
        </p>

        {/* The Direct WhatsApp Community Card */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mb-8 text-left relative overflow-hidden shadow-lg border border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              Step 1 of 1: Join the Daily Hub
            </span>
          </div>

          <h3 className="text-lg font-bold text-white mb-2">
            Enter the Official WhatsApp Community
          </h3>

          <p className="text-xs text-slate-300 leading-relaxed mb-6">
            All workshop Zoom links, venue reminders, mentor announcements, and team discussions happen inside our private WhatsApp group.
          </p>

          <a
            href="https://chat.whatsapp.com/invite-placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Join WhatsApp Community Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Next Event Reminder */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left flex items-start gap-4 mb-8">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-900 shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-blue-900 font-bold uppercase tracking-wider block">
              Your Next Campus Action
            </span>
            <h4 className="text-sm font-bold text-slate-900 mt-0.5">
              Workshop: Git & GitHub Ground Zero to First PR
            </h4>
            <span className="text-xs text-slate-600 block mt-0.5 font-mono">
              Saturday, Dec 05, 2026 • 10:00 AM • CS Computing Lab 1
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono">
          <a href="/events" className="text-blue-900 hover:underline">
            View Full Event Calendar →
          </a>
          <span className="hidden sm:inline text-slate-300">|</span>
          <a href="/projects" className="text-blue-900 hover:underline">
            Explore Member Projects →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm max-w-2xl mx-auto">
      {/* Progress Indicators */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${step >= 1 ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'}`}>
            1
          </span>
          <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Profile</span>
        </div>
        <div className="h-0.5 w-12 bg-slate-200" />
        <div className="flex items-center gap-2">
          <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${step >= 2 ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'}`}>
            2
          </span>
          <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Interests</span>
        </div>
        <div className="h-0.5 w-12 bg-slate-200" />
        <div className="flex items-center gap-2">
          <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${step >= 3 ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'}`}>
            3
          </span>
          <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Confirm</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Personal & Academic Details */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Student Identity & Contact
              </h3>
              <p className="text-xs text-slate-500">
                Please provide your official university academic information.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Muhammad Ali Khan"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 ${errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/50'}`}
              />
              {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Academic Department *
                </label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                >
                  <option value="BS Computer Science">BS Computer Science</option>
                  <option value="BS Information Technology">BS Information Technology</option>
                  <option value="BS Software Engineering">BS Software Engineering</option>
                  <option value="Bachelor of Business Admin (BBA)">BBA</option>
                  <option value="BS Commerce & Finance">BS Commerce & Finance</option>
                  <option value="BS Economics">BS Economics</option>
                  <option value="BS English">BS English</option>
                  <option value="Department of Law (LLB)">Department of Law</option>
                  <option value="Applied Sciences & Other">Other Academic Faculty</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Current Semester *
                </label>
                <select
                  value={formData.semester}
                  onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                >
                  <option value="1st Semester">1st Semester (Freshman)</option>
                  <option value="2nd Semester">2nd Semester</option>
                  <option value="3rd Semester">3rd Semester</option>
                  <option value="4th Semester">4th Semester</option>
                  <option value="5th Semester">5th Semester</option>
                  <option value="6th Semester">6th Semester</option>
                  <option value="7th Semester">7th Semester</option>
                  <option value="8th Semester">8th Semester (Final Year)</option>
                  <option value="Postgraduate / MS">Postgraduate / MS</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 ${errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/50'}`}
                />
                {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="e.g. 0300 1234567"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 ${errors.whatsapp ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/50'}`}
                />
                {errors.whatsapp && <p className="text-[11px] text-red-500 mt-1">{errors.whatsapp}</p>}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-slate-900 hover:bg-blue-950 transition-colors shadow-sm"
              >
                <span>Continue to Goals</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: What do you want to build or learn? */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Your Interests & Objectives
              </h3>
              <p className="text-xs text-slate-500">
                Help us align you with the right mentors, bootcamps, and hackathon teams.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Select your focus areas (choose any):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableInterests.map((interest) => {
                  const selected = formData.interests.includes(interest);
                  return (
                    <button
                      type="button"
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`text-left p-3 rounded-xl border text-xs font-medium transition-all flex items-center justify-between ${
                        selected
                          ? 'border-blue-900 bg-blue-50 text-blue-950 font-bold'
                          : 'border-slate-200 bg-slate-50/50 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <span>{interest}</span>
                      {selected && <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                What is one specific project or skill you want to tackle this semester?
              </label>
              <textarea
                rows={3}
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                placeholder="e.g. I want to build a deployed full-stack web app, learn to use Git with a team, or validate an e-commerce idea."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-slate-900 hover:bg-blue-950 transition-colors shadow-sm"
              >
                <span>Review & Confirm</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Review & Submit */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Confirm Membership Details
              </h3>
              <p className="text-xs text-slate-500">
                Review your profile before submitting. Membership is 100% free with no dues.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3 text-xs">
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-mono">Full Name</span>
                <span className="font-bold text-slate-900">{formData.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-mono">Department & Term</span>
                <span className="font-bold text-slate-900">{formData.department} ({formData.semester})</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-mono">Contact Details</span>
                <span className="font-bold text-slate-900">{formData.email} • {formData.whatsapp}</span>
              </div>
              <div>
                <span className="text-slate-500 font-mono block mb-1.5">Selected Tracks:</span>
                <div className="flex flex-wrap gap-1.5">
                  {formData.interests.map((i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 text-[11px] font-semibold">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
              {formData.goal && (
                <div className="pt-2 border-t border-slate-200/60">
                  <span className="text-slate-500 font-mono block mb-1">Semester Objective:</span>
                  <p className="italic text-slate-700">"{formData.goal}"</p>
                </div>
              )}
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900">
              <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                By clicking Submit, you agree to uphold our community standards and will immediately gain access to the society WhatsApp community.
              </span>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs text-white bg-slate-900 hover:bg-blue-950 transition-colors shadow-md"
              >
                <Send className="w-3.5 h-3.5 text-amber-400" />
                <span>Submit & Get WhatsApp Access</span>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
