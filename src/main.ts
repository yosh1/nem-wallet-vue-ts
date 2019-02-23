import Vue from 'vue';
import App from './App.vue';
// import router from './router';
// import store from './store';
// import './registerServiceWorker';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import Toast from 'vue2-toast';
import VueQriously from 'vue-qriously';

Vue.use(Vuetify, {
  theme: {
    original: colors.purple.base,
    theme: '#FFDEEA',
    background: '#FFF6EA',
    view: '#FFA07A',
    select: '#FF7F78',
    button: '#5FACEF',
  },
  options: {
    themeVariations: ['original', 'secondary'],
  },
});

Vue.use(Toast, {
  defaultType: 'bottom',
  duration: 3000,

});

Vue.use(VueQriously);

Vue.config.productionTip = false;

new Vue({
  // router,
  // store,
  render: (h) => h(App),
}).$mount('#app');
