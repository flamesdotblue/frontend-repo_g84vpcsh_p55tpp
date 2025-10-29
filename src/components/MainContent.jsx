import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, FileText, LineChart, BookOpen, GraduationCap, Building2, CheckCircle2, Youtube, Search, Globe, FileSearch, Linkedin } from 'lucide-react';
import HeroSection from './HeroSection';

function Section({ title, description, children }) {
  return (
    <section className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">{title}</h2>
        {description && <p className="mt-2 text-sm text-white/70 max-w-2xl">{description}</p>}
      </div>
      <div>{children}</div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc, items }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-10 w-10 flex items-center justify-center rounded-md bg-white/10">
          <Icon className="text-white" size={20} />
        </div>
        <h3 className="text-white font-medium text-lg">{title}</h3>
      </div>
      <p className="text-sm text-white/70 mb-3">{desc}</p>
      {items && (
        <ul className="list-disc pl-5 text-sm text-white/80 space-y-1">
          {items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function HomePage() {
  return (
    <div className="space-y-8">
      <HeroSection />
      <Section
        title="Use cases"
        description="Aame creates tailored learning experiences for students, professionals, and educators using live data from trusted sources."
      >
        <div className="grid md:grid-cols-3 gap-4">
          <FeatureCard
            icon={GraduationCap}
            title="Professional Upskilling"
            desc="AI-powered, job-role aligned courses created from real-time sources."
            items={[
              'Curates from YouTube, research papers, and the web',
              'Collects target company skills & role requirements',
              'Adds relevant videos and citations to each module',
            ]}
          />
          <FeatureCard
            icon={BookOpen}
            title="Student Preparation"
            desc="Competetive exam and syllabus-based micro-courses with smart testing."
            items={[
              'Scans past papers and official blueprints',
              'Finds high-signal lectures & papers for each topic',
              'Adaptive quizzes after every topic',
            ]}
          />
          <FeatureCard
            icon={Building2}
            title="Professor Assistance"
            desc="University-ready AI presentations auto-assembled with citations."
            items={[
              'Slide outlines with figures and speaker notes',
              'Citations to journals, web sources, and videos',
              'Exports to PDF/Slides in one click',
            ]}
          />
        </div>
        <div className="mt-6">
          <a href="#/use-cases" className="inline-flex items-center gap-2 text-indigo-300 hover:text-white">
            Explore detailed use cases <ArrowRight size={16} />
          </a>
        </div>
      </Section>
    </div>
  );
}

function UseCasesPage() {
  return (
    <div className="space-y-8">
      <Section
        title="Professional Upskilling"
        description="Aame maps your role, seniority, and target companies to auto-generate a course that closes the skill gap with verifiable outcomes."
      >
        <div className="grid md:grid-cols-3 gap-4">
          <FeatureCard
            icon={Search}
            title="Multisource intelligence"
            desc="Continuously gathers from YouTube, peer‑reviewed papers, company tech blogs, and the wider web."
            items={[
              'Topic extraction from job descriptions',
              'Citation-first summaries with links',
              'Versioned updates as sources evolve',
            ]}
          />
          <FeatureCard
            icon={Youtube}
            title="Linked learning videos"
            desc="Attaches high-signal videos per module with timestamps and quick previews."
            items={[
              'Role-aligned playlists',
              'Long/short format mixing',
              'Accessible transcripts',
            ]}
          />
          <FeatureCard
            icon={LineChart}
            title="Outcomes you can audit"
            desc="Clear milestones, assessments, and analytics so teams and individuals see progress."
            items={[
              'Skill proficiency tracking',
              'Capstone aligned to role outcomes',
              'Shareable completion reports',
            ]}
          />
        </div>
      </Section>

      <Section
        title="Student Preparation"
        description="For competitive exams and board syllabi, Aame composes structured programs with adaptive testing."
      >
        <div className="grid md:grid-cols-3 gap-4">
          <FeatureCard
            icon={FileSearch}
            title="Exam-aware synthesis"
            desc="Scans past papers, blueprint docs, and official outlines to weight topics by impact."
          />
          <FeatureCard
            icon={BookOpen}
            title="Micro-lessons + quizzes"
            desc="Every topic ends with a quick quiz. Proceed only when mastery is demonstrated."
          />
          <FeatureCard
            icon={CheckCircle2}
            title="AAME is accurate"
            desc="Assessments after every topic ensure retention and correctness with clear feedback."
          />
        </div>
      </Section>

      <Section
        title="Professor Assistance"
        description="University-ready AI presentation creation with citations, figures, and export."
      >
        <div className="grid md:grid-cols-3 gap-4">
          <FeatureCard
            icon={FileText}
            title="Auto slide drafting"
            desc="Outline, speaker notes, and figures sourced with citations."
          />
          <FeatureCard
            icon={Globe}
            title="Up-to-date references"
            desc="Pulls latest papers and reputable web sources with DOIs and links."
          />
          <FeatureCard
            icon={Shield}
            title="Compliance-first"
            desc="Data processing agreements and content usage policies respected throughout."
            items={[
              'Configurable retention and provenance',
              'Plagiarism detection and source attribution',
              'Org-level audit trails',
            ]}
          />
        </div>
      </Section>
    </div>
  );
}

function DownloadPage() {
  return (
    <Section title="Download Aame" description="Get the desktop app when it becomes available. Join the waitlist and we will notify you.">
      <a href="#/waitlist" className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-4 py-2 font-medium hover:bg-white/90">
        Join waitlist <ArrowRight size={16} />
      </a>
    </Section>
  );
}

function PricingPage() {
  return (
    <Section title="Pricing" description="Simple, transparent pricing.">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <h3 className="text-white text-xl font-semibold">Learner</h3>
          <p className="text-white/70 mt-1">$50</p>
          <ul className="mt-3 text-sm text-white/80 list-disc pl-5 space-y-1">
            <li>Personalized courses</li>
            <li>Adaptive quizzes</li>
            <li>Source citations</li>
          </ul>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <h3 className="text-white text-xl font-semibold">Enterprise</h3>
          <p className="text-white/70 mt-1">Custom</p>
          <ul className="mt-3 text-sm text-white/80 list-disc pl-5 space-y-1">
            <li>Org rollout & SSO</li>
            <li>Compliance & DPA support</li>
            <li>Team analytics</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

function CareersPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', linkedin: '', resume: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nMobile: ${form.phone}\nLinkedIn: ${form.linkedin}\n\nPlease see my attached resume.`
    );
    window.location.href = `mailto:connect@theaame.com?subject=Career%20Application%20-%20${encodeURIComponent(
      form.name || 'Candidate'
    )}&body=${body}`;
  };

  return (
    <Section title="Careers" description="Apply to join Aame. Fill in the details and your email client will open to attach your resume.">
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl">
        <input className="rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50" placeholder="Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} required />
        <input type="email" className="rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} required />
        <input className="rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50" placeholder="Mobile number" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} />
        <input className="rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50" placeholder="LinkedIn profile URL" value={form.linkedin} onChange={(e)=>setForm({...form,linkedin:e.target.value})} />
        <input type="file" className="rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white" onChange={(e)=>setForm({...form,resume:e.target.files?.[0]||null})} />
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-gray-900 px-4 py-2 font-medium hover:bg-white/90">Submit</button>
        <p className="text-xs text-white/60">Note: Attach your resume in the email that opens. Direct attachment from the browser is not supported here.</p>
      </form>
    </Section>
  );
}

function FAQPage() {
  return (
    <Section title="FAQs" description="Answers to common questions.">
      <div className="grid gap-3 text-white/80 text-sm">
        <div>
          <p className="font-medium text-white">How does Aame source content?</p>
          <p>We aggregate from reputable sources (YouTube, journals, official docs) with attribution and continuous updates.</p>
        </div>
        <div>
          <p className="font-medium text-white">Is my data secure?</p>
          <p>Yes. We implement strict access controls, encryption, and customizable data processing agreements for enterprises.</p>
        </div>
      </div>
    </Section>
  );
}

function ResourcesPage() {
  return (
    <div className="space-y-8">
      <Section title="AIM Aame" description="We are making education for anyone driven by curiosity and intelligence.">
        <blockquote className="text-white text-lg sm:text-xl max-w-3xl">“Learning should meet you where you are, powered by live intelligence, structured for progress, and open to everyone.”</blockquote>
      </Section>
      <PricingPage />
      <Section title="FAQ's">
        <FAQPage />
      </Section>
    </div>
  );
}

function SupportPage() {
  return (
    <div className="space-y-8">
      <Section title="Help center" description="Articles & FAQs to get you moving fast.">
        <p className="text-sm text-white/70">Browse the FAQ section or reach out to us directly.</p>
      </Section>
      <Section title="Contact us" description="We typically reply within 24–48 hours.">
        <p className="text-sm text-white/80">Email us at <a className="underline" href="mailto:connect@theaame.com">connect@theaame.com</a></p>
      </Section>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="space-y-8">
      <Section title="About Aame for Enterprise" description="Professional upskilling AI for organizations and teams.">
        <ul className="list-disc pl-5 text-sm text-white/80 space-y-1">
          <li>Career mapping to identify role requirements</li>
          <li>Course generation tailored to projects and stacks</li>
          <li>Six core skills per employee with a 12‑month track</li>
          <li>Compliance, security, and customizable DPAs</li>
        </ul>
      </Section>
      <Section title="Enterprise guide" description="Create courses based on the work your team is doing right now.">
        <ul className="list-disc pl-5 text-sm text-white/80 space-y-1">
          <li>Define project goals and required competencies</li>
          <li>Auto-generate modules with citations and videos</li>
          <li>Grant access by team with analytics and milestones</li>
        </ul>
      </Section>
      <Section title="Security" description="Customizable security and data handling">
        <ul className="list-disc pl-5 text-sm text-white/80 space-y-1">
          <li>SSO/SAML-ready architecture</li>
          <li>Data residency options</li>
          <li>Encryption in transit and at rest</li>
        </ul>
      </Section>
      <Section title="FAQ">
        <FAQPage />
      </Section>
    </div>
  );
}

function WaitlistPage() {
  const [data, setData] = useState({ name: '', email: '', linkedin: '', role: 'professional' });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-white">Join the waitlist</h2>
        <p className="mt-2 text-sm text-white/70">Be first to get access. We’ll notify you when we open early access.</p>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm text-white/80">Full name</span>
            <input
              className="h-11 rounded-md bg-white/10 border border-white/10 px-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Alex Johnson"
              value={data.name}
              onChange={(e)=>setData({...data, name: e.target.value})}
              required
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm text-white/80">Email</span>
            <input
              type="email"
              className="h-11 rounded-md bg-white/10 border border-white/10 px-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="alex@company.com"
              value={data.email}
              onChange={(e)=>setData({...data, email: e.target.value})}
              required
            />
          </label>
          <label className="grid gap-2">
            <span className="flex items-center gap-2 text-sm text-white/80"><Linkedin size={16}/> LinkedIn profile</span>
            <input
              type="url"
              className="h-11 rounded-md bg-white/10 border border-white/10 px-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="https://www.linkedin.com/in/your-handle"
              value={data.linkedin}
              onChange={(e)=>setData({...data, linkedin: e.target.value})}
              required
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm text-white/80">I am</span>
            <div className="grid grid-cols-3 gap-2">
              {['professional','students','enterprise'].map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setData({...data, role})}
                  className={`h-11 rounded-md border px-3 text-sm capitalize transition ${data.role===role ? 'bg-white text-gray-900 border-white' : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'}`}
                >
                  {role}
                </button>
              ))}
            </div>
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 h-11 rounded-md bg-white text-gray-900 px-5 font-medium hover:bg-white/90"
          >
            Join waitlist
          </button>

          {sent && (
            <div className="text-sm text-emerald-300">Thanks! You’re on the list. We’ll email you when we’re ready.</div>
          )}
        </form>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h3 className="text-white text-lg font-semibold">Why join now?</h3>
        <ul className="mt-3 space-y-2 text-sm text-white/80">
          <li>Early access to role‑aligned learning paths</li>
          <li>Influence product direction with feedback sessions</li>
          <li>Founding member perks and pricing</li>
        </ul>
        <div className="mt-6 rounded-lg bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-purple-500/20 p-4 border border-white/10">
          <p className="text-white/80 text-sm">Design language inspired by clean, airy layouts and subtle gradients — simple, accessible, and focused.</p>
        </div>
      </div>
    </div>
  );
}

