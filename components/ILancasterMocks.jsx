'use client';

import PhoneFrame from './PhoneFrame';

function Row({ label, dark = false }) {
  const bg = dark ? 'bg-white/[0.05]' : 'bg-black/[0.05]';
  const fg = dark ? 'text-white/80' : 'text-black/80';
  return (
    <div className={`rounded-lg ${bg} ${fg} p-2 text-[9px]`}>{label}</div>
  );
}

export function HomeNight() {
  return (
    <PhoneFrame className="!max-w-[240px]">
      <div className="w-full h-full bg-[#0a0a0a] p-4 text-white flex flex-col gap-2">
        <div className="text-[10px] text-white/60">Good evening, Nandini</div>
        <div className="rounded-xl bg-[#E4002B] text-white p-3 text-center text-[12px] font-medium">
          Check in
        </div>
        <div className="text-[9px] text-white/50 mt-1">Today · 3 lectures</div>
        <div className="space-y-1.5">
          <Row label="09:00 · DESN411 studio" dark />
          <Row label="11:30 · Product management" dark />
          <Row label="14:00 · Speculative design" dark />
        </div>
        <div className="mt-auto grid grid-cols-4 gap-2 pt-2">
          {['Home','Time','Enq','You'].map((t) => (
            <div key={t} className="text-center text-[9px] text-white/60">{t}</div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

export function HomeDay() {
  return (
    <PhoneFrame className="!max-w-[240px]">
      <div className="w-full h-full bg-white p-4 text-black flex flex-col gap-2">
        <div className="text-[10px] text-black/60">Good morning, Nandini</div>
        <div className="rounded-xl bg-[#E4002B] text-white p-3 text-center text-[12px] font-medium">
          Check in
        </div>
        <div className="text-[9px] text-black/50 mt-1">Today · 3 lectures</div>
        <div className="space-y-1.5">
          <Row label="09:00 · DESN411 studio" />
          <Row label="11:30 · Product management" />
          <Row label="14:00 · Speculative design" />
        </div>
        <div className="mt-auto grid grid-cols-4 gap-2 pt-2">
          {['Home','Time','Enq','You'].map((t) => (
            <div key={t} className="text-center text-[9px] text-black/60">{t}</div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

export function GuidedEnquiry() {
  const steps = ['I need help with…', 'Accommodation', 'Room maintenance', 'Confirm'];
  return (
    <PhoneFrame className="!max-w-[240px]">
      <div className="w-full h-full bg-[#0a0a0a] p-4 text-white flex flex-col gap-2">
        <div className="text-[11px] text-white/70">Raise enquiry</div>
        {steps.map((s, i) => (
          <div
            key={i}
            className="rounded-lg p-2.5 text-[10px] border"
            style={{
              borderColor: i === 1 ? '#E4002B' : 'rgba(255,255,255,0.08)',
              background: i < 1 ? 'rgba(255,255,255,0.05)' : i === 1 ? 'rgba(228,0,43,0.1)' : 'transparent',
              color: i <= 1 ? '#fff' : 'rgba(255,255,255,0.4)',
            }}
          >
            {s}
          </div>
        ))}
      </div>
    </PhoneFrame>
  );
}
