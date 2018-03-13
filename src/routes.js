import React from 'react';
import {Route , IndexRoute, Redirect} from 'react-router';

import App from './components/App';
import Dashboard from './components/Dashboard';
import Customer from './components/customer/Customer';
import AddCustomer from './components/customer/AddCustomer';
import Login from './components/login/Login';
const bool = false;

export default (
  <div>
    {/* <IndexRoute component={Dashboard}/> */}
    <Route strict exact path="/home" component={Dashboard}/>
    <Route path="/manage" component={Customer}/>
    <Route path="/add" component={AddCustomer}/>
    <Redirect from="/" to="/home"/>

  </div>
);
