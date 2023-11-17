import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD

=======
import Userpage from './Userpage';
>>>>>>> 97714c5b1073ec4e814a8e77adb3ed53a1f17569
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const MainApp = () => (
  <React.StrictMode>
    <App />
<<<<<<< HEAD

=======
    <Userpage />
>>>>>>> 97714c5b1073ec4e814a8e77adb3ed53a1f17569
  </React.StrictMode>
);

root.render(<MainApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
