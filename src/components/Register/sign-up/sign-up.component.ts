import Component from 'vue-class-component';
import Vue from 'vue';
import { Validations, Validate } from 'vuelidate-property-decorators';
import {
  required, email, minLength, maxLength,
} from 'vuelidate/lib/validators';
import { User } from 'Models/domains/user';
import { regExPseudo } from 'Constants/regex';
import SocialConnect from 'Components/Register/social-connect/social-connect.vue';
import { Regexchecker } from 'Utils/regex';
import Divider from 'Components/Shared/Divider/divider.vue';
import Input from 'Components/Shared/Input/input.vue';

@Component({
  components: { SocialConnect, Divider },
})
export default class SignUpComponent extends Vue {
  private user: User | undefined;
  private isLoading:boolean = false;

  beforeMount() {
    this.user = new User();
  }

  @Validations()
  Validations = {
    user: {
      pseudo: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20),
        strongPseudo(pseudo: string) {
          return (
            Regexchecker(regExPseudo.exec(pseudo), pseudo)
          );
        },
      },
      email: { required, email },
      password: { required, minLength: minLength(4), maxLength: maxLength(30) },
      verifyPassword: { required, minLength: minLength(4), checkPassword: this.checkPassword },
    },
  }


  get checkPassword(): boolean {
    if (this.user) {
      console.log(this.user.password);
      return this.user.password === this.user.verifyPassword;
    }
    return false;
  }

  submit() {
    this.isLoading = true;
  }
}
