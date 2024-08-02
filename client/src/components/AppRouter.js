import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { useSelector } from 'react-redux';

const AppRouter = () => {
  const currentUser = useSelector((state) => state.user._user._isAuth);

  return (
    <Routes>
      {currentUser &&
        authRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Component />
              </Suspense>
            }
            exact
          />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Component />
            </Suspense>
          }
          exact
        />
      ))}
      <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;
