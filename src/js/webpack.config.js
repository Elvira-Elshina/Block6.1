module.exports = {
    entry: "./js/index.js",
    module: {
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: 'sass-loader' }
        ]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin()
      ]
}