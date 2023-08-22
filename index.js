import React from 'react';
import ReactDOM from 'react-dom/client';
import searchImage from './api';
import App from './App';


searchImage();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


