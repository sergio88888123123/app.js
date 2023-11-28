<<<<<<< HEAD
// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './componentes/NavigationBar';
import { Form } from './componentes/Form';
import UserPage from './componentes/UserPage';
import Table2 from './componentes/Table2';
import Login from './componentes/Login'; // Importa el nuevo componente Login
import './App.css';
=======

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './componentes/NavigationBar';
import { Form } from './componentes/Form';
import UserPage from './componentes/UserPage'; // Asegúrate de que la importación coincide con el nombre del archivo
import './App.css'
import Table  from './componentes/Table';

>>>>>>> f5f39852b75ceeb98bf59c14a4292fe9b910c806

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div>
<<<<<<< HEAD
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
=======
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Table" element={<Table/>} />
          <Route path="/Form" element={<Form />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
    
>>>>>>> f5f39852b75ceeb98bf59c14a4292fe9b910c806
  );
}

const Inicio = () => <div>Contenido de Inicio</div>;
const AcercaDe = () => <div>Contenido de Acerca de</div>;
const Contacto = () => <div>Contenido de Contacto</div>;

export default App;
