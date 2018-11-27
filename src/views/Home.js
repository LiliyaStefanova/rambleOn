import React, {Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Button} from 'reactstrap';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
        };


    }

    createWalkClick() {
        console.log('Create Walk Modal');
    }

    findWalkClick() {
        console.log('Find walks');
    }

    render() {
        const {error} = this.state;
        if (error) {
            return <p>Something went wrong</p>
        }
        return (
            <Container>
                <Row>
                    <Col>
                        <span>
                            <Link to='walk/create'>Create Walk</Link>
                        </span>
                    </Col>
                    <Col>
                        <span>
                            <Link to='/walks/all'>Find Walk</Link>
                        </span>

                    </Col>
                </Row>
            </Container>
        );
    }
}

// const Button = ({className = '', onClick, children}) => {
//     return (
//         <button className={className} onClick={onClick}>
//             {children}
//         </button>
//     )
// };


export default Home;
