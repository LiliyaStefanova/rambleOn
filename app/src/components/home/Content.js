import React, {Component} from 'react';
import '../../App.css';
import './index.css'
import { Container } from 'reactstrap';
import WalkList  from '../list/WalkList'
import {PropTypes} from 'prop-types';


class Content extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
        };
    }

    render() {
        const {error} = this.state;
        if (error) {
            return <p>Something went wrong</p>
        }
        return(
            <WalkList/>
        )

    }
}

Container.propTypes = {
    fluid: PropTypes.bool
};

export default Content;
