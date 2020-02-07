import Component from 'vue-class-component';
import Vue from 'vue';
import { Validations, Validate } from 'vuelidate-property-decorators';
import {
  required, email, minLength, maxLength,
} from 'vuelidate/lib/validators';
import { User } from 'Models/user';
import { regExPseudo } from 'Constants/regex';
import SocialConnect from 'Components/Register/social-connect/social-connect.vue';

@Component({
  components: { SocialConnect },
})
export default class SignUpComponent extends Vue {
  private user: User;

  @Validations()
  Validations = {
    user: {
      pseudo: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(20),
        strongPseudo(pseudo: string) {
          return (
            regExPseudo.test(pseudo)
          );
        },
      },
      email: { required, email },
      password: { required, minLength: minLength(4), maxLength: maxLength(30) },
    },
  }

  constructor() {
    super();
    this.user = new User();
  }

  get checkPassword(): boolean {
    return this.user.password === this.user.verifyPassword;
  }
}
