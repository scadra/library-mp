import Component from 'vue-class-component';
import Vue from 'vue';
import LANGUAGES from 'Constants/languages';
import LanguageModel from 'Models/language';

@Component
export default class NavbarComponent extends Vue {
  private languages: Array<LanguageModel> = LANGUAGES;

  private currentLanguage!: LanguageModel;

  beforeMount() {
    this.setLocale(this.$i18n.locale);
  }

  setLocale(locale: string) {
    this.$i18n.locale = locale;
    this.currentLanguage = this.languages.find(item => item.code === locale) as LanguageModel;
  }
}
