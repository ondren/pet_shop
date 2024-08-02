import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../../utils/consts';
import { useDispatch, useSelector } from 'react-redux';
import { setBasket } from '../../features/basketSlice/basketSlice';

const DeviceItem = ({ device }) => {
  const isAuth = useSelector((state) => state.user._user._isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Col md={3} className="mt-3">
      <Card style={{ width: 150 }} border={'light'}>
        <Image
          style={{ cursor: 'pointer' }}
          onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
          width={150}
          height={150}
          src={process.env.REACT_APP_API_URL + device.img}
        />
        <div className="text-black-50 d-flex justify-content-between align-items-center">
          <div className=" mt-1 d-flex align-items-center">
            <div>{device.name}</div>
          </div>
        </div>
        <div>{device.rating} *</div>
        <div className="d-flex justify-content-between">
          <div>{device.price} $</div>
          {isAuth ? (
            <Button variant="primary" onClick={() => dispatch(setBasket([device.name, device.price, device.id]))}>
              +
            </Button>
          ) : (
            <Button variant="primary" onClick={() => alert('Авторизируйтесь или создайте аккаунт')}>
              +
            </Button>
          )}
        </div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
