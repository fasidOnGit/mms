import  React , { Component } from 'react';
import Header from './common/Header';
import Sidebar from'./common/Sidebar';
import PropTypes from 'prop-types';
import routes from '../routes';
import firebase, { auth, provider } from '../firebase/firebase.index';

class App extends Component{
  constructor(props , context){
    super(props , context);
      this.state={
        user:null
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

  componentDidMount(){
  }
  

  render(){
    return (
      <div id="mms-app">
        <Sidebar sidebar={this.sidebar}/>
        <Header logout = {this.props.logout}/>
        {this.props.children}
      </div>
    );
  }
}
App.propTypes ={
  children : PropTypes.object.isRequired,
  isAuthed: PropTypes.bool.isRequired,
  logout:PropTypes.func.isRequired
};
export default App;



