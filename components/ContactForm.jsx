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

  const inputBase =
    'w-full bg-transparent border-b border-white/[0.1] py-2 text-silver placeholder:text-ash/70 focus:outline-none focus:border-white/40 transition-colors';

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 md:gap-14 mt-12 md:mt-20">
      <ScrollReveal>
        <div className="space-y-8">
          <div>
            <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-2">Availability</div>
            <div className="text-silver">{SITE.availability}</div>
            <div className="text-fog text-sm mt-1">Based in {SITE.location}</div>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-2">Email</div>
            <a href={`mailto:${SITE.email}`} className="text-silver hover:text-white transition-colors">
              {SITE.email}
            </a>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-2">LinkedIn</div>
            <a
              href={`https://www.linkedin.com/in/${SITE.socials.linkedin}`}
              target="_blank"
              rel="noreferrer noopener"
              className="text-silver hover:text-white transition-colors"
            >
              /in/{SITE.socials.linkedin}
            </a>
          </div>
          {SITE.socials.behance && (
            <div>
              <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-2">Behance</div>
              <a
                href={`https://www.behance.net/${SITE.socials.behance}`}
                target="_blank"
                rel="noreferrer noopener"
                className="text-silver hover:text-white transition-colors"
              >
                /{SITE.socials.behance}
              </a>
            </div>
          )}
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <form
          onSubmit={onSubmit}
          className="relative rounded-[32px] p-6 md:p-8 space-y-7 bg-white/[0.05] border border-white/[0.06]"
          style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.12)' }}
        >
          <div>
            <label className="block text-[11px] tracking-[0.24em] uppercase text-ash mb-2" htmlFor="cf-name">
              Full name
            </label>
            <input
              id="cf-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={inputBase}
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
              placeholder="you@somewhere.com"
              className={inputBase}
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
                      on
                        ? 'bg-white/[0.14] border-white/25 text-silver'
                        : 'border-white/[0.1] text-fog hover:border-white/[0.25] hover:text-silver'
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
              placeholder="A few lines about the project or the idea…"
              className="w-full bg-transparent border border-white/[0.1] rounded-2xl p-3 text-silver placeholder:text-ash/70 focus:outline-none focus:border-white/40 resize-none transition-colors"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 hover:border-white/20 px-7 py-3.5 text-silver hover:-translate-y-0.5 transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/80 focus-visible:outline-offset-2"
            style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.12)' }}
          >
            <span className="text-[17px] font-medium tracking-tight leading-none">Send message</span>
          </button>
        </form>
      </ScrollReveal>
    </div>
  );
}
