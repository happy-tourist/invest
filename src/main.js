import 'core-js/stable'; // Полностью включает все полифиллы
import 'regenerator-runtime/runtime'; // Полифилл для async/await

import Vue from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/main.css';

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
