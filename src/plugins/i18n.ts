import { createI18n } from "vue-i18n";
import enLocale from "./../locales/en.json";
import frLocale from "./../locales/fr.json";
import ptLocale from "./../locales/pt.json";
import xxLocale from "./../locales/xx.json";

const messages = {
  en: enLocale,
  fr: frLocale,
  pt: ptLocale,
  xx: xxLocale,
};

export const i18n = createI18n({
  allowComposition: true,
  locale: localStorage.getItem("lang") || "en",
  missing(locale, key) {
    // return i18n.global.t("translation.missing", { key });
    return "XXXXXXX";
  },
  // fallbackLocale: "fr",
  messages,
});
