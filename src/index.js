// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure you're using the new API
import App from './App'; // Import the App component from App.js
import './index.css'; // If you have any global styles

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root element
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
