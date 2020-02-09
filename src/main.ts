/* eslint-disable class-methods-use-this */
import Vue from 'vue';
import Buefy from 'buefy';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';
import 'buefy/dist/buefy.css';
import './scss/main.scss';
import i18n from './i18n/i18n';
import buildDependencyContainer from './App.container';

Vue.config.productionTip = false;

class Main {
  constructor() {
    this.loadDependencyContainer();
    this.loadVueApp();
  }

  private loadDependencyContainer(): void {
    buildDependencyContainer();
  }

  private loadVueApp(): void {
    Vue.use(Buefy);
    Vue.use(Vuelidate);
    Vue.config.productionTip = false;
    new Vue({
      router,
      store,
      render: h => h(App),
      i18n,
    }).$mount('#app');
  }
}

// eslint-disable-next-line no-new
new Main();
