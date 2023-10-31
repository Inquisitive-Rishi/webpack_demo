const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|ttf|otf|eot)$/i,
            type: 'asset/resource',
        },
        ],
    },
}