import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Card, Row} from "react-bootstrap";
import {selectBrad, selectType} from "../../features/deviceSlice/deviceSlice";

const BrandBar = () => {
    const dispatch = useDispatch()
    const brands = useSelector((state) => state.device._brands)
    const selectedBrands = useSelector((state) => state.device._selectedBrands)
    return (
        <Row className="d-flex">
            {
                brands.map(brand =>
                    <Card
                        style={{cursor:'pointer'}}
                        border={brand.id === selectedBrands.id ? 'danger' : 'light'}
                        onClick={() => dispatch(selectBrad(brand))}
                        className="p-3"
                        key={brand.id}
                    >
                        {brand.name}
                    </Card>
                )
            }
        </Row>
    );
};

export default BrandBar;