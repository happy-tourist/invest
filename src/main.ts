import 'core-js/stable'; // Полностью включает все полифиллы
import 'regenerator-runtime/runtime'; // Полифилл для async/await

import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

createApp(App).mount('#app');
