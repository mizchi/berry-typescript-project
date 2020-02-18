const path = require("path");
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);
module.exports = {
  resolve: {
    extensions: [".js", "json", ".ts", ".tsx", ".wasm"],
    plugins: [PnpWebpackPlugin]
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)]
  },
  entry: {
    main: path.join(__dirname, "packages/webapp/src/index")
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  }
};
