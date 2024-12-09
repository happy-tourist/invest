const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Плагин для работы с HTML

module.exports = {
    entry: './src/index.js', // Входной файл
    output: {
        path: path.resolve(__dirname, 'dist'), // Путь для сборки
        filename: 'bundle.js', // Имя выходного файла
        publicPath: './' // Базовый путь для GitHub Pages (очень важно для вложенных репозиториев)
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Обрабатываем все .js файлы
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'), // Указываем статику
        port: 3000, // Порт для dev-сервера
        open: true // Открываем браузер автоматически
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Копируем index.html
            filename: 'index.html' // Имя для выходного файла
        })
    ]
};
