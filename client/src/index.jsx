import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('qwe', App);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
