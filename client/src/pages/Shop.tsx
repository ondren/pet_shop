import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar/TypeBar.js';
import BrandBar from '../components/BrandBar/BrandBar.js';
import DeviceList from '../components/DeviceList/DeviceList.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceApi';
import { setBrands, setDevices, setTotalCount, setTypes } from '../features/deviceSlice/deviceSlice.js';
import Pages from '../components/Pages/Pages.js';

const Shop: React.FC = () => {
  const page = useSelector((state) => state.device._page);
  const selectedTypes = useSelector((state) => state.device._selectedTypes);
  const selectedBrands = useSelector((state) => state.device._selectedBrands);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTypes().then((data) => dispatch(setTypes(data)));

    fetchBrands().then((data) => dispatch(setBrands(data)));

    fetchDevices(null, null, '1', 3).then((data) => {
      dispatch(setDevices(data.rows));
      dispatch(setTotalCount(data.count));
    });
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
