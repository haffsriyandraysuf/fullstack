require('./bootstrap');
import Vue from 'vue';
import App from './App.vue';
import router from './plugins/Router';
import vuetify from './plugins/Vuetify';
import {
  ValidationObserver,
  ValidationProvider
} from 'vee-validate/dist/vee-validate.full.esm';

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
