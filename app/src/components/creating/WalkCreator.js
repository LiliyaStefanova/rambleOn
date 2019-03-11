import React, {Component} from 'react'
import './index.css'
import {Button, Col, Form, FormFeedback, FormGroup, Input, InputGroup, InputGroupAddon, Label, Row} from 'reactstrap'
import {createGuid} from '../../utils'
import InformationalModal from '../common/modals/InformationalModal'
import DifficultyLevels from './DifficultyLevels'

const initialState = {
  id: '',
  title: '',
  start: '',
  end: '',
  distance: '',
  difficulty: '',
  startDate: '',
  endDate: '',
  notes: ''
}

export default class WalkCreator extends Component {

  constructor (props) {
    super(props)
    this.state = initialState
    this.addWalk = this.addWalk.bind(this)
    this.cancel = this.cancel.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleStartChange = this.handleStartChange.bind(this)
    this.handleEndChange = this.handleEndChange.bind(this)
    this.handleDistanceChange = this.handleDistanceChange.bind(this)
    this.handleDifficultyChange = this.handleDifficultyChange.bind(this)
    this.handleStartDateChange = this.handleStartDateChange.bind(this)
    this.handleEndDateChange = this.handleEndDateChange.bind(this)
    this.handleNotesChange = this.handleNotesChange.bind(this)

  }

  handleTitleChange (event) {
    this.setState({ title: event.target.value })
    event.preventDefault()
  }

  handleStartChange (event) {
    this.setState({ start: event.target.value })
    event.preventDefault()
  }

  handleEndChange (event) {
    this.setState({ end: event.target.value })
    event.preventDefault()
  }

  handleDistanceChange (event) {
    this.setState({ distance: event.target.value })
    event.preventDefault()
  }

  handleDifficultyChange (event) {
    this.setState({ difficulty: event.target.value })
    event.preventDefault()
  }

  handleStartDateChange (event) {
    this.setState({ startDate: event.target.value })
    event.preventDefault()
  }

  handleEndDateChange (event) {
    this.setState({ endDate: event.target.value })
    event.preventDefault()
  }

  handleNotesChange (event) {
    this.setState({ notes: event.target.value })
    event.preventDefault()
  }

  addWalk () {
    const guid = createGuid()
    this.setState({ id: guid })
    const { title, start, end, distance, date } = this.state
    this.saveItemToLocalStorage(guid, { title, start, end, distance, date })

  }

  cancel () {
    this.setState(initialState)
  }

  saveItemToLocalStorage (id, item) {
    localStorage.setItem(id, item)
  }

  render () {
    return (
      <div className="formContainer">
        <Form className="form">
          <FormGroup className="formGroup">
            <Label for="title">Title</Label>
            <Input type="text" value={this.state.title} onChange={this.handleTitleChange}
                   name="title" id="walkTitle" placeholder="e.g. Day hike in the Enchanted Forest"/>
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup className="formGroup">
                <Label for="start">Start point</Label>
                <Input type="text" value={this.state.start} onChange={this.handleStartChange}
                       name="start" id="start" placeholder="e.g. Great Village"/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="formGroup">
                <Label for="end">End point</Label>
                <Input type="text" value={this.state.end} onChange={this.handleEndChange}
                       name="end" id="end" placeholder="e.g. Little Village"/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup className="formGroup">
                <Label for="startDate">Start Date</Label>
                <Input type="date" value={this.state.startDate} onChange={this.handleStartDateChange}
                       name="startDate" id="startDate" placeholder=""/>
                <FormFeedback tooltip> Date can't be in the past</FormFeedback>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="formGroup">
                <Label for="date">End Date</Label>
                <Input type="date" value={this.state.endDate} onChange={this.handleEndDateChange}
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
                  <Input type="number" value={this.state.distance} onChange={this.handleDistanceChange}
                         name="distance" id="length" placeholder="" step="1" min="0"/>
                  <InputGroupAddon addonType="append">km</InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="formGroup">
                <Label for="difficulty">Difficulty</Label>
                <InputGroup>
                  <Input type="number" value={this.state.difficulty} onChange={this.handleDifficultyChange}
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
            <Label for="walkNotes">Walk Notes</Label>
            <Input type="textarea" name="text" id="walkNotes"/>
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

