/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {Col, Form, FormGroup, Row, Label, Input,CustomInput, Button} from 'reactstrap';
import './index.css'

export default class ContactForm extends Component {
    render() {
        return (
            <Form>
                <Row form>
                    <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="your email address here"/>
                            </FormGroup>
                        </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="message">Message</Label>
                            <Input type="textarea" name="message" id="message"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup check inline>
                                <CustomInput type="radio" id="feedback" name="feedback" label="Feedback" className='radioButton'/>
                                <CustomInput type="radio" id="bug" name="bug" label="Bug" className='radioButton'/>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
    )}

}
