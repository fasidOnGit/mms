import React from 'react';
import {Route , IndexRoute} from 'react-router';

import App from './components/App';
import Dashboard from './components/Dashboard';
import Customer from './components/customer/Customer';


export default (
  <div>
    {/* <IndexRoute component={App}/> */}
    <Route path="/home" component={Dashboard}/>
    <Route path="/manage" component={Customer}/>
  </div>
);
