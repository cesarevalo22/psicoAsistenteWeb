import { createContext } from "react";

export const getTranslate = 
  (langCode, arrayTranslation) => (page, key) => {
    if (arrayTranslation) {
      return arrayTranslation[langCode][page][key] || key
    }
  };

export const initialState = {
  langCode: 'es',
  translate: getTranslate('es')
}

export const TranslationContext = createContext(initialState)
