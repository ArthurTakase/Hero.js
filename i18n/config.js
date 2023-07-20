import i18n from "i18next";
import translationFR from "./fr.json" assert { type: "json" };
import translationEN from "./en.json" assert { type: "json" };
import { initReactI18next } from "react-i18next";

const resources = {
  fr: { translation: translationFR },
  gb: { translation: translationEN }
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: ["fr", "gb"],
    resources: resources,
    returnObjects: false
  });

export default i18n;