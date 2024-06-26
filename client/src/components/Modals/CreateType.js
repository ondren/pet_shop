import React, { useState } from 'react';
import { Button, Form, FormControl, Modal } from 'react-bootstrap';
import { createType } from '../../http/deviceApi';

const CreateType = ({ show, onHide }) => {
  const [value, setValue] = useState('');
  const addType = () => {
    createType({ name: value }).then((data) => setValue(''));
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Add new Type</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormControl placeholder={'Enter type name'} value={value} onChange={(e) => setValue(e.target.value)} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={() => onHide()}>
          Close
        </Button>
        <Button variant="outline-success" onClick={() => addType()}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
