const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',  // Устанавливаем режим разработки
  entry: './src/main.js',  // Входная точка
  output: {
    path: path.resolve(__dirname, 'dist'),  // Папка, куда будут собраны файлы
    filename: 'bundle.js',  // Имя итогового файла
    publicPath: './',  // Корневой путь для статичных файлов
  },
  resolve: {
    alias: {
      vue: '@vue/runtime-dom',  // Прокси для Vue 3
    },
    extensions: ['.js', '.vue'],  // Расширения для импортируемых файлов
  },
  devServer: {
    static: path.join(__dirname, 'dist'),  // Папка для статики
    port: 8080,  // Порт сервера
    historyApiFallback: true,  // Нужно для корректной работы SPA
  },
  module: {
    rules: [
      {
        test: /\.vue$/,  // Обработка .vue файлов
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,  // Обработка .js файлов
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Используем Babel для транспиляции JS
        },
      },
      {
        test: /\.css$/,  // Обработка .css файлов
        use: ['vue-style-loader', 'css-loader'],  // Для CSS в Vue компонентах
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),  // Плагин для обработки Vue файлов
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Шаблон для HTML страницы
    }),
    new CleanWebpackPlugin(),  // Очищает старые файлы в папке dist перед новой сборкой
  ],
};
