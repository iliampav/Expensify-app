const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        mode: 'development',
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env', '@babel/preset-react'],
                      plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                  },                
            },{
                test:/\.s?css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        publicPath: (resourcePath, context) => {
                          return (
                            path.relative(path.dirname(resourcePath), context) + '/'
                          );
                        },
                      },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            }]
        },
        plugins:[
            new MiniCssExtractPlugin({
              filename: 'style.css',
            }),
          ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};