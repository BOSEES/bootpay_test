import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BootpayAPI from "./bootpay/payment_api";

const bootpayAPI = new BootpayAPI();

ReactDOM.render(
  <React.StrictMode>
    <App bootpayAPI={bootpayAPI}/>
  </React.StrictMode>,
  document.getElementById('root')
);