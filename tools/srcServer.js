import express from 'express';
import webpack from 'webpack';
import path from 'path';
import * as bodyParser from 'body-parser';
import sassMiddleware from 'node-sass-middleware';
import config from '../webpack.config.dev';
import open from 'open';
import ejs from 'ejs';
/*eslint-disable no-console*/
let provider;
const port = 3000;
const app = express();
const compiler = webpack(config);
let userCache=null;

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath:config.output.publicPath
}));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(require('webpack-hot-middleware')(compiler));

app.use(sassMiddleware({
	src: path.join(__dirname, '../src/sass'),
	dest: path.join(__dirname , '../src/styles')
}));

// app.get('/' , (req,res)=>{
//   if(userCache){
//     res.redirect('/app');
//   }else{
//     res.redirect('/login');
//   }
// });
// app.get('/login' , (req, res)=>{
//   res.render('login');
// });

app.get('*', (req , res)=>{
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    // open(`http://localhost:${port}`);
  }
});


function isLoggedIn(req, res, next){
  if(userCache){
    next();
  }else{
    res.redirect('login');
  }
}