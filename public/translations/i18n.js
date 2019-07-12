import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translations from "./translations.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: translations,
    fallbackLng: "en",
    ns: ["translations"],
    defaultNS: "translations",
    returnObjects: true,
    debug: false,
    react: {
      wait: true
    }
  });

export default i18n;
