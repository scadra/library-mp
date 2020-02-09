import Component from 'vue-class-component';
import Vue from 'vue';
import { Inject } from 'inversify-props';
import 'reflect-metadata';
import IModal from 'Interfaces/IModal';
import LANGUAGES from 'Constants/languages';
import { LanguageModel } from 'Models/interfaces/language';
import Login from 'Components/Register/Login/login.vue';
import SignUp from 'Components/Register/Sign-up/sign-up.vue';

@Component({
  components: { Login, SignUp },
})
export default class NavbarComponent extends Vue {
  private languages: Array<LanguageModel> = LANGUAGES;

  private currentLanguage!: LanguageModel;

  @Inject()
  private modalService!: IModal

  beforeMount() {
    this.setLocale(this.$i18n.locale);
  }

  setLocale(locale: string) {
    this.$i18n.locale = locale;
    this.currentLanguage = this.languages.find(item => item.code === locale) as LanguageModel;
  }

  signup() {
    this.modalService.openModal(this, SignUp);
  }

  login() {
    this.modalService.openModal(this, Login);
  }
}
