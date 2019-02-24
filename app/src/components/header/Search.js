import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {InputGroup, InputGroupAddon, Button, Input} from 'reactstrap';

export default class Search extends Component {

    componentDidMount(){
        if(this.input){
            this.input.focus();
        }
    }

    render() {
        const { value, onChange, onSubmit, children } = this.props;
        return(
            <InputGroup onSubmit={onSubmit}>
                <Input type="search" name="search" value={value} onChange={onChange}
                       ref={(node) => {
                           this.input = node;
                       }}/>
                <InputGroupAddon addonType="append">
                    <Button type="submit" outline>{children}</Button>
                </InputGroupAddon>
            </InputGroup>
        )
    }

}

Search.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired
};