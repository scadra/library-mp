import Component from 'vue-class-component';
import Vue from 'vue';
import { Validations, Validate } from 'vuelidate-property-decorators';
import { required, email } from 'vuelidate/lib/validators';
import { User } from 'Models/user';

@Component
export default class SignUpComponent extends Vue {
    private user: User;

    @Validations()
    Validations = {
      user: {
        email: { required, email },
        password: { required },
      },
    }

    constructor() {
      super();
      this.user = new User();
      console.log(this.user);
    }
}
