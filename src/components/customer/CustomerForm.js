import React , { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput  from '../common/TextInput';


const CustomerForm = ({customer, onSave, onChange, onBlur, errors,loading})=>{
    return (
        <form>
            <TextInput
                name="name"
                label="Name"
                value={customer.name}
                onChange={onChange}
                onBlur={onBlur}
                error={errors.name} />
            <TextInput
                name="location"
                label="Location"
                value={customer.location}
                onChange={onChange}
                onBlur={onBlur}
                error={errors.location} />
            <TextInput
                name="balance"
                type="number"
                label="Credit Balance"
                value={customer.balance}
                onChange={onChange}
                onBlur={onBlur}
                error={errors.balance}
                placeholder="Give 0 if it is none" />
            <input type="submit"
                id="" disabled={loading}
                className="btn btn-primary"
                value={loading ? 'Saving...' : 'Save'}
                onClick={onSave} />
        </form>
    );
};

CustomerForm.propTypes={
    customer: PropTypes.object.isRequired,
    onSave:PropTypes.func.isRequired,
    onChange:PropTypes.func.isRequired,
    onBlur:PropTypes.func.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.object
};

export default CustomerForm;