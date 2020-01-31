import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from 'Components/Home/home.vue';
import NotFoundComponent from 'Components/NotFound/not-found.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: HomeComponent,
  },
  {
    path: '*',
    component: NotFoundComponent,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
