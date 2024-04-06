const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    performance: {
        maxAssetSize: 512000,
        maxEntrypointSize: 512000,
    },
});
