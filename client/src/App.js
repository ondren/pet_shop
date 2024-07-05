import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar/NavBar';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { check } from './http/userApi';
import { changeStatus } from './features/userState/userStateSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    check().then((data) => {
      dispatch(changeStatus(true));
    });
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
