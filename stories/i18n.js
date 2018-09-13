import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";
import translations from "./translations.json";

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    resources: translations,
    fallbackLng: "en",
    ns: ["translations"],
    defaultNS: "translations",
    returnObjects: true,
    react: {
      wait: true
    }
  });

export default i18n;
