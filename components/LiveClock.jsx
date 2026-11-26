'use client';

import { useEffect, useState } from 'react';
import { SITE } from '@/lib/site';

// Visitors see their own location and local time: UK visitors get the UK,
// India visitors get India. Other IANA zones fall back to the city name
// (e.g. America/New_York -> "New York"). Browsers that don't expose a zone
// fall back to the site default.
const LOCATION_LABELS = {
  'Asia/Calcutta': 'India',
  'Asia/Kolkata': 'India',
  'Europe/London': 'United Kingdom',
};

function visitorZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || SITE.timezone;
  } catch {
    return SITE.timezone;
  }
}

function labelFor(zone) {
  if (LOCATION_LABELS[zone]) return LOCATION_LABELS[zone];
  const city = zone.split('/').pop() || '';
  return city.replace(/_/g, ' ');
}

function timeFor(zone) {
  const fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: zone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  return fmt.format(new Date());
}

export default function LiveClock({ timeOnly = false, locationOnly = false, className = '' }) {
  const [state, setState] = useState({ label: '', time: '' });

  useEffect(() => {
    const zone = visitorZone();
    const tick = () => setState({ label: labelFor(zone), time: timeFor(zone) });
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!state.time) return <span className={className} suppressHydrationWarning />;
  if (timeOnly) return <span className={className} suppressHydrationWarning>{state.time}</span>;
  if (locationOnly) return <span className={className} suppressHydrationWarning>{state.label}</span>;
  return (
    <span className={className} suppressHydrationWarning>
      {state.label} · {state.time}
    </span>
  );
}
