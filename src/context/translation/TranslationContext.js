import { createContext } from "react";

const navigatorLanguage = (navigator.language.charAt(0) + navigator.language.charAt(1)).toUpperCase();
const languagesApp = ["EN", "ES"];

export const getTranslate = 
  (langCode, arrayTranslation) => (page, key) => {
    if (arrayTranslation) {
      if (arrayTranslation[langCode][page]) {
        return arrayTranslation[langCode][page][key] || key
      } else {
        return key
      }
    }
  };

export const initialState = {
  langCode: languagesApp.includes(navigatorLanguage) ? navigatorLanguage : languagesApp[0],
  translate: getTranslate(languagesApp.includes(navigatorLanguage) ? navigatorLanguage : languagesApp[0])
}

export const TranslationContext = createContext(initialState)