export default function MainContent() {
  const [route, setRoute] = useState('/');

  useEffect(() => {
    const readHash = () => {
      const h = window.location.hash.replace('#', '') || '/';
      setRoute(h);
    };
    readHash();
    window.addEventListener('hashchange', readHash);
    return () => window.removeEventListener('hashchange', readHash);
  }, []);

  const render = () => {
    switch (route) {
      case '/':
        return <HomePage />;
      case '/use-cases':
        return <UseCasesPage />;
      case '/resources':
        return <ResourcesPage />;
      case '/resources/download':
        return <DownloadPage />;
      case '/support':
        return <SupportPage />;
      case '/legal':
        return (
          <div className="space-y-8">
            <Section title="Privacy Policy"><p className="text-sm text-white/70">We respect your privacy and only process data necessary to provide the service.</p></Section>
            <Section title="Terms of Service"><p className="text-sm text-white/70">Use Aame responsibly. Do not misuse, redistribute without permission, or infringe on third-party rights.</p></Section>
            <Section title="Data Processing Agreement"><p className="text-sm text-white/70">Enterprises can request bespoke DPAs detailing processing purposes, retention, and controls.</p></Section>
          </div>
        );
      case '/pricing':
        return <PricingPage />;
      case '/careers':
        return <CareersPage />;
      case '/faqs':
        return <FAQPage />;
      case '/about':
        return <AboutPage />;
      case '/waitlist':
        return <WaitlistPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <main className="ml-60 min-h-screen bg-gradient-to-b from-[#0b0b0f] to-[#0d0d13] text-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        {render()}
      </div>
    </main>
  );
}
