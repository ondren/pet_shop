import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ListGroup} from "react-bootstrap";
import {selectType} from "../../features/deviceSlice/deviceSlice";

const TypeBar = () => {
    const dispatch = useDispatch()
    const types = useSelector((state) => state.device._types)
    const selectedTypes = useSelector((state) => state.device._selectedTypes)
    return (
        <ListGroup>
            {types.map(type =>
                <ListGroup.Item
                    style={{cursor:'pointer'}}
                    active={type.id === selectedTypes.id}
                    onClick={() => dispatch(selectType(type))}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
};

export default TypeBar;