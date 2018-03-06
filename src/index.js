import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router , browserHistory } from 'react-router';
import { BrowserRouter , Switch} from 'react-router-dom';

import routes from './routes';
import App from './components/App';
import './sass/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';


render(
  <BrowserRouter>
    <App>
      {/* <Switch> */}
        {routes} 
      {/* </Switch> */}
    </App>
  </BrowserRouter>
, document.getElementById('app'));
