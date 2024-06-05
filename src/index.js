import React from 'react';
import ReactDOM from 'react-dom/client';
import NavbarComp from './navbar';
import App from './App';
import FaqComp from './footer';
import './main.css';
import { SpeedInsights } from '@vercel/speed-insights/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="w-body">
      <SpeedInsights />
      <NavbarComp />
      <App />
      <FaqComp />
    </div>
  </React.StrictMode>
);