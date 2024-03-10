const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WarningsToErrorsPlugin = require("warnings-to-errors-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const { getNonce } = require("get-nonce");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");
const { v4: uuidv4 } = require("uuid");
const dotenv = require("dotenv");

__webpack_nonce__ = "ABCD1234";

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";
  const staticPath = path.resolve(__dirname, "../../../build/resources/main/");
  const webpackDevServerPort = 8081;

  return {
    entry: "./app.jsx",
    cache: false,
    output: {
      path: staticPath, // Where all the output files get dropped after webpack is done with them
      filename: "js/index_bundle.js", // The name of the webpack bundle that's generated
      pathinfo: false,
    },
    devServer: {
      port: webpackDevServerPort,
      compress: true,
      hot: true,
      watchFiles: [
        "src/main/js/**/*.js",
        "src/main/js/**/*.jsx",
        "src/main/js/styles/**/*.scss",
      ],
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      // proxy: {
      //   "/**": {
      //     target: "http://localhost:8080",
      //     secure: false,
      //   },
      // },
      devMiddleware: {
        index: true,
        mimeTypes: { phtml: "text/html" },
        publicPath: staticPath,
        serverSideRender: true,
        writeToDisk: true,
      },
    },
    devtool: isProd ? false : "source-map",
    optimization: isProd
      ? {
          minimize: true,
          minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
        }
      : {
          removeAvailableModules: false,
          removeEmptyChunks: false,
          splitChunks: false,
        },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "css/[name].[hash].css",
        chunkFilename: "css/[id].[hash].css",
      }),
      new WarningsToErrorsPlugin(),
      new Dotenv(),
      new NodePolyfillPlugin(),
      new HtmlWebpackPlugin({
        template:
          path.resolve(__dirname, "../resources/templates") + "/index.ejs",
        filename: staticPath + "/templates/index.html",
        title: "IotWatch",
      }),
      new CspHtmlWebpackPlugin({
        "script-src": "'self'",
        "style-src": "'unsafe-inline'",
        "connect-src": ["'self'", `ws://localhost:${webpackDevServerPort}`],
        "worker-src": ["'self'", "blob:"],
      }),
    ],
    resolve: {
      modules: [path.resolve(__dirname, "./"), "node_modules"],
    },
    module: {
      rules: [
        // {
        //   // loads .html files
        //   test: /\.(html)$/,
        //   include: [path.resolve(__dirname, "../resources/templates")],
        //   use: {
        //     loader: "html-loader",
        //     options: {
        //       sources: {
        //         list: [
        //           {
        //             tag: "img",
        //             attribute: "data-src",
        //             type: "src",
        //           },
        //         ],
        //       },
        //     },
        //   },
        // },
        // loads .js/jsx files
        {
          test: /\.jsx?$/,
          include: [path.resolve(__dirname, "./")],
          loader: "babel-loader",
          resolve: {
            extensions: [".js", ".jsx", ".json"],
          },
        },
        // loads .css files
        {
          test: /\.css$/,
          include: [
            path.resolve(__dirname, "./styles"),
            path.resolve(__dirname, "./node_modules/"),
          ],
          use: [
            {
              loader: isProd ? MiniCssExtractPlugin.loader : "style-loader",
              options: {
                attributes: {
                  nonce: getNonce(),
                },
              },
            },
            "css-loader",
          ],
          resolve: {
            extensions: [".css"],
          },
        },
        {
          test: /\.scss$/,
          exclude: /\.module\.scss$/,
          use: [
            {
              loader: isProd ? MiniCssExtractPlugin.loader : "style-loader",
              options: {
                attributes: {
                  nonce: getNonce(),
                },
              },
            },
            ,
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                sourceMap: true,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [require("autoprefixer")],
                },
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: { sourceMap: true },
            },
          ],
        },
        {
          test: /\.module\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },

        // loads common image formats
        {
          test: /\.(eot|woff|woff2|ttf|png|jpg|gif|stl)$/i,
          type: "asset/inline",
        },

        // loads stl as resource
        // {
        //   test: /\.stl$/i,
        //   type: "asset/resource",
        // },

        // loads svgr
        {
          test: /\.svg$/i,
          use: ["@svgr/webpack"],
        },
      ],
    },
  };
};
