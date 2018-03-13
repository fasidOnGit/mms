import  React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Route,  Redirect} from 'react-router';
import toastr from 'toastr';
import App from './App';
import Login from '../components/login/Login';
import routes from '../routes';
import {auth} from '../firebase/firebase.index';

class AppIndex extends Component {
    constructor(props , context){
        super(props, context);
        this.state = {
            isAuthenticated: false,
            error:''
        };
        this.LoggedIn = this.LoggedIn.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        const name = event.target.name;
        if(name == "username"){
            this.setState({
                user:event.target.value
            });
        }else if(name == 'password'){
            this.setState({
                password: event.target.value
            });
        }
    }
    onSubmit(){
        const email = this.state.user;
        const password = this.state.password;
        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState(() => ({isAuthenticated:true}));
          history.push('/home');
        })
        .catch(error => {
            toastr.error(error.message);
          this.setState({isAuthenticated:false , error: error.message});
        });
        this.setState({
            isAuthenticated: true
        });
    }
    onLogout(){
        this.setState({
            isAuthenticated: false
        });
    }

    LoggedIn({isAuthed}){
        if(isAuthed){
            return <App isAuthed={this.state.isAuthenticated} logout={this.onLogout}>{routes}</App>;
        }else{
            return (
                <Login isAuthed={this.state.isAuthenticated} onSubmit={this.onSubmit} onChange={this.onInputChange} onError={this.state.error}/>
            );
        }
    }

    render(){
        return(
            <div>
                <this.LoggedIn isAuthed={this.state.isAuthenticated}/>
            </div>
        );
    }
}

export default AppIndex;
