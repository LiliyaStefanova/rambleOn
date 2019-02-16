import React, {Component} from 'react';
import '../App.css';
import './index.css'
import '../utils';
import {Button, Form, FormGroup, Label, Input,Row, Col, FormFeedback} from 'reactstrap';
import {createGuid} from "../utils";

const initialState ={
            id:'',
            title:'',
            start:'',
            end:'',
            distance:'',
            date:''
     };

export default class WalkCreator extends Component{

    constructor(props){
        super(props);
        this.state = initialState;

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
        this.handleDistanceChange = this.handleDistanceChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleTitleChange(event){
        console.log('Updating title');
        this.setState({title: event.target.value});
    }

    handleStartChange(event){
        this.setState({start:event.target.value});
    }

    handleEndChange(event){
        this.setState({end:event.target.value});
    }

    handleDistanceChange(event){
        this.setState({distance:event.target.value});
    }

    handleDateChange(event){
        this.setState({date:event.target.value})
    }

    handleSubmit(){
        console.log('Saving to local storage');
        const guid = createGuid();
        this.setState({id: guid});
        const { id, title, start, end, distance, date } = this.state;
        this.saveItemToLocalStorage(guid, {title, start, end, distance, date});

    }

    handleCancel(){
        this.setState(initialState);
    }


    saveItemToLocalStorage(id, item){
        localStorage.setItem(id, item);
    }

    render(){
        return(
                <Form className="form">
                    <FormGroup className="formGroup">
                        <Label for="title">Create a new walk</Label>
                        <Input type="text" value={this.state.title} onChange={this.handleTitleChange}
                               name="title" id="walkTitle" placeholder="Name"/>
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                            <FormGroup className="formGroup">
                                <Label for="start">Start point</Label>
                                <Input type="text" value={this.state.start} onChange={this.handleStartChange}
                                       name="start" id="start" placeholder="Start point"/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup className="formGroup">
                                <Label for="end">End point</Label>
                                <Input type="text" value={this.state.end} onChange={this.handleEndChange}
                                       name="end" id="end" placeholder="End point"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <FormGroup className="formGroup">
                                <Label for="length">Distance in km</Label>
                                <Input type="text" value={this.state.distance} onChange={this.handleDistanceChange}
                                       name="length" id="length" placeholder="Walk distance"/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup className="formGroup">
                                <Label for="date">Date</Label>
                                <Input type="date" value={this.state.date} onChange={this.handleDateChange}
                                       name="date" id="date" placeholder="Date of walk"/>
                                <FormFeedback tooltip> Date can't be in the past</FormFeedback>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup className="formGroup">
                        <Button color="primary" active onClick={this.handleSubmit} className="formButton">
                            Create
                        </Button>{' '}
                        <Button color="secondary" onClick={this.handleCancel} className="formButton">
                            Cancel
                        </Button>
                    </FormGroup>
                </Form>
        )
    }
}

