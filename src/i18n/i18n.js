import Vue from "vue";
import VueI18n from "vue-i18n";
import { LANGUAGES } from "Constants/languages";
Vue.use(VueI18n);
function loadLocaleMessages() {
    const locales = require.context("./", true, /[A-Za-z0-9-_,\s]+\.json$/i);
    const messages = {};
    LANGUAGES.forEach(function (value) {
        messages[value.code] = {};
    });
    locales.keys().forEach((key) => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale.substring(0, 2)] = Object.assign(messages[locale.substring(0, 2)], locales(key));
        }
    });
    return messages;
}
export default new VueI18n({
    locale: "fr",
    fallbackLocale: "fr",
    messages: loadLocaleMessages()
});
//# sourceMappingURL=i18n.js.map