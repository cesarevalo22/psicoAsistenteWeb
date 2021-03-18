import {SET_LANGUAGE, UPDATE_TRANSLATE} from '../../types/TranslationTypes';
import { getTranslate, initialState } from './TranslationContext';

export default (state, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        langCode: action.payload,
      }
    case UPDATE_TRANSLATE:
      return {
        ...state,
        translate: getTranslate(state.langCode, action.payload),
      }
    default:
      return {...initialState};
  }
}