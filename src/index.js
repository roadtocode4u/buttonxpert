import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from './components/ButtonComponent/Button';
import Card from './components/Card/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  <Button/>
  <Card/>
  </React.StrictMode>
);

reportWebVitals();
