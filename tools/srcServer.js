import express from 'express';
import webpack from 'webpack';
import path from 'path';
import sassMiddleware from 'node-sass-middleware';
import config from '../webpack.config.dev';
import open from 'open';
import fb from './fireabase.server';
/*eslint-disable no-console*/
let provider;
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath:config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(sassMiddleware({
	src: path.join(__dirname, '../src/sass'),
	dest: path.join(__dirname , '../src/styles')
}));

app.get('*',function(req , res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
     provider = fb.auth.GoogleAuthProvider();
    open(`http://localhost:${port}`);
  }
});