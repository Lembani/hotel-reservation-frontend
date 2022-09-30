/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line,react/jsx-wrap-multilines */
import React from 'react';
import {
  Navigate, Outlet,
} from 'react-router-dom';

import localStorageActions from '../../utils/localStorage';

const Private = () => {
  const user = localStorageActions.getUser();

  return (
    user ? <Outlet /> : <Navigate to="/" />
  );
};

export default Private;
