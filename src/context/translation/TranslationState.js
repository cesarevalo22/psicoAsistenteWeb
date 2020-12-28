import React, { useEffect, useReducer, useState } from 'react'
import { SET_LANGUAGE, UPDATE_TRANSLATE } from '../../types/TranslationTypes';
import { TranslationContext, initialState } from './TranslationContext';
import TranslationReducer from './TranslationReducer';
import axios from 'axios';

const TranslationState = (props) => {
  const [state, dispatch] = useReducer(TranslationReducer, initialState)
  const [arrayTranslations, setArrayTranslations] = useState({});
  

  useEffect(() => {
    if(!localStorage.getItem('lng') || !localStorage.getItem('lng-data')) {
      axios.get(
        `${process.env.REACT_APP_GATEWAY_END_POINT}/language?lang=${state.langCode}`)
      .then((response) => {
        console.log(response)
        if(response.data.body.length > 0) {
          setArrayTranslations(response.data.body[0]);
          updateTranslate(response.data.body[0])
          localStorage.setItem('lng', state.langCode);
          localStorage.setItem('lng-data', JSON.stringify(response.data.body[0]))
        } else {
          setLanguage('es');
          localStorage.setItem('lng', 'es');
          updateTranslate(null)
          localStorage.setItem('lng-data', null);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    } else {
      setLanguage(localStorage.getItem('lng'))
      updateTranslate(localStorage.getItem('lng-data'))
    }
  }, [])

  const setLanguage = langCode => {
    dispatch({
      type: SET_LANGUAGE,
      payload: {
        code: langCode,
        array: arrayTranslations
      }
    })
  }

  const updateTranslate = arrayTranslate => {
    console.log(arrayTranslate)
    dispatch({
      type: UPDATE_TRANSLATE,
      payload: arrayTranslate
    })
  }

  return (
    <TranslationContext.Provider
      value={{
        langCode: state.langCode,
        translate: state.translate,
        setLanguage
      }}
    >
      { props.children }
    </TranslationContext.Provider>
  )
}

export default TranslationState
