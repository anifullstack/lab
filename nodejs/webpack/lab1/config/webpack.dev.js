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
        host: "0.0.0.0",
        port: 3000
    },
    module: {
      rules: [
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
            
        }
      ]  
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}