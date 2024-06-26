import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar/TypeBar';
import BrandBar from '../components/BrandBar/BrandBar';
import DeviceList from '../components/DeviceList/DeviceList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceApi';
import { setBrands, setDevices, setTotalCount, setTypes } from '../features/deviceSlice/deviceSlice';
import Pages from '../components/Pages/Pages';

const Shop = () => {
  const types = useSelector((state) => state.device._types);
  const brands = useSelector((state) => state.device._brands);
  const devices = useSelector((state) => state.device._devices);
  const page = useSelector((state) => state.device._page);
  const selectedTypes = useSelector((state) => state.device._selectedTypes);
  const selectedBrands = useSelector((state) => state.device._selectedBrands);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTypes().then((data) => dispatch(setTypes(data)));

    fetchBrands().then((data) => dispatch(setBrands(data)));

    fetchDevices(null, null, 1, 3).then((data) => {
      dispatch(setDevices(data.rows));
      dispatch(setTotalCount(data.count));
    });
    console.log(brands, devices, types);
  }, []);

  useEffect(() => {
    fetchDevices(selectedTypes.id, selectedBrands.id, page, 3).then((data) => {
      dispatch(setDevices(data.rows));
      dispatch(setTotalCount(data.count));
    });
  }, [page, selectedTypes.id, selectedBrands.id]);
  return (
    <Container>
      <Row>
        <Col className="mt-2" md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
