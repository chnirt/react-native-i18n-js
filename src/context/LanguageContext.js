import React, {createContext, useState, useContext} from 'react';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import en from '../../src/translations/en.json';
import vi from '../../src/translations/vi.json';
import {Platform, NativeModules} from 'react-native';

const locale =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

i18n.defaultLocale = locale.substring(0, 2);
i18n.fallbacks = true;
i18n.translations = {en, vi};
i18n.locale = RNLocalize.locale;

const {t} = i18n;

const LanguageContext = createContext();

export function LanguageProvider({children}) {
  const [language, setLanguage] = useState(locale.substring(0, 2));

  function switchLanguage(nextLocale) {
    i18n.locale = nextLocale;
    setLanguage(nextLocale);
  }

  return (
    <LanguageContext.Provider value={{t, language, switchLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useTranslation = () => useContext(LanguageContext);
