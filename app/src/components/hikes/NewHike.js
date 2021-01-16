import React, {useState, useContext} from 'react'
import './index.css'
import {Button, Col, Form, FormFeedback, FormGroup, Input, InputGroup, InputGroupAddon, Label, Row} from 'reactstrap'
import InformationalModal from '../common/modals/InformationalModal'
import DifficultyLevels from './DifficultyLevels'
import HikeContext from '../../context/hike/hikeContext';
// import axios from 'axios';
// import { UPDATE_HIKE } from '../../context/types'

const initialHike = {
  name: '',
  startLocation: '',
  endLocation: '',
  startDate: '',
  endDate: '',
  distance: '',
  difficulty: '',
  summary: ''
}

// const PATH_BASE = 'http://localhost:8080';
// const PATH_GRAPHQL = '/rambleOn';

const NewHike = () => {

  const hikeContext = useContext(HikeContext);
  const [hike, setHike] = useState(initialHike);

  const { current, addHike, updateHike, setCurrent, clearCurrent, error } = hikeContext;

  const onChange  = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setHike({[name]: value})
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(current === null){
      addHike(hike);
    } else {
      updateHike(hike);
    }
    if(error === 'Hike already exists'){
      // TODO - sort out alerts and notifications
    }
    setCurrent(hike);
    setHike(initialHike);
  }

  
  const cancel = () => {
    clearCurrent();
    setHike(initialHike);
  }

    return (
      <div className="formContainer">
        <Form className="form" onSubmit={onSubmit}>
          <FormGroup className="formGroup">
            <Label for="name">Name</Label>
            <Input type="text" value={hike.name} onChange={onChange}
                   name="name" id="walkName" placeholder="e.g. Day hike in the Enchanted Forest"/>
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup className="formGroup">
                <Label for="startLocation">Start Location</Label>
                <Input type="text" value={hike.startLocation} onChange={onChange}
                       name="startLocation" id="startLocation" placeholder="e.g. Great Village"/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="formGroup">
                <Label for="endLocation">End Location</Label>
                <Input type="text" value={hike.endLocation} onChange={onChange}
                       name="endLocation" id="endLocation" placeholder="e.g. Little Village"/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup className="formGroup">
                <Label for="startDate">Start Date</Label>
                <Input type="date" value={hike.startDate} onChange={onChange}
                       name="startDate" id="startDate" placeholder=""/>
                <FormFeedback tooltip> Date can't be in the past</FormFeedback>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="formGroup">
                <Label for="date">End Date</Label>
                <Input type="date" value={hike.endDate} onChange={onChange}
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
                  <Input type="number" value={hike.distance} onChange={onChange}
                         name="distance" id="length" placeholder="" step="1" min="0"/>
                  <InputGroupAddon addonType="append">km</InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="formGroup">
                <Label for="difficulty">Difficulty</Label>
                <InputGroup>
                  <Input type="number" value={hike.difficulty} onChange={onChange}
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
            <Input type="textarea" value={hike.summary} onChange={onChange}
                   name="summary" id="summary"/>
          </FormGroup>
          <FormGroup className="formGroup">
            <Button color="primary" active onClick={onSubmit} className="formButton">
              Create
            </Button>{' '}
            <Button color="secondary" onClick={cancel} className="formButton">
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </div>
    )
  }

export default NewHike;