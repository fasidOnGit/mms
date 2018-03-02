import  React , { Component } from 'react';
import Header from './common/Header';
import Sidebar from'./common/Sidebar';
import PropTypes from 'prop-types';
import routes from '../routes';


class App extends Component{
  constructor(props , context){
    super(props , context);
      this.state={
      };
      this.sidebar=[{
        id:1,
        name:'Dashboard',
        active:true,
        route:'/home'
      },
      {
        id:2,
        name:'Manage Cusotmer',
        route:'/manage'
      },
      {
        id:3,
        name:'Stock',
        route:'/stock'
      },
      {
        id:4,
        name:'Manage Credit',
        route:'/credit'
      }];
  }

  render(){
    return (
      <div id="mms-app">
        <Sidebar sidebar={this.sidebar}/>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
App.propTypes ={
  children : PropTypes.object.isRequired
};
export default App;



