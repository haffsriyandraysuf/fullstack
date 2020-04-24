require('./bootstrap');
import Vue from 'vue';
import App from './App.vue';
import router from './plugins/Router';
import vuetify from './plugins/Vuetify';
import store from './store';
require('./store/subscriber')
import {
  ValidationObserver,
  ValidationProvider
} from 'vee-validate/dist/vee-validate.full.esm';

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})
