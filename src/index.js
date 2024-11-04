import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import { UtilsContextProvider } from './context/UtilsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <UtilsContextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
      </UtilsContextProvider>
    </AuthProvider>
  </BrowserRouter>
);
