const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                query: {
                    configFileName: './tsconfig.json'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader'
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]     
    },
    output: {
        filename: 'main.js?$modena=bachata-science',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
        })
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.scss'],
    },
    // TODO To be applied only on development mode
    devServer: {
      historyApiFallback: true
    }
};