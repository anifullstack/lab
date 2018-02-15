var webpack = require('webpack');
const path = require("path");

module.exports = {
    entry: {
        main: [
            "./src/main.js"
        ]
    },
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist")
    },
    devServer: {
        contentBase: "dist",
        hot:true,
        overlay:true,
        host: "0.0.0.0",
        port: 3000
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use:[
            {
                loader:"babel-loader"
            }
          ],
          exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                }
            ]
            
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "[name].html"
                    }
                },
                {
                    loader: "extract-loader"
                },
                {
                    loader: "html-loader"
                }
            ]
        }
      ]  
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}