import React , { Component } from 'react';
import Proptypes from 'prop-types';
import CustomerForm from './CustomerForm';

class AddCustomer extends Component{
    constructor(props,context){
        super(props,context);
        this.state ={
            saving:false,
            customer:{
                name:'',
                balance:'',
                location:''
            },
            errors:{}
        };
        this.updateCustomer = this.updateCustomer.bind(this);
        this.addCustomer = this.addCustomer.bind(this);
        this.customerFormVaild = this.customerFormVaild.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    updateCustomer(event){
        const field = event.target.name;
        let customer = Object.assign({}, this.state.customer);
        customer[field] = event.target.value;
        if(this.state.errors[field]){
            this.onBlur(event);
        }
        return this.setState({customer});
    }

    addCustomer(event){
        event.preventDefault();
        if(!this.customerFormVaild()){
            return;
        }else{
            alert('Saved');
            
        }
    }

    onBlur(event){
        let label = event.target.parentNode.parentNode.firstChild.innerHTML;
        let field = event.target.name;
        let value=event.target.value;
        if(event.target.type=="number" && value.toString().length == 0){
            let errors = Object.assign({},this.state.errors);
            errors[field] = `${label} must have a value. If no pending balance then please give 0 as value.`;
            this.setState({errors});
        }else if(event.target.type=="text" && value.length<3){
            let errors = Object.assign({},this.state.errors);
            errors[field] = `${label} must have 3 characters`;
            this.setState({errors});
        }else{
            let errors = Object.assign({},this.state.errors);
            errors[field] = '';
            this.setState({errors});
        }
    }

    deepClone(object){
        return JSON.parse(JSON.stringify(object));
    }

    customerFormVaild(){
        let name = this.state.errors.name,
            balance=this.state.errors.balance,
            location=this.state.errors.location;
        if(name || balance || location){
            return false;
        }else{
            return true;
        }
    }

    render(){
        return (
            <div className="flex-column">
                <h2>Create Customer</h2>
                <CustomerForm 
                    customer={this.state.customer}
                    loading={this.state.saving}
                    errors={this.state.errors}
                    onChange={this.updateCustomer}
                    onBlur={this.onBlur}
                    onSave={this.addCustomer}/>
            </div>
        );
    }
}

export default AddCustomer;