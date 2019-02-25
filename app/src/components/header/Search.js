import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {InputGroup, InputGroupAddon, Button, Input} from 'reactstrap';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);
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
                    <Button type="submit" outline>
                        <FontAwesomeIcon icon="search"/>
                    </Button>
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