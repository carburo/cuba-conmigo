/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import itLocaleData from 'react-intl/locale-data/it';
import esLocaleData from 'react-intl/locale-data/es';

import { DEFAULT_LOCALE } from '../app/containers/App/constants';

import enTranslationMessages from './translations/en.json';
import itTranslationMessages from './translations/it.json';
import esTranslationMessages from './translations/es.json';

addLocaleData(enLocaleData);
addLocaleData(itLocaleData);
addLocaleData(esLocaleData);

export const appLocales = [
  'it',
  'en',
  'es',
];

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  it: formatTranslationMessages('it', itTranslationMessages),
  es: formatTranslationMessages('es', esTranslationMessages),
};
