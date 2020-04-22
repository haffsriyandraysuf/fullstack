require('./bootstrap');
import Vue from 'vue';
import App from './App.vue';
import router from './plugins/Router';
import vuetify from './plugins/Vuetify';

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
