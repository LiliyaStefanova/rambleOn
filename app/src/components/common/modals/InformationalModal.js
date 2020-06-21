/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

library.add(faQuestion);

const InformationalModal = ({header}) => {
  const [modal, setModal] = useState(false);

  const prevModalStateRef = useRef();

  useEffect(() => {
    prevModalStateRef.current = modal;
  });

  const prevModal = prevModalStateRef.current;

  const toggle = () => {
    setModal(!prevModal);
  };

  return (
    <div>
      <Button onClick={toggle} color="secondary">
        <FontAwesomeIcon icon="question" />
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{header}</ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default InformationalModal;
