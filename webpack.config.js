const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    //const CSSExtract = new ExtractTextPlugin('styles.css');
    // const MiniCssExtract = new MiniCssExtractPlugin();

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        // plugins: [
        //     new MiniCssExtractPlugin()
        // ],
        module : {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
                // {
                //     test: /\.s?css$/,
                //     use: [
                //         {
                //           loader: MiniCssExtractPlugin.loader,
                //           options: {
                //             publicPath: (resourcePath, context) => {
                //               return path.relative(path.dirname(resourcePath), context) + '/';
                //             },
                //           },
                //         },
                //         'css-loader'
                //     ],
                // }
            ]
        },
        devtool : isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
};