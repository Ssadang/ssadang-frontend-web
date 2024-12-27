import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`${reset}`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div id='rootContainer'>


      </div>
    </>
  );
}

export default App;
