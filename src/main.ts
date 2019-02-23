import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import Toast from 'vue2-toast';
import VueQriously from 'vue-qriously';

Vue.use(Vuetify, {
  theme: {
    original
  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
