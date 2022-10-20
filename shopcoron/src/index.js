import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/page/App';
import Cart from './components/page/Cart';
import Checkout from './components/page/Checkout';
import Shop from './components/page/Shop';
import Product from './components/page/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

