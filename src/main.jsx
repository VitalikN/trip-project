

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './index.css';
import store from './redux/store';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
  <BrowserRouter basename="/trip-project">
      <App />
  </BrowserRouter> 
    </Provider>
  </React.StrictMode>
);



