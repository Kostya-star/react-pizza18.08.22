import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/app.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import store from './redux/store';
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* </React.StrictMode> */
    <BrowserRouter>
      {/* <Routes> */}
      <Provider store={store}>
        <App />
      </Provider>
        { /* <Route exact path="/" eleme nt={<App />} /> */}
      {/* </Routes> */}
    </BrowserRouter>
  /* </React.StrictMode> */   
);

reportWebVitals();
