const path = require('path');
const terser = require('terser-webpack-plugin');

module.exports = {
    entry: './src/App.jsx',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/react'
                            ]
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [
            '.js', '.jsx'
        ],
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@utils": path.resolve(__dirname, "src/utils"),
        }
    },
    target: 'web',
    optimization: {
        minimizer: [new terser({
            extractComments: false,
        })],
    },
};
