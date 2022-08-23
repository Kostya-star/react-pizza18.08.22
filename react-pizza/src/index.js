import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/app.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* </React.StrictMode> */
    <BrowserRouter>
      {/* <Routes> */}
        <App/>
        { /* <Route exact path="/" element={<App />} /> */}
      {/* </Routes> */}
    </BrowserRouter>
  /* </React.StrictMode> */
);

reportWebVitals();
