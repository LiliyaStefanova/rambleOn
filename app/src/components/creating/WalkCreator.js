import React, {Component} from 'react'
import './index.css'
import {Button, Col, Form, FormFeedback, FormGroup, Input, InputGroup, InputGroupAddon, Label, Row} from 'reactstrap'
import InformationalModal from '../common/modals/InformationalModal'
import DifficultyLevels from './DifficultyLevels'
import axios from 'axios';

const initialWalk = {
  name: '',
  startLocation: '',
  endLocation: '',
  startDate: '',
  endDate: '',
  distance: '',
  difficulty: '',
  summary: ''
}

const PATH_BASE = 'http://localhost:8080';
const PATH_GRAPHQL = '/rambleOn';

export default class WalkCreator extends Component {

  constructor (props) {
    super(props)
    this.state = {
      walk: initialWalk,
      error: null
    }
    this.addWalk = this.addWalk.bind(this)
    this.cancel = this.cancel.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange (event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState(prevState => ({
      walk: {
        ...prevState.walk,
        [name]: value
      }
    }));
    event.preventDefault();
  }

  addWalk () {
    let {name, startLocation, endLocation, startDate, endDate, distance, difficulty, summary } = this.state.walk;
    const mutation = `
       mutation{
           addWalk(newWalk:{
             name:"${name}",
             startLocation:"${startLocation}",
             endLocation:"${endLocation}",
             startDate: "${startDate}",
             endDate:"${endDate}",
             distance:${distance},
             difficulty:${difficulty},
             summary:"${summary}"
            }
           ){id} 
         }
       `
    this.request(mutation);
  }

  request(query){
    const finalQuery = {query: query};
    console.log(`Final query looks like: ${JSON.stringify(finalQuery)}`);
    axios({
      method: 'post',
      url: `${PATH_BASE}${PATH_GRAPHQL}`,
      headers: { 'Content-Type': 'application/json' },
      data: finalQuery
    }).then(result => {
      console.log(result.data.addWalk.id);
    }).catch(error => this.setState({ error }));
  }

  cancel () {
    this.setState({walk: initialWalk})
  }

  render () {
    return (
      <div className="formContainer">
        <Form className="form">
          <FormGroup className="formGroup">
            <Label for="name">Name</Label>
            <Input type="text" value={this.state.walk.name} onChange={this.onChange}
                   name="name" id="walkName" placeholder="e.g. Day hike in the Enchanted Forest"/>
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup className="formGroup">
                <Label for="startLocation">Start Location</Label>
                <Input type="text" value={this.state.walk.startLocation} onChange={this.onChange}
                       name="startLocation" id="startLocation" placeholder="e.g. Great Village"/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="formGroup">
                <Label for="endLocation">End Location</Label>
                <Input type="text" value={this.state.walk.endLocation} onChange={this.onChange}
                       name="endLocation" id="endLocation" placeholder="e.g. Little Village"/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup className="formGroup">
                <Label for="startDate">Start Date</Label>
                <Input type="date" value={this.state.walk.startDate} onChange={this.onChange}
                       name="startDate" id="startDate" placeholder=""/>
                <FormFeedback tooltip> Date can't be in the past</FormFeedback>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="formGroup">
                <Label for="date">End Date</Label>
                <Input type="date" value={this.state.walk.endDate} onChange={this.onChange}
                       name="endDate" id="endDate" placeholder=""/>
                <FormFeedback tooltip> Date can't be in the past</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup className="formGroup">
                <Label for="distance">Distance</Label>
                <InputGroup>
                  <Input type="number" value={this.state.walk.distance} onChange={this.onChange}
                         name="distance" id="length" placeholder="" step="1" min="0"/>
                  <InputGroupAddon addonType="append">km</InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="formGroup">
                <Label for="difficulty">Difficulty</Label>
                <InputGroup>
                  <Input type="number" value={this.state.walk.difficulty} onChange={this.onChange}
                         name="difficulty" id="difficulty" placeholder="" step="1" min="1" max="10"/>
                  <InputGroupAddon addonType="append">
                    <InformationalModal header='Difficulty Level Guide'>
                      <DifficultyLevels/>
                    </InformationalModal>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>

          <FormGroup className="formGroup">
            <Label for="summary">Walk Notes</Label>
            <Input type="textarea" value={this.state.walk.summary} onChange={this.onChange}
                   name="summary" id="summary"/>
          </FormGroup>
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

