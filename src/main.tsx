import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'intro.js/introjs.css';
import 'intro.js/themes/introjs-modern.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AnonymousApp from './AnonymousApp';
import './App.css';
import './bs-extensions.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AnonymousApp />
  </React.StrictMode>,
);
