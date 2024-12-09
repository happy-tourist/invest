import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 1. Ловим синхронные ошибки
window.onerror = function (message, source, lineno, colno, error) {
    alert(`Ошибка: ${message}\nФайл: ${source}\nСтрока: ${lineno}, Столбец: ${colno}\n${error}`);
    return false;
};

// 2. Ловим ошибки в промисах
window.addEventListener('unhandledrejection', function (event) {
    alert(`Необработанная ошибка в промисе: ${event.reason}`);
});

// 3. Переопределяем console.error
const originalConsoleError = console.error;
console.error = function (...args) {
    alert(`Ошибка: ${args.join(' ')}`);
    originalConsoleError.apply(console, args);
};

createApp(App).mount('#app')
