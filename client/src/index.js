import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This grabs the empty <div id="root"></div> from your public/index.html file
const root = ReactDOM.createRoot(document.getElementById('root'));

// This renders our App component inside that div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);