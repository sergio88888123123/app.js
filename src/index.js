import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Userpage from './Userpage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const MainApp = () => (
  <React.StrictMode>
    <App />
    <Userpage />
  </React.StrictMode>
);

root.render(<MainApp />);
reportWebVitals();
