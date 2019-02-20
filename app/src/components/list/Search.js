import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup} from 'reactstrap';

export default class Search extends Component {

    componentDidMount(){
        if(this.input){
            this.input.focus();
        }
    }

    render() {
        const { value, onChange, onSubmit, children } = this.props;
        return(
            <Form onSubmit={onSubmit}>
                <FormGroup>
                <input type="search" name="search" value={value} onChange={onChange}
                       ref={(node) => {
                       this.input = node;
                       }}/>
                <button type="submit">{children}</button>
                </FormGroup>
            </Form>
        )
    }

}

Search.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired
};