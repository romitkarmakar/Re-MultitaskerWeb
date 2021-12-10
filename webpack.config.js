const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: [ "style-loader", "css-loader" ],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [ 'file-loader' ],
            },
            {
                test: /\.svg$/,
                use: [ '@svgr/webpack' ],
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin( {
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        } ),
    ],

}