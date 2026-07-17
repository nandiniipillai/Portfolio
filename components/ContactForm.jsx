'use client';

import { useState } from 'react';
import { SITE } from '@/lib/site';
import ScrollReveal from './ScrollReveal';

const TOPICS = ['Product Design', 'Experience Design', 'Design Consultation', 'Just Saying Hello'];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topics, setTopics] = useState([]);
  const [details, setDetails] = useState('');

  const toggleTopic = (t) => {
    setTopics((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio enquiry — ${name || 'friend'}`;
    const bodyLines = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      topics.length && `Topic: ${topics.join(', ')}`,
      details && '',
      details,
    ].filter(Boolean);
    const body = bodyLines.join('\n');
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 md:gap-14 mt-10 md:mt-16">
      <ScrollReveal>
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-silver">
            <span className="inline-block w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: '#7CFF9B' }} />
            <span>{SITE.availability}</span>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-1.5">Email</div>
            <a href={`mailto:${SITE.email}`} className="text-silver hover:text-lime transition-colors">
              {SITE.email}
            </a>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-1.5">LinkedIn</div>
            <a
              href={`https://www.linkedin.com/in/${SITE.socials.linkedin}`}
              target="_blank"
              rel="noreferrer noopener"
              className="text-silver hover:text-lime transition-colors"
            >
              /in/{SITE.socials.linkedin}
            </a>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <form onSubmit={onSubmit} className="rounded-3xl bg-carbon border border-white/[0.06] p-6 md:p-8 space-y-6">
          <div>
            <label className="block text-[11px] tracking-[0.24em] uppercase text-ash mb-2" htmlFor="cf-name">
              Full name
            </label>
            <input
              id="cf-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ex. John Smith"
              className="w-full bg-transparent border-b border-white/[0.1] py-2 text-silver focus:outline-none focus:border-lime"
              required
            />
          </div>
          <div>
            <label className="block text-[11px] tracking-[0.24em] uppercase text-ash mb-2" htmlFor="cf-email">
              Email
            </label>
            <input
              id="cf-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hello@website.com"
              className="w-full bg-transparent border-b border-white/[0.1] py-2 text-silver focus:outline-none focus:border-lime"
              required
            />
          </div>

          <fieldset>
            <legend className="text-[11px] tracking-[0.24em] uppercase text-ash mb-3">What&apos;s it about?</legend>
            <div className="flex flex-wrap gap-2">
              {TOPICS.map((t) => {
                const on = topics.includes(t);
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => toggleTopic(t)}
                    aria-pressed={on}
                    className={`text-sm rounded-full px-4 py-1.5 border transition-colors ${
                      on ? 'bg-silver text-ink border-silver' : 'border-white/[0.1] text-fog hover:border-white/[0.3]'
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div>
            <label className="block text-[11px] tracking-[0.24em] uppercase text-ash mb-2" htmlFor="cf-body">
              Share more details
            </label>
            <textarea
              id="cf-body"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows={5}
              placeholder="About your project..."
              className="w-full bg-transparent border border-white/[0.1] rounded-xl p-3 text-silver focus:outline-none focus:border-lime resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-lime text-ink font-medium hover:-translate-y-0.5 transition-transform"
          >
            Submit
          </button>
        </form>
      </ScrollReveal>
    </div>
  );
}
