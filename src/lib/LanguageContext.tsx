"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language, Translations } from "./i18n";

interface LanguageContextType {
  lang: Language;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "de",
  t: translations.de,
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("de");

  const toggleLang = () => setLang((prev) => (prev === "de" ? "en" : "de"));

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
