import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

i18n.use(Backend)
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next).init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    backend: {
        loadPath: "/locales/{{lng}}.json",
    },
    react: {
      useSuspense: false, // To avoid needing Suspense fallback
    }
});

export default i18n;