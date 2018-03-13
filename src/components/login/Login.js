import React , { Component } from "react";
import PropTypes from 'prop-types';
const Login = ({isAuthed , onSubmit, onChange})=>{
    return (
        <div className="container">
    <div className="row">
        <div className="col-md-offset-5 col-md-3">
            <div className="form-login">
            <h4>Welcome back.</h4>
            <input type="text" id="userName" name="username" className="form-control input-sm chat-input" placeholder="username" onChange={onChange}/>
            <br/>
            <input type="text" id="userPassword" name="password" className="form-control input-sm chat-input" placeholder="password" onChange={onChange}/>
            <br/>
            <div className="wrapper">
            <span className="group-btn">     
                <a href="#" className="btn btn-primary btn-md" onClick={onSubmit}>Login <i className="fa fa-sign-in" /></a>
            </span>
            </div>
            </div>
        
        </div>
    </div>
</div>
    );
};

Login.propTypes = {
    onSubmit : PropTypes.func.isRequired,
    isAuthed: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Login;