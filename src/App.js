
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './componentes/NavigationBar';
import { Form } from './componentes/Form';
import UserPage from './componentes/UserPage'; // Asegúrate de que la importación coincide con el nombre del archivo
import './App.css'
import Table  from './componentes/Table';


function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Table" element={<Table/>} />
          <Route path="/Form" element={<Form />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
    
  );
}

const Inicio = () => <div>Contenido de Inicio</div>;



export default App;
