const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WarningsToErrorsPlugin = require("warnings-to-errors-webpack-plugin");

module.exports = (env, argv) => ({
  entry: "./app.jsx",
  cache: false,
  output: {
    path: path.resolve(__dirname, "../../../build/resources/main/static/"), // Where all the output files get dropped after webpack is done with them
    filename: "js/bundle.js", // The name of the webpack bundle that's generated
  },
  devServer: {
    port: 9091,
    open: true,
    compress: true,
    hot: true,
    watchFiles: [
      "src/main/resources/templates/**/*.html",
      "src/main/js/**/*.js",
      "src/main/js/styles/**/*.scss",
    ],
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    proxy: {
      "**": {
        target: "http://localhost:9090",
        secure: false,
        prependPath: false,
        headers: {
          "X-Devserver": "1",
        },
      },
    },
  },
  devtool: argv.mode === "production" ? false : "inline-source-map",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/bundle.css",
    }),
    new WarningsToErrorsPlugin(),
  ],
  resolve: {
    modules: [path.resolve(__dirname, "./"), "node_modules"],
  },
  module: {
    rules: [
      {
        // loads .html files
        test: /\.(html)$/,
        include: [path.resolve(__dirname, "../resources/templates")],
        use: {
          loader: "html-loader",
          options: {
            sources: {
              list: [
                {
                  tag: "img",
                  attribute: "data-src",
                  type: "src",
                },
              ],
            },
          },
        },
      },
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
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        resolve: {
          extensions: [".css"],
        },
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          argv.mode === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
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
});
