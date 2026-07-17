import Link from 'next/link';
import { SITE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/[0.06] px-5 md:px-8 py-10 text-[13px] text-fog">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-6 md:items-end md:justify-between">
        <div>
          <div className="text-silver text-lg font-heading tracking-tightest">{SITE.name}</div>
          <div className="mt-1">{SITE.title} · {SITE.location}</div>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a className="hover:text-silver transition-colors" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a className="hover:text-silver transition-colors" href={`https://www.linkedin.com/in/${SITE.socials.linkedin}`} target="_blank" rel="noreferrer noopener">LinkedIn</a>
          <a className="hover:text-silver transition-colors" href={`https://www.behance.net/${SITE.socials.behance}`} target="_blank" rel="noreferrer noopener">Behance</a>
          <Link className="hover:text-silver transition-colors" href="/contact">Contact</Link>
        </div>
      </div>
      <div className="mx-auto max-w-6xl mt-8 text-ash">© {new Date().getFullYear()} {SITE.name}. Built in Next.js.</div>
    </footer>
  );
}
