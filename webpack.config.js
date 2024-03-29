const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');


const isDev = process.env.NODE_ENV === "development";


module.exports = {
  //context: path.resolve(__dirname, "src"),
  mode: isDev ? "development" : "production",
  devtool: isDev ? "source-map" : false,
  target: isDev ? "web" : "browserslist",
  stats: {
    children: true,
  },
  entry: {
    app: ["./src/index.js"],
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  optimization: {
    minimize: !isDev,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/favicon.ico"),
          to: path.resolve(__dirname, "dist/assets/")
        }
      ]
    }),
    new ESLintPlugin({
      files: 'src/**/*.m?js',
    }),

    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: "**/*",
    //       // context: path.resolve(dirname, "./src"),
    //       globOptions: {
    //         ignore: [
    //           "**/*.js",
    //           "**/*.ts",
    //           "**/*.scss",
    //           "**/*.sass",
    //           "**/*.html",
    //         ],
    //       },
    //       noErrorOnMissing: true,
    //       //force: true,
    //       //to: path.resolve(__dirname, "dist"),
    //     },
    //   ],
    // }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].bundle.css",
    }),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      // {
      //   test: /\.(png|jpg|svg|gif|webp)$/,
      //   use: ["file-loader"],
      // },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }}],
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript",
            ]
          }
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    open: true,
    port: 8000,
    hot: true,
    static: {
      directory: path.join(__dirname, 'src'),
      watch: true,
    },
  },
};
