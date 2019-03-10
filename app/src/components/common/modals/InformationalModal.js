/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faQuestion} from '@fortawesome/free-solid-svg-icons'

library.add(faQuestion)

class InformationalModal extends Component {

  constructor (props) {
    super(props)
    this.state = {
      modal: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render () {
    const { header, children} = this.props
    return (
      <div>
        <Button onClick={this.toggle} color="secondary">
          <FontAwesomeIcon icon="question"/>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{header}</ModalHeader>
          <ModalBody>
            {children}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>OK</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default InformationalModal
