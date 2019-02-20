import React, {Component} from 'react';
import './index.css'
import {Button, Form, FormGroup, Label, Input,Row, Col, FormFeedback, InputGroupAddon} from 'reactstrap';
import {createGuid} from "../../utils";

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
        this.addWalk = this.addWalk.bind(this);
        this.cancel = this.cancel.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
        this.handleDistanceChange = this.handleDistanceChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleTitleChange(event){
        this.setState({title: event.target.value});
        event.preventDefault();
    }

    handleStartChange(event){
        this.setState({start:event.target.value});
        event.preventDefault();
    }

    handleEndChange(event){
        this.setState({end:event.target.value});
        event.preventDefault();
    }

    handleDistanceChange(event){
        this.setState({distance:event.target.value});
        event.preventDefault();
    }

    handleDateChange(event){
        this.setState({date:event.target.value})
        event.preventDefault();
    }

    addWalk(){
        console.log('Saving to local storage');
        const guid = createGuid();
        this.setState({id: guid});
        const { id, title, start, end, distance, date } = this.state;
        this.saveItemToLocalStorage(guid, {title, start, end, distance, date});

    }

    cancel(){
        this.setState(initialState);
    }


    saveItemToLocalStorage(id, item){
        localStorage.setItem(id, item);
    }

    render(){
        return(
            <div className="formContainer">
                <Form className="form">
                    <FormGroup className="formGroup">
                        <Label for="title">Create a new walk</Label>
                        <Input type="text" value={this.state.title}
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
                        <Col md={6}>
                            <FormGroup className="formGroup">
                                <Label for="distance">Distance</Label>
                                <Input type="number" value={this.state.distance} onChange={this.handleDistanceChange}
                                       name="distance" id="length" placeholder="Walk distance" step="1"/>
                                <InputGroupAddon addonType="append">km</InputGroupAddon>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup className="formGroup">
                                <Label for="date">Date</Label>
                                <Input type="date" value={this.state.date} onChange={this.handleDateChange}
                                       name="date" id="date" placeholder="Date of walk"/>
                                <FormFeedback tooltip> Date can't be in the past</FormFeedback>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup className="formGroup">
                        <Button color="primary" active onClick={this.addWalk} className="formButton">
                            Create
                        </Button>{' '}
                        <Button color="secondary" onClick={this.cancel} className="formButton">
                            Cancel
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

