import { createContext } from "react";

export const getTranslate = 
  (langCode, arrayTranslation) => (page, key) => {
    if (arrayTranslation) {
      return arrayTranslation[langCode][page][key] || key
    }
  };

export const initialState = {
  langCode: 'ES',
  translate: getTranslate('ES')
}

export const TranslationContext = createContext(initialState)
