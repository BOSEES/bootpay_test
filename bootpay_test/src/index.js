import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BootpayAPI from "./service/bootpay_api";
import UserAPI from "./service/user_api";

const bootpayAPI = new BootpayAPI();
const userAPI = new UserAPI();

ReactDOM.render(
  <React.StrictMode>
    <App bootpayAPI={bootpayAPI} userAPI={userAPI}/>
  </React.StrictMode>,
  document.getElementById('root')
);