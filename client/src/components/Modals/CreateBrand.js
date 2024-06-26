import React, { useState } from 'react';
import { Button, Form, FormControl, Modal } from 'react-bootstrap';
import { createBrand } from '../../http/deviceApi';

const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState('');
  const addBrand = () => {
    onHide();
    createBrand({ name: value }).then((data) => setValue(''));
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Add new Brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormControl placeholder={'Enter brand name'} value={value} onChange={(e) => setValue(e.target.value)} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={() => onHide()}>
          Close
        </Button>
        <Button variant="outline-success" onClick={() => addBrand()}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
