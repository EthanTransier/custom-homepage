import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/css/master.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>
  </React.StrictMode>
);

