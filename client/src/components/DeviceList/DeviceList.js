import React from 'react';
import {useSelector} from "react-redux";
import {Row} from "react-bootstrap";
import DeviceItem from "../DeviceItem/DeviceItem";

const DeviceList = () => {
    const devices = useSelector((state) => state.device._devices)
    return (
        <Row className='d-flex'>
            {devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </Row>
    );
};

export default DeviceList;