import webpack from 'webpack';
import path from 'path';

export default {
  devtool:'inline-source-map',
  entry:[
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname,'src/index')
  ],
  target:'web',
  output:{
    path:__dirname+'/dist',//Note: Physical files are only output by the production build task `npm run build`.
    publicPath:'/',
    filename:'bundle.js'
  },
  devServer:{
    noInfo:true,
    contentBase:path.resolve(__dirname,'src')
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module:{
    loaders: [
      {test: /\.js$/,exclude: /node_modules/, include: path.join(__dirname, 'src'), loaders: ['babel-loader']},
      {test: /\.jsx?$/,exclude: /node_modules/,loader: ['babel-loader']},
      {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
