import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from './layouts/main-layout';
import AuthLayout from './layouts/auth-layout';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';
import NotMatchPage from './pages/404';
import HomePage from './pages/home';

const routes = (isLoggedIn) => [
  {
    path: '/app',
    element: isLoggedIn ? <MainLayout /> : <Navigate to="/login" />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '*', element: <Navigate to={'/app'} /> },
    ],
  },

  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: '404', element: <NotMatchPage /> },
      { path: '/', element: <Navigate to="/app" /> },
      { path: '*', element: <Navigate to="/app" /> },
    ],
  },
];

export default routes;
