// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './componentes/NavigationBar';
import { Form } from './componentes/Form';
import UserPage from './componentes/UserPage';
import Table2 from './componentes/Table2';
import Login from './componentes/Login'; // Importa el nuevo componente Login
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/user"
            element={loggedIn ? <UserPage /> : <Login setLoggedIn={setLoggedIn} />}
          />
          <Route path="/Table" element={<Table2 />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
        <NavigationBar loggedIn={loggedIn} />
      </div>
    </Router>
  );
}

export default App;
