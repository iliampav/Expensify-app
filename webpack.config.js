const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if(process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' })
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' })
}

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        mode: 'development',
        entry: ['babel-polyfill', './src/app.js'],
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
                        publicPath: './public/images'
                      }
                    },
                    'css-loader',
                    'sass-loader'                  
                ]
            }, {
              test: /\.jpg$/i,
              use: [
                {
                  loader: 'css-loader',
                  options: {
                      url: true
                  }
                },
                'scss-loader'
              ],
            }     
          ]
        },
        plugins:[
            new MiniCssExtractPlugin({
              filename: 'style.css',              
            }),
            new webpack.DefinePlugin({
              'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
              'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
              'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
              'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
              'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
              'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
              'process.env.FIREBASE_APPID': JSON.stringify(process.env.FIREBASE_APPID),
              'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID)
            })
          ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};