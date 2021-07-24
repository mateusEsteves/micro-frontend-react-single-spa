const path = require("path");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "index"),
  output: {
    path: path.resolve(__dirname, "app", "build"),
    filename: "bundle.js",
    publicPath: "http://localhost:3002/gatos/",
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "app", "build"),
    historyApiFallback: true,
    port: 3002,
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
                "@babel/preset-react",
              ],
            },
          },
          {
            loader: "ts-loader",
          },
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
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
      {
        test: /\.s?css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                localIdentName: "[name]__[local]__[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext]'
        }
      }
    ],
  },
  resolve: {
    extensions: [".jsx", ".js", ".ts", ".tsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "gatos",
      library: { type: "var", name: "gatos" },
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
      template: "./src/index.html",
    }),
  ],
};
