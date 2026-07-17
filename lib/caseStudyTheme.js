'use client';

import { createContext, useContext } from 'react';

const AccentContext = createContext('#B4B4B0');

export function AccentProvider({ accent, children }) {
  return <AccentContext.Provider value={accent || '#B4B4B0'}>{children}</AccentContext.Provider>;
}

export function useAccent() {
  return useContext(AccentContext);
}
