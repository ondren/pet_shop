import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/Modals/CreateBrand';
import CreateType from '../components/Modals/CreateType';
import CreateDevice from '../components/Modals/CreateDevice';

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <Button className="mt-4 p-2" variant={'outline-dark'} onClick={() => setTypeVisible(true)}>
        Add Type
      </Button>
      <Button className="mt-4 p-2" variant={'outline-dark'} onClick={() => setBrandVisible(true)}>
        Add Brand
      </Button>
      <Button className="mt-4 p-2" variant={'outline-dark'} onClick={() => setDeviceVisible(true)}>
        Add Device
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
    </Container>
  );
};

export default Admin;
