import React, {useEffect, useState} from 'react';
import {
    Button, Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    FormControl,
    Modal,
    Row
} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {selectBrad, selectType, setBrands, setDevices, setTypes} from "../../features/deviceSlice/deviceSlice";
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceApi";

const CreateDevice = ({show, onHide}) => {
    const types = useSelector((state) => state.device._types)
    const brands = useSelector((state) => state.device._brands)
    const selectedBrands = useSelector((state) => state.device._selectedBrands)
    const selectedTypes = useSelector((state) => state.device._selectedTypes)
    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const dispatch = useDispatch()

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const changeInfo = (key,value,number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        console.log(info)
        const formData = new FormData()
        formData.append('name', name || 'имя не указано')
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', selectedBrands.id)
        formData.append('typeId', selectedTypes.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }

    useEffect(() => {
        fetchTypes().then(data => dispatch(setTypes(data)))
        fetchBrands().then(data => dispatch(setBrands(data)))
    }, [])

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new Device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <DropdownToggle>{selectedTypes.name || 'Choose type'}</DropdownToggle>
                        <DropdownMenu>
                            {
                                types.map(type =>
                                    <DropdownItem onClick={() => dispatch(selectType(type))} key={type.id}>{type.name}</DropdownItem>
                                )
                            }
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className='mt-2 mb-2'>
                        <DropdownToggle>{selectedBrands.name  || 'Choose brand'}</DropdownToggle>
                        <DropdownMenu>
                            {
                                brands.map(brand =>
                                    <DropdownItem onClick={() => dispatch(selectBrad(brand))} key={brand.id}>{brand.name}</DropdownItem>
                                )
                            }
                        </DropdownMenu>
                    </Dropdown>
                    <FormControl
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className='mt-3'
                        placeholder='Enter Device Name'
                    />
                    <FormControl
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className='mt-3'
                        type='number'
                        placeholder='Enter Device price'
                    />
                    <FormControl
                        className='mt-3'
                        type='file'
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button variant='outline-dark' onClick={() => addInfo()}>Add new info</Button>
                    {
                        info.map(item =>
                            <Row className='mt-4' key={item.number}>
                                <Col md={4}>
                                    <FormControl
                                        placeholder='enter info name'
                                        value={item.title}
                                        onChange={(e) => changeInfo('title', e.target.value, item.number)}
                                    />
                                </Col>
                                <Col md={4}>
                                    <FormControl
                                        placeholder='enter info description'
                                        value={item.description}
                                        onChange={(e) => changeInfo('description', e.target.value, item.number)}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button variant='outline-danger' onClick={() => removeInfo(item.number)}>Delete</Button>
                                </Col>
                            </Row>
                        )
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={() => onHide()}>Close</Button>
                <Button variant='outline-success' onClick={addDevice}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;