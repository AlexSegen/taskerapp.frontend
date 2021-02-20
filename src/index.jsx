import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Services
import ApiService from './services/api.service'
import { TokenService } from './services/storage.service'

ApiService.init(process.env.REACT_APP_ROOT_API)
// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader()
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
