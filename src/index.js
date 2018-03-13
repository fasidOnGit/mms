import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router , browserHistory, Route} from 'react-router';
import { BrowserRouter , Switch} from 'react-router-dom';
import Login from './components/login/Login';
import routes from './routes';
import App from './components/App';
import AppIndex from './components/AppIndex';
import './sass/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';


render(
  <BrowserRouter history={browserHistory}>
    <AppIndex />
  </BrowserRouter>
, document.getElementById('app'));
