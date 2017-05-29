var webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
  app: ['webpack/hot/dev-server', './src/app.js'],
},
output: {
  path: path.resolve(__dirname, 'public/dist'),
  filename: 'bundle.js',
  publicPath: 'http://localhost:8080/dist/'
},
devServer: {
  contentBase: './public',
  publicPath: 'http://localhost:8080/dist/'
},
module: {
 loaders: [
   { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
   { test: /\.css$/, loader: 'style-loader!css-loader' },
   { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
 ]
},
 plugins: [
   new webpack.HotModuleReplacementPlugin(),
   new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
 ]
}
