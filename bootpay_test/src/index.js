import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BootpayAPI from "./service/bootpay_api";
import UserAPI from "./service/user_api";
import ImageUploader from "./service/image_uploader";
import ItemAPI from "./service/item_api";

const bootpayAPI = new BootpayAPI();
const userAPI = new UserAPI();
const itemAPI = new ItemAPI();
const imageUploader = new ImageUploader();

ReactDOM.render(
  <React.StrictMode>
    <App bootpayAPI={bootpayAPI} userAPI={userAPI} imageUploader={imageUploader} itemAPI={itemAPI}/>
  </React.StrictMode>,
  document.getElementById('root')
);