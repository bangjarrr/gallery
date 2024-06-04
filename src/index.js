import React from 'react';
import ReactDOM from 'react-dom/client';
import NavbarComp from './navbar';
import App from './App';
import FaqComp from './footer';
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="w-body">
      <NavbarComp />
      <App />
      <FaqComp />
    </div>
  </React.StrictMode>
);