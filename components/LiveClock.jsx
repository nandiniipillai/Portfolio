'use client';

import { useEffect, useState } from 'react';
import { SITE } from '@/lib/site';

export default function LiveClock({ timeOnly = false, className = '' }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: SITE.timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  if (!time) return <span className={className} suppressHydrationWarning />;
  if (timeOnly) return <span className={className} suppressHydrationWarning>{time}</span>;
  return (
    <span className={className} suppressHydrationWarning>
      London · {time}
    </span>
  );
}
