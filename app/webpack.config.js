const path = require("path");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "src", "index"),
  output: {
    path: path.resolve(__dirname, "app","build"),
    filename: "bundle.js",
    publicPath: "http://localhost:3001/app/",
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "app","build"),
    historyApiFallback: true,
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { targets: "defaults" }],
                "@babel/preset-react"
              ],
            },
          },
          {
            loader: 'ts-loader'
          }
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { targets: "defaults" }],
                "@babel/preset-react"
              ],
            },
          }
        ],
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js", ".ts", ".tsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app",
      library: { type: "var", name: "app" },
      filename: "remoteEntry.js",
      remotes: {
        core: "core",
      },
      exposes: {
        "./index": "./src/bootstrap",
      },
      shared: ["react", "react-dom", "single-spa-react"],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
};
