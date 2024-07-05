import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { clearBasket, decrementBasket, setBasket } from '../features/basketSlice/basketSlice';
const Basket = () => {
  const basketData = useSelector((state) => state.basket._basket);
  const dispatch = useDispatch();

  return Object.keys(basketData).length === 0 ? (
    <h1 className="d-flex justify-content-center align-items-center">Корзина пуста</h1>
  ) : (
    <div>
      <ListGroup>
        {Object.keys(basketData).map((item) => (
          <div key={basketData[item].id} className="d-flex mb-2">
            <ListGroupItem>
              {item} x {basketData[item].quantity}
            </ListGroupItem>
            <div className="d-flex justify-content-center align-items-center">
              <Button
                className="h-75 w-75"
                onClick={() => {
                  dispatch(setBasket([item]));
                }}
              >
                +1
              </Button>
              <Button
                className="ml-2 h-75 w-75"
                onClick={() => {
                  dispatch(decrementBasket([item]));
                }}
              >
                -1
              </Button>
            </div>
          </div>
        ))}
        <Button variant="danger" onClick={() => dispatch(clearBasket())}>
          Очистить корзину
        </Button>
      </ListGroup>
    </div>
  );
};

export default Basket;
