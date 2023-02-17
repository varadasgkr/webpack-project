const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports =  {
  mode: "development",
  entry: "/src/index.js",
  output: { path: path.resolve(__dirname, "dist") },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
       "Access-Control-Allow-Credentials": "true" 
    },
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true, // open the website on webbase serve,
    historyApiFallback: true,
    
    ///
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
};
