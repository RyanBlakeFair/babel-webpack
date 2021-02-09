const path = require("path");
const HWP = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = (env, argv) => {
  return {
    devServer: {
      open: true,
      clientLogLevel: "silent",
      contentBase: "./dist",
      historyApiFallback: true,
      hot: true,
    },
    entry: path.join(__dirname, "/src/index.js"),
    output: {
      filename: "build.js",
      path: path.join(__dirname, "/dist"),
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, "src"),
          exclude: /node_modules/,
          use: [
            "style-loader",
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: argv.mode === "development",
              },
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
              },
            },
            "postcss-loader",
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].bundle.css",
        chunkFilename: "[id].css",
      }),
      new HotModuleReplacementPlugin(),
      new HWP({
        template: "./src/index.html",
        filename: "./index.html",
      }),
    ],
  };
};
