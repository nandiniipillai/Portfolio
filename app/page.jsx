import BentoNav from '@/components/BentoNav';
import { SITE } from '@/lib/site';

export default function Home() {
  return (
    <>
      <h1 className="sr-only">
        {SITE.name} — {SITE.title}. {SITE.positioning}
      </h1>
      <BentoNav />
    </>
  );
}
