import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from './utils/consts';
import { lazy } from 'react';

const Admin = lazy(() => import('./pages/Admin'));
const Shop = lazy(() => import('./pages/Shop'));
const Auth = lazy(() => import('./pages/Auth'));
const DevicePage = lazy(() => import('./pages/DevicePage'));
const Basket = lazy(() => import('./pages/Basket'));

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
];
