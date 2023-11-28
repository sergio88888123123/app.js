
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './componentes/NavigationBar';
import { Form } from './componentes/Form';
import UserPage from './componentes/UserPage'; // Asegúrate de que la importación coincide con el nombre del archivo
import './App.css'
import Table2 from './componentes/Table2';


function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
        <Route path="/user" element={<UserPage />} />
          <Route path="/Table" element={<Table2/>} />
          <Route path="/Form" element={<Form />} />
       
        </Routes>
      </div>
    </Router>
    
  );
}

const Inicio = () => <div>Contenido de Inicio</div>;



export default App;
