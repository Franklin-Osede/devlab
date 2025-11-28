/**
 * i18n básico - TypeScript
 */
type Locale = string;
type Translations = Record<Locale, Record<string, string>>;

interface I18n {
  t(key: string, locale?: Locale): string;
  setLocale(locale: Locale): void;
}

function createI18n(translations: Translations, defaultLocale: Locale = 'en'): I18n {
  let currentLocale = defaultLocale;
  
  return {
    t(key: string, locale: Locale = currentLocale): string {
      const localeTranslations = translations[locale] || translations[defaultLocale];
      return localeTranslations?.[key] || key;
    },
    
    setLocale(locale: Locale): void {
      if (translations[locale]) {
        currentLocale = locale;
      }
    }
  };
}

export { createI18n, I18n, Translations, Locale };

