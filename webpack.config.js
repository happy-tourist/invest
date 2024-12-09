const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Плагин для работы с HTML

module.exports = {
    entry: './src/index.js', // Входной файл
    output: {
        path: path.resolve(__dirname, 'dist'), // Сборка в папку dist
        filename: 'bundle.js' // Имя файла сборки
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
        static: path.resolve(__dirname, 'dist'), // Указываем статику в dist
        port: 3001, // Порт для dev-сервера
        open: true // Открывать браузер автоматически
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Указываем откуда копировать index.html
            filename: 'index.html' // Имя для выходного файла
        })
    ]
};
