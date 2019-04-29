module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/client/app/index.js"],
  output: {
    path: __dirname + "/src/client/public",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
