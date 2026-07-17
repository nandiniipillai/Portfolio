'use client';

export function DashboardQueue() {
  const rows = [
    { token: 'A-042', name: 'In chair', status: 'active' },
    { token: 'A-043', name: 'Next up', status: 'next' },
    { token: 'A-044', name: 'Waiting', status: 'wait' },
    { token: 'A-045', name: 'Waiting', status: 'wait' },
    { token: 'A-046', name: 'Waiting', status: 'wait' },
  ];
  return (
    <div className="rounded-2xl overflow-hidden bg-graphite border border-white/[0.06] p-6">
      <div className="flex items-center justify-between mb-4 text-[13px]">
        <div className="text-silver font-medium">Today · Dr. Kapoor</div>
        <div className="flex items-center gap-2 text-fog">
          <span className="inline-block w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: '#7CFF9B' }} />
          <span>Live · updates every 15s</span>
        </div>
      </div>
      <div className="divide-y divide-white/[0.06]">
        {rows.map((r) => (
          <div key={r.token} className="flex items-center justify-between py-3 text-sm">
            <div className="flex items-center gap-4">
              <span
                className="font-heading text-lg w-16"
                style={{ color: r.status === 'active' ? '#34D399' : r.status === 'next' ? '#F4F4F2' : '#B4B4B0' }}
              >
                {r.token}
              </span>
              <span className="text-fog">{r.name}</span>
            </div>
            {r.status === 'active' && (
              <span className="text-[10px] uppercase tracking-widest text-[#34D399]">in chair</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TokenCard() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-[#0e1a12] to-[#0a0f0d] border border-white/[0.06] p-8 text-center">
      <div className="text-[11px] tracking-[0.24em] uppercase text-fog mb-3">Your turn</div>
      <div className="font-heading text-6xl md:text-7xl" style={{ color: '#34D399', letterSpacing: '-0.04em' }}>
        A–044
      </div>
      <div className="mt-4 text-fog text-sm">Estimated wait · 22 min</div>
    </div>
  );
}

export function LiveStatus() {
  const states = [
    { label: 'Your booking is tomorrow', tone: 'calm', color: '#B4B4B0' },
    { label: 'Booking today · check in an hour before', tone: 'calm', color: '#B4B4B0' },
    { label: 'You are next · head to the location', tone: 'active', color: '#F4F4F2' },
    { label: 'Head to the location now', tone: 'loud', color: '#34D399' },
  ];
  return (
    <div className="rounded-2xl bg-graphite border border-white/[0.06] p-6 space-y-3">
      {states.map((s) => (
        <div
          key={s.label}
          className="rounded-xl px-4 py-3 border"
          style={{
            borderColor: s.tone === 'loud' ? s.color : 'rgba(255,255,255,0.06)',
            color: s.color,
            fontSize: s.tone === 'loud' ? '15px' : '13px',
            background: s.tone === 'loud' ? 'rgba(52,211,153,0.08)' : 'transparent',
          }}
        >
          {s.label}
        </div>
      ))}
    </div>
  );
}

export function Analytics() {
  return (
    <div className="rounded-2xl bg-graphite border border-white/[0.06] p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-silver text-sm font-medium">End of day</div>
        <div className="text-fog text-xs">7:14 PM</div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { v: '42', l: 'Bookings' },
          { v: '18', l: 'Walk-ins' },
          { v: '6', l: 'No-shows' },
        ].map((s) => (
          <div key={s.l} className="rounded-xl bg-carbon p-3">
            <div className="text-2xl font-heading" style={{ color: '#34D399' }}>{s.v}</div>
            <div className="text-fog text-[11px] mt-1">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="h-24 rounded-xl bg-carbon flex items-end gap-1 p-3">
        {[30, 55, 40, 70, 45, 85, 50].map((h, i) => (
          <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: '#34D399', opacity: 0.7 }} />
        ))}
      </div>
    </div>
  );
}
