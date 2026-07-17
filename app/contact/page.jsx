'use client';

import { motion } from 'framer-motion';
import BlurReveal from '@/components/BlurReveal';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
      className="pt-28 md:pt-36 pb-20 px-5 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <BlurReveal>
          <p
            className="font-heading tracking-tightest text-silver max-w-4xl"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.1 }}
          >
            Feel free to reach out for project inquiries, design consultations, or just to say hello!
          </p>
        </BlurReveal>
        <ContactForm />
      </div>
    </motion.div>
  );
}
