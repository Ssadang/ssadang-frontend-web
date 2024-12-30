import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Route, Routes } from 'react-router-dom';
import AuthRoute from './routes/AuthRoute/AuthRoute';

const GlobalStyle = createGlobalStyle`${reset}`;

function App() {
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
      </div>
    </>
  );
}

export default App;
