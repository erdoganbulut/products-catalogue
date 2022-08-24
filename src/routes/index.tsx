import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Routes, Route } from 'react-router-dom';

const MainLayout = lazy(() => import('../layouts/Main'));
const Home = lazy(() => import('./Home'));

const Router: FunctionComponent = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<Spin />}>
          <MainLayout />
        </Suspense>
      }
    >
      <Route
        path=""
        element={
          <Suspense fallback={<Spin />}>
            <Home />
          </Suspense>
        }
      />
    </Route>
  </Routes>
);

export default Router;
