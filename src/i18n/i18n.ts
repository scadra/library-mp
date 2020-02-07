import Vue from 'vue';
import VueI18n, { LocaleMessages } from 'vue-i18n';
import languages from 'Constants/languages';
import LanguageModel from 'Models/interfaces/language';

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context('./', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages: LocaleMessages = {};
  languages.forEach((value: LanguageModel) => {
    messages[value.code] = {};
  });
  locales.keys().forEach((key: String) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale.substring(0, 2)] = Object.assign(
        messages[locale.substring(0, 2)],
        locales(key as string),
      );
    }
  });
  return messages;
}

export default new VueI18n({
  locale: 'fr',
  fallbackLocale: 'fr',
  messages: loadLocaleMessages(),
});
