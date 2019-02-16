import React from 'react';
import {Jumbotron, Container, ButtonGroup, Button} from 'reactstrap';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faBtc} from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faBtc);

const Contact = () =>
        <div>
            <Jumbotron>
                <Container fluid>
                    <h1 className="display-6">Feedback & Questions </h1>
                </Container>
            </Jumbotron>
            <Jumbotron>
                <Container fluid>
                    <h1 className="display-6">Contribute & Improve</h1>
                </Container>
            </Jumbotron>
        </div>

export default Contact;