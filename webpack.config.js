const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.join(__dirname,'/dist'),
        filename : 'index_bundled.js',
        publicPath: '/Todo-React-App'
    },
    module:{
        rules : [{
            test : /\.js$/,
            exclude : /node_modules/,
            use :{
                loader : 'babel-loader'
            }
          },
          {
            test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" ,
                options: { 
                modules: true
              }},
              
            ]
          }
        ]
    },
    devServer: {
        historyApiFallback: true,
      },
    plugins : [
        new HtmlWebpackPlugin({
            template : './src/index.html'
        })
    ]
}