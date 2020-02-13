/* eslint-disable class-methods-use-this */
import Vue from 'vue';
import Buefy from 'buefy';
import Vuelidate from 'vuelidate';
import { Icon } from 'leaflet';
import App from './App.vue';
import router from './router';
import store from './store';
import 'buefy/dist/buefy.css';
import './scss/main.scss';
import i18n from './i18n/i18n';
import buildDependencyContainer from './App.container';
import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false;

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

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
