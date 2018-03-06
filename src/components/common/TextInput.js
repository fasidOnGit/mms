import React , { Component } from 'react';
import PropTypes from 'prop-types';


const TextInput = ({name , label , onChange,onBlur , placeholder , value , error,type}) => {
    let wrapperClass = 'form-group';
    if(error && error.length >0){
      wrapperClass += '' + 'has-error';
    }
    return (
      <div className={wrapperClass}>
        <label className="label-text" htmlFor={name}>{label}</label>
        <div className="field">
          <input
            type={type || "text"}
            name={name}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}/>
            {error &&  <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    );
  };
  
  TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.node, 
    error: PropTypes.string,
    type:PropTypes.string
  };
  
  export default TextInput;