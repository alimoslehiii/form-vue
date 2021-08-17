import Vue from "vue";
import App from "./App.vue";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from "./router";
import store from "./store";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons";
import vuetify from "./plugins/vuetify";
import VeeValidate from 'vee-validate';
import Vuelidate from 'vuelidate'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  vuetify,
  Vuetify,
  VeeValidate,
  Vuelidate,
  render: (h) => h(App),
}).$mount("#app");
