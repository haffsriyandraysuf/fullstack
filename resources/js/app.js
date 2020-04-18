require('./bootstrap');
import Vue from 'vue';
import App from './App.vue';
import router from './Router';
import vuetify from './vuetify';

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
