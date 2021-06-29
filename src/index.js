import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// ------------ COMPONENT --------------->
import App from './App';
// ------------ DATA CONTEXT --------------->
import { ProjectProvider } from './context/projectContext';
// ------------ WEBVITALS --------------->
import reportWebVitals from './reportWebVitals';
// ------------ STYLES --------------->
import GlobalStyle from './theme/globalStyles';
import Theme from './theme/theme';


ReactDOM.render(
  <BrowserRouter>
    <ProjectProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ProjectProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
