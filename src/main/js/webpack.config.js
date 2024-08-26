const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const WarningsToErrorsPlugin = require('warnings-to-errors-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const { getNonce } = require('get-nonce');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');
const { v4: uuidv4 } = require('uuid');
const dotenv = require('dotenv');

__webpack_nonce__ = uuidv4();

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  const staticPath = path.resolve(__dirname, '../resources/static');
  const webpackDevServerPort = 8081;
  const serverPort = 8080;
  const wsTraccarserverPort = 8082;
  const keycloakServerPort = 8083;

  return {
    entry: './app.jsx',
    cache: true,
    output: {
      path: staticPath,
      filename: 'js/index_bundle.js',
      pathinfo: false,
    },
    devServer: {
      static: {
        directory: staticPath,
      },
      open: true,
      port: webpackDevServerPort,
      proxy: [
        {
          context: ['/api'],
          target: 'http://localhost:8080',
          secure: false,
        },
      ],
      historyApiFallback: true,
      compress: !!isProd,
      hot: true,
      watchFiles: ['src/main/js/**/*.js', 'src/main/js/**/*.jsx', 'src/main/js/styles/**/*.scss'],
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    devtool: isProd ? false : 'source-map',
    optimization: isProd
      ? {
          minimize: true,
          minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
        }
      : {},
    plugins: [
      isProd &&
        new MiniCssExtractPlugin({
          filename: 'css/[name].[hash].css',
          chunkFilename: 'css/[id].[hash].css',
        }),
      new WarningsToErrorsPlugin(),
      new Dotenv(),
      new NodePolyfillPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname) + '/index.ejs',
        filename: staticPath + '/index.html',
        title: 'IotWatch',
        inject: true,
      }),
      new CspHtmlWebpackPlugin({
        'script-src': "'self'",
        'style-src': "'unsafe-inline'",
        'connect-src': [
          "'self'",
          `ws://localhost:${webpackDevServerPort}`,
          `ws://localhost:${serverPort}`,
          `ws://localhost:${wsTraccarserverPort}`,
          `http://localhost:${serverPort}`,
          `http://localhost:${wsTraccarserverPort}`,
          `http://localhost:${keycloakServerPort}`,
          'https://api.maptiler.com/',
        ],
        'worker-src': ["'self'", 'blob:'],
      }),
    ].filter(Boolean),
    resolve: {
      modules: [path.resolve(__dirname, './'), 'node_modules'],
    },
    module: {
      rules: [
        // loads .js/jsx files
        {
          test: /\.jsx?$/,
          include: [path.resolve(__dirname, './')],
          exclude: /locales\//,
          loader: 'babel-loader',
          resolve: {
            extensions: ['.js', '.jsx', '.json'],
          },
        },
        // loads .css files
        {
          test: /\.css$/,
          include: [
            path.resolve(__dirname, './styles'),
            path.resolve(__dirname, './node_modules/'),
          ],
          use: [
            {
              loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader',
              options: {
                attributes: {
                  nonce: getNonce(),
                },
              },
            },
            'css-loader',
          ],
          resolve: {
            extensions: ['.css'],
          },
        },
        {
          test: /\.scss$/,
          exclude: /\.module\.scss$/,
          use: [
            {
              loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader',
              options: {
                attributes: {
                  nonce: getNonce(),
                },
              },
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [require('autoprefixer')],
                },
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true },
            },
          ],
        },
        {
          test: /\.module\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        // loads common image formats
        {
          test: /\.(eot|woff|woff2|ttf|png|jpg|gif|stl)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]',
          },
        },
        // loads svgr
        {
          test: /\.svg$/i,
          use: ['@svgr/webpack'],
        },
        {
          test: /locales\/.*\.json$/,
          type: 'asset/resource',
          generator: {
            filename: 'locales/[name][ext]',
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
      ],
    },
  };
};
