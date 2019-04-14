const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
                options: { minimize: true }
              }
            ]
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        }, 
        {
            enforce: "pre",
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "eslint-loader",
            options: {
                failOnError: true,
              }
          }
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./public/index.html",
          filename: "./index.html"
        })
      ]
  };
