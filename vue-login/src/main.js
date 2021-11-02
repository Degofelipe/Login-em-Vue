import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from './plugins/vuetify';



Vue.use(vuetify);

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

import axios from "axios";
import { Model } from "vue-api-query";
Model.$http = axios;

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App)
}).$mount("#app");
