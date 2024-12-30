import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthSignInPage from '../../pages/AuthPage/AuthSignInPage/AuthSignInPage';

function AuthRoute() {
  return (
    <>
      <Routes>
          <Route path='/' element={<AuthSignInPage />} />
      </Routes>
    </>
  )
}

export default AuthRoute;