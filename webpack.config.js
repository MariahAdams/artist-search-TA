/* eslint-env node */
const { resolve } = require('path');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const buildDir = 'build';
const path = resolve(__dirname, buildDir);

module.exports = {
  entry: './src/index.js',
  output: {
    path, 
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    publicPath: '/',
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new CleanPlugin(`${path}/bundle.*.js`),
    new HtmlPlugin({ template: './src/index.html' }),
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
            cacheDirectory: true
          }
        }
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')(),
                require('postcss-nested')(),
                require('postcss-import')(),
                require('precss')(),
              ]
            }
          }
        ]
      },

      {
        test: /\.(jpg|png|svg|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 1000 }
        }
      }

    ]
  }
};