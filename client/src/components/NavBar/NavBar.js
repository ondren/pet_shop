import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatus, setData } from '../../features/userState/userStateSlice';
import { useNavigate } from 'react-router-dom';
import shopping_cart from '../../assets/shopping-cart-outline.svg';

const NavBar = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user._user._isAuth);
  const basketCount = useSelector((state) => state.basket._basketCount);
  const basketData = useSelector((state) => state.basket._basket);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(setData({}));
    dispatch(changeStatus(false));
    localStorage.setItem('token', null);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav.Link style={{ color: 'white' }} onClick={() => navigate(SHOP_ROUTE)}>
          React Shop
        </Nav.Link>

        {currentUser ? (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)}>
              Admin
            </Button>
            <Button className="ml-2" variant={'outline-light'} onClick={() => logOut()}>
              Logout
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>
              Login
            </Button>
          </Nav>
        )}
        <Nav>
          <div
            onClick={() => navigate(BASKET_ROUTE)}
            className="ml-2 d-flex align-items-end justify-content-end"
            style={{
              background: `url(${shopping_cart}) no-repeat center center`,
              width: 50,
              height: 50,
              backgroundSize: 'cover',
              fontSize: 14,
              cursor: 'pointer',
              color: '#b4b6c2',
            }}
          >
            {basketCount}
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
