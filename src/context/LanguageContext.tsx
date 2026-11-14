import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { translations, Lang } from '../translations';

// Derive a loose union type that covers both hi and en shapes
type TranslationSet = typeof translations[Lang];

// ─── Context Types ─────────────────────────────────────────────────────────────
interface LanguageContextType {
  language: Lang;
  t: TranslationSet;
  toggleLanguage: () => void;
  setLanguage: (lang: Lang) => void;
}

// ─── Context ───────────────────────────────────────────────────────────────────
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// ─── Provider ─────────────────────────────────────────────────────────────────
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Default language: Hindi (as per requirements)
  const [language, setLanguageState] = useState<Lang>('hi');

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === 'hi' ? 'en' : 'hi'));
  }, []);

  const setLanguage = useCallback((lang: Lang) => {
    setLanguageState(lang);
  }, []);

  // Cast to hi shape — both shapes are structurally identical (same keys)
  const t = translations[language] as unknown as typeof translations.hi;

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// ─── Hook ─────────────────────────────────────────────────────────────────────
export const useLanguage = (): LanguageContextType => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
};
