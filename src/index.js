import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import Sidebar from './components/common/Sidebar';
import './sass/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

ReactDom.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));
