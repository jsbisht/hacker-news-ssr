const path = require("path");
const nodeExternals = require("webpack-node-externals");

const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  },
};

const scss = {
  test: /\.scss$/i,
  use: [
    // Creates `style` nodes from JS strings
    "style-loader",
    // Translates CSS into CommonJS
    "css-loader",
    // Compiles Sass to CSS
    "sass-loader",
  ],
};

const serverConfig = {
  mode: "development",
  target: "node",
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
  entry: {
    "index.js": path.resolve(__dirname, "server/index.js"),
  },
  module: {
    rules: [js],
  },
  output: {
    path: path.resolve(__dirname, "dist/server"),
    filename: "[name]",
  },
};

const clientConfig = {
  mode: "development",
  target: "web",
  entry: {
    "index.js": path.resolve(__dirname, "client/index.js"),
  },
  module: {
    rules: [js, scss],
  },
  output: {
    path: path.resolve(__dirname, "dist/client"),
    filename: "[name]",
  },
};

module.exports = [serverConfig, clientConfig];
