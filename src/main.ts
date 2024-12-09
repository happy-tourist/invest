import 'core-js/stable'; // Полностью включает все полифиллы
import 'regenerator-runtime/runtime'; // Полифилл для async/await

import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// Отображение ошибок на экране
window.onerror = function(message, source, lineno, colno, error) {
    alert(`Ошибка: ${message}\nФайл: ${source}\nСтрока: ${lineno}:${colno}`);
};

// Поддержка globalThis на iOS 9
if (!window.globalThis) {
    window.globalThis = window;
}

createApp(App).mount('#app');
