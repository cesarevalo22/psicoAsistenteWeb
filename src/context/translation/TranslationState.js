import React, { useEffect, useReducer, useState } from 'react'
import { SET_LANGUAGE, UPDATE_TRANSLATE } from '../../types/TranslationTypes';
import { TranslationContext, initialState } from './TranslationContext';
import TranslationReducer from './TranslationReducer';
import axios from 'axios';
import WarningMessage from '../../components/commons/warningMessage/warningMessage';
import { TRANSLATION_ERROR_MESSAGES } from '../../components/commons/warningMessage/messages';
import { CircularProgress } from '@material-ui/core';
import { userIsLogged } from '../../helpers/AmplifyHelpers';

const TranslationState = (props) => {
  const [state, dispatch] = useReducer(TranslationReducer, initialState)
  const [openWarningMessage, setOpenWarningMessage] = useState(false);
  const [onError, setOnError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    setLoading(true);
    let lng = localStorage.getItem('lng');
    let lngDataPrivate = localStorage.getItem('lng-datap');

    userIsLogged()
    .then(response => {
      if(response) {
        if(response.isValid) {
          let translateObject = JSON.parse(lngDataPrivate)
          if(!translateObject || !lng) {
            fetchPrivateTranslate(response.idToken.payload['custom:adroleid']);
          } else {
            if(translateObject[lng]) {
              setLanguage(lng)
              updateTranslate(translateObject);
              setOnError(false);
              setLoading(false);
            } else {
              executeError();
              setLoading(false);
            }
          }
        } else {
          translatePublic()
        }
      }
    })
    .catch(error => {
      localStorage.removeItem('lng-datap')
      translatePublic();
    })
  }, [userLogged])

  const translatePublic = () => {
    let lng = localStorage.getItem('lng');
    let lngData = localStorage.getItem('lng-data');
    let lngExpiry = localStorage.getItem('lng-expiry');

    if(lngExpiry) {
      const now = new Date();
      if(now.getTime() > lngExpiry) {
        localStorage.removeItem('lng');
        localStorage.removeItem('lng-data');
        localStorage.removeItem('lng-expiry');
        lng = null;
        lngData = null;
        lngExpiry = null;
      }
    }

    if(!lng || !lngData) {
      fetchTranslate();
    } else {
      let translateObject = JSON.parse(lngData);

      if(translateObject[lng]) {
        setLanguage(lng)
        updateTranslate(translateObject);
        setOnError(false);
        setLoading(false);
      } else {
        executeError()
        setLoading(false);
      }
    }
  }

  const executeError = () => {
    localStorage.removeItem('lng');
    localStorage.removeItem('lng-data');
    localStorage.removeItem('lng-expiry');
    setOnError(true);
    setOpenWarningMessage(true);
  }

  const fetchTranslate = async () => {
    axios.get(
      `${process.env.REACT_APP_GATEWAY_END_POINT}/adwindow/details/public`)
    .then((response) => {
      if(response.data.details > 0) {
        const now = new Date();
        updateTranslate(response.data.body)
        localStorage.setItem('lng', state.langCode);
        localStorage.setItem('lng-data', JSON.stringify(response.data.body))
        localStorage.setItem('lng-expiry', now.setHours(now.getHours() + 2))
        setOnError(false);
        setLoading(false);
      } else {
        executeError()
        setLoading(false);
      }
    })
    .catch((error) => {
      console.error(error);
      executeError()
      setLoading(false);
    });
  }

  const fetchPrivateTranslate = async (adroleid) => {
    axios.get(
      `${process.env.REACT_APP_GATEWAY_END_POINT}/adwindow/details/private?adroleid=${adroleid}`)
    .then((response) => {
      if(response.data.details > 0) {
        updateTranslate(response.data.body)
        localStorage.setItem('lng', state.langCode);
        localStorage.setItem('lng-datap', JSON.stringify(response.data.body))
        setOnError(false);
        setLoading(false);
      } else {
        executeError()
        setLoading(false);
      }
    })
    .catch((error) => {
      console.error(error);
      executeError()
      setLoading(false);
    });
  }

  const setLanguage = (langCode) => {
    dispatch({
      type: SET_LANGUAGE,
      payload: langCode,
    })
  }

  const updateTranslate = arrayTranslate => {
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
        updateTranslate,
        setUserLogged
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
