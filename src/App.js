import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Route, Routes, useLocation } from 'react-router-dom';
import AuthRoute from './routes/AuthRoute/AuthRoute';
import Header from './layouts/Header/Header';

const GlobalStyle = createGlobalStyle`${reset}`;

function App() {
  const location = useLocation();
  const headerCheck = !(location.pathname === '/');

  return (
    <>
      <GlobalStyle />
      <div id='rootContainer'>
        <Routes>
          <Route path='/*' element={
            <>
              <AuthRoute />
            </>
          }/>
        </Routes>
        {headerCheck && <Header />}
      </div>
    </>
  );
}

export default App;
