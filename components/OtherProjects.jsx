'use client';

import Link from 'next/link';
import Image from 'next/image';
import { OTHER_PROJECTS } from '@/lib/case-studies';
import RollLabel from './RollLabel';
import ScrollReveal from './ScrollReveal';

export default function OtherProjects() {
  return (
    <section className="mt-20 md:mt-28">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-[11px] tracking-[0.24em] uppercase text-ash font-medium">Other projects</h2>
        <span className="text-[11px] tracking-[0.24em] uppercase text-ash">
          Strategy &amp; early work
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {OTHER_PROJECTS.map((p) => {
          const inner = (
            <div className="group card-tex block relative w-full aspect-[16/10] overflow-hidden">
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                <div className="text-[11px] tracking-[0.24em] uppercase text-fog">{p.category}</div>
                <div>
                  <div
                    className="font-heading tracking-tightest text-silver"
                    style={{ fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1 }}
                  >
                    <RollLabel>{p.title}</RollLabel>
                  </div>
                  <p className="mt-2 text-fog text-sm max-w-md">{p.oneLiner}</p>
                </div>
              </div>
              {p.image && (
                <div className="absolute inset-0 -z-0 opacity-40 group-hover:opacity-55 transition-opacity duration-500">
                  <Image src={p.image} alt="" fill sizes="600px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              )}
              {p.hasPage && (
                <span className="absolute top-6 right-6 card-arrow text-silver text-xl z-10" aria-hidden="true">↗</span>
              )}
            </div>
          );
          return (
            <ScrollReveal key={p.slug}>
              {p.hasPage && p.path ? <Link href={p.path}>{inner}</Link> : inner}
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
