/**
 * Sistema de internacionalización simple
 */
function createI18n(translations, defaultLocale = 'en') {
  return {
    t(key, locale = defaultLocale) {
      const localeTranslations = translations[locale] || translations[defaultLocale];
      return localeTranslations?.[key] || key;
    },
    
    setLocale(locale) {
      if (translations[locale]) {
        defaultLocale = locale;
      }
    }
  };
}

module.exports = { createI18n };

