'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { SITE } from '@/lib/site';

const RollingWordContext = createContext(null);

export function RollingWordProvider({ defaultWord = SITE.name, children }) {
  const [word, setWord] = useState(defaultWord);
  const [prev, setPrev] = useState(defaultWord);
  const timerRef = useRef(null);

  const setNext = (w) => {
    if (!w || w === word) return;
    setPrev(word);
    setWord(w);
  };

  const clear = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setNext(defaultWord);
  };

  return (
    <RollingWordContext.Provider value={{ word, prev, setNext, clear, defaultWord }}>
      {children}
    </RollingWordContext.Provider>
  );
}

export function useRollingWord() {
  return useContext(RollingWordContext);
}

export function hoverProps(rw, word) {
  if (!rw) return {};
  return {
    onMouseEnter: () => rw.setNext(word),
    onMouseLeave: () => rw.clear(),
    onFocus: () => rw.setNext(word),
    onBlur: () => rw.clear(),
  };
}

export function RollingWordBand({ className = '' }) {
  const rw = useRollingWord();
  const [key, setKey] = useState(0);
  const [outgoing, setOutgoing] = useState(null);

  useEffect(() => {
    if (!rw) return;
    setOutgoing(rw.prev);
    setKey((k) => k + 1);
    const t = setTimeout(() => setOutgoing(null), 500);
    return () => clearTimeout(t);
  }, [rw?.word]);

  if (!rw) return null;
  const word = rw.word;

  return (
    <div
      className={`relative select-none pointer-events-none ${className}`}
      style={{
        fontSize: 'clamp(56px, 10.2vw, 130px)',
        lineHeight: 0.9,
        letterSpacing: '-0.05em',
        color: '#F4F4F2',
        filter: 'blur(7px)',
        opacity: 0.45,
      }}
      aria-hidden="true"
    >
      <div className="whitespace-nowrap font-heading">
        {word.split('').map((c, i) => (
          <span
            key={`${key}-in-${i}`}
            className={`ch in ${c === ' ' ? 'sp' : ''}`}
            style={{ animationDelay: `${i * 24}ms` }}
          >
            {c === ' ' ? ' ' : c}
          </span>
        ))}
      </div>
      {outgoing && (
        <div className="absolute inset-0 whitespace-nowrap font-heading">
          {outgoing.split('').map((c, i) => (
            <span
              key={`${key}-out-${i}`}
              className={`ch out ${c === ' ' ? 'sp' : ''}`}
              style={{ animationDelay: `${i * 24}ms` }}
            >
              {c === ' ' ? ' ' : c}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
