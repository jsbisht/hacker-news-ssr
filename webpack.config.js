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
    rules: [js],
  },
  output: {
    path: path.resolve(__dirname, "dist/client"),
    filename: "[name]",
  },
};

module.exports = [serverConfig, clientConfig];
