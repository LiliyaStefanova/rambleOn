import React, {Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Button, Card, CardTitle} from 'reactstrap';
import {PropTypes} from 'prop-types';

const styles = {
    buttonStyle: {color: '#f1f1f1'},
    containerStyle: {background: 'rgba(0, 0, 0,0)', marginTop: '200px'}
};

class Home extends Component {

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
        return (
            <Container fluid style={styles.containerStyle}>
                <Row>
                    <Col xs="3">
                        <Card body>
                            <CardTitle>Plan your next hike</CardTitle>
                            <Link to='walk/create'>
                                <Button size="lg" style={styles.buttonStyle}>
                                    Create Walk
                                </Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col xs="3">
                        <Card body>
                            <CardTitle>Revisit previous hikes</CardTitle>
                        <Link to='/walks/all'>
                            <Button size="lg" style={styles.buttonStyle}>
                                Find Walk
                            </Button>
                        </Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

Container.propTypes = {
    fluid: PropTypes.bool
    // applies .container-fluid class
}

export default Home;
