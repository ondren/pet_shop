import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatus, setData } from '../../features/userState/userStateSlice';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user._user._isAuth);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(setData({}));
    dispatch(changeStatus(false));
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
      </Container>
    </Navbar>
  );
};

export default NavBar;
