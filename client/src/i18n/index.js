import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTransaltion from './en';
import esTranslation from './es';
import ptTranslation from './pt';

const resources = {
  // English
  en: enTransaltion,
  // Spanish
  es: esTranslation,
  // Portuguese
  pt: ptTranslation,
};

i18n.use(initReactI18next).init({
  resources,
  // Actual language
  lng: 'es',
  // Default language
  fallbackLng: 'en',
});

export default i18n;
