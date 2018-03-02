import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router , browserHistory } from 'react-router';
import { BrowserRouter , Switch} from 'react-router-dom';
import * as firebase from 'firebase';

import routes from './routes';
import App from './components/App';
import './sass/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

// Initialize Firebase
let config = {
  apiKey: "AIzaSyB3NW_91hOjWICKFGHElSXrxdgvspKCBNI",
  authDomain: "mms-db-5ae10.firebaseapp.com",
  databaseURL: "https://mms-db-5ae10.firebaseio.com",
  projectId: "mms-db-5ae10",
  storageBucket: "mms-db-5ae10.appspot.com",
  messagingSenderId: "703342301090"
};
firebase.initializeApp(config);

render(
  <BrowserRouter>
    <App>
      {/* <Switch> */}
        {routes} 
      {/* </Switch> */}
    </App>
  </BrowserRouter>
, document.getElementById('app'));
