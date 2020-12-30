import React, { useEffect, useReducer, useState } from 'react'
import { SET_LANGUAGE, UPDATE_TRANSLATE } from '../../types/TranslationTypes';
import { TranslationContext, initialState } from './TranslationContext';
import TranslationReducer from './TranslationReducer';
import axios from 'axios';
import WarningMessage from '../../components/commons/warningMessage/warningMessage';
import { TRANSLATION_ERROR_MESSAGES } from '../../components/commons/warningMessage/messages';
import { CircularProgress } from '@material-ui/core';

const TranslationState = (props) => {
  const [state, dispatch] = useReducer(TranslationReducer, initialState)
  const [openWarningMessage, setOpenWarningMessage] = useState(false);
  const [onError, setOnError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if(!localStorage.getItem('lng') && !localStorage.getItem('lng-data')) {
      fetchTranslate();
    } else {
      let translateObject = JSON.parse(localStorage.getItem('lng-data'));
      if(translateObject[localStorage.getItem('lng')]) {
        setOnError(false);
        setLoading(false);
        setLanguage(localStorage.getItem('lng'))
        updateTranslate(JSON.parse(localStorage.getItem('lng-data')))
      } else {
        setOnError(true);
        setOpenWarningMessage(true);
        setLoading(false);
        setLanguage('es');
        localStorage.removeItem('lng');
        updateTranslate(null)
        localStorage.removeItem('lng-data');
      }
    }
  }, [])

  const fetchTranslate = async () => {
    axios.get(
      `${process.env.REACT_APP_GATEWAY_END_POINT}/adwindow/details/public`)
    .then((response) => {
      console.log(response)
      if(response.data.details > 0) {
        setOnError(false);
        setLoading(false);
        updateTranslate(response.data.body)
        localStorage.setItem('lng', state.langCode);
        localStorage.setItem('lng-data', JSON.stringify(response.data.body))
      } else {
        setOnError(true);
        setOpenWarningMessage(true);
        setLoading(false);
        setLanguage('es');
        localStorage.removeItem('lng');
        updateTranslate(null)
        localStorage.removeItem('lng-data');
      }
    })
    .catch((error) => {
      console.error(error);
      setOnError(true);
      setOpenWarningMessage(true);
      setLoading(false);
      setLanguage('es');
      localStorage.removeItem('lng');
      updateTranslate(null)
      localStorage.removeItem('lng-data');
    });
  }

  const setLanguage = (langCode) => {
    console.log(langCode);
    dispatch({
      type: SET_LANGUAGE,
      payload: langCode,
    })
  }

  const updateTranslate = arrayTranslate => {
    console.log(arrayTranslate);
    dispatch({
      type: UPDATE_TRANSLATE,
      payload: arrayTranslate
    })
  }

  const handleWarningMessage = () => {
    setOpenWarningMessage(!openWarningMessage);
    window.location.reload();
  };

  return (
    <TranslationContext.Provider
      value={{
        langCode: state.langCode,
        translate: state.translate,
        setLanguage,
        updateTranslate
      }}
    >

      {loading && (
        <div>
          <CircularProgress size={68}/>
        </div>
      )}

      {!loading && (
        <>
        { onError && (
        <WarningMessage
            open={openWarningMessage}
            onClose={handleWarningMessage}
            message1={TRANSLATION_ERROR_MESSAGES.title}
            message2={TRANSLATION_ERROR_MESSAGES.message}
          />
        )}
        { !onError && (
          <>
            {props.children}
          </>
        )}
        </>
      )}
    </TranslationContext.Provider>
  )
}

export default TranslationState
