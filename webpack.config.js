var path = require("path");

module.exports = {
  entry: ["./src/web/app.js"],
  output: {
    filename: "app.js",
    path: path.resolve("./dist/scripts"),
    publicPath: "/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "stage-3"],
          plugins: [
            "transform-es2015-modules-commonjs",
            "styled-components",
            {
              // displayName: false
            }
          ]
        }
      }
    ]
  }
};
/*const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const devServer = require("@webpack-blocks/dev-server2");
const splitVendor = require("webpack-blocks-split-vendor");
const happypack = require("webpack-blocks-happypack");

const {
  addPlugins,
  createConfig,
  entryPoint,
  env,
  setOutput,
  sourceMaps,
  defineConstants,
  webpack
} = require("@webpack-blocks/webpack2");

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;
const sourceDir = process.env.SOURCE || "src/web";
const publicPath = `/${process.env.PUBLIC_PATH || ""}/`.replace("//", "/");
const sourcePath = path.join(process.cwd(), sourceDir);
const outputPath = path.join(process.cwd(), "dist");
const outputJSPath = path.join(process.cwd(), "dist/scripts");

const babel = () => () => ({
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loaders: [
          "style",
          "css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:10]",
          "sass"
        ]
      }
    ]
  }
});

const assets = () => () => ({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg|woff2?|ttf|eot)$/,
        loader: "url-loader?limit=8000"
      }
    ]
  }
});

const resolveModules = modules => () => ({
  resolve: {
    modules: [].concat(modules, ["node_modules"])
  }
});

const config = createConfig([
  env("development", [
    entryPoint({
      app: sourcePath
    }),
    setOutput({
      filename: "[name].js",
      path: outputPath,
      publicPath
    }),
    defineConstants({
      "process.env.NODE_ENV": process.env.NODE_ENV,
      "process.env.PUBLIC_PATH": publicPath.replace(/\/$/, "")
    }),
    addPlugins([
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        filename: "index.html", // output
        template: path.join(process.cwd(), "dist/index.html")
      })
    ]),
    happypack([babel()]),
    assets(),
    resolveModules(sourceDir),

    devServer({
      contentBase: "public",
      stats: "errors-only",
      historyApiFallback: { index: publicPath },
      headers: { "Access-Control-Allow-Origin": "*" },
      host,
      port
    }),
    sourceMaps(),
    addPlugins([new webpack.NamedModulesPlugin()])
  ]),

  env("production", [
    entryPoint({
      app: sourcePath
    }),
    setOutput({
      filename: "[name].js",
      path: outputJSPath,
      publicPath
    }),
    defineConstants({
      "process.env.NODE_ENV": process.env.NODE_ENV,
      "process.env.PUBLIC_PATH": publicPath.replace(/\/$/, "")
    }),
    addPlugins([
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        filename: "../../training/index.html", // output
        template: path.join(process.cwd(), "public/training/index.html")
      })
    ]),
    happypack([babel()]),
    assets(),
    resolveModules(sourceDir),

    splitVendor(),
    addPlugins([
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ])
  ])
]);

module.exports = config;
*/
