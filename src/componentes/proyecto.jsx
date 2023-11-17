import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="container">
      <button className={`toggle-button ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <button className="close-button" onClick={toggleSidebar}>
          &times;
        </button>
        <ul className="nav-links">
          <li><a href="https://open.spotify.com/intl-es/track/1L0C3xvOtzHSOSZ5T59n0L?si=55a42004a214479d">Inicio</a></li>
          <li><a href="proyecto.jsx">Existencias</a></li>
          <li><a href="#">Catálogo</a></li>
          <li><a href="http://localhost:3000/?producto=&seccion=&fecha=2023-10-04&fechadecaducidad=2023-09-15#">Formularios</a></li>
          <li><a href="#">Clientes</a></li>
        </ul>

      </div>
      <div className="content">
  
        <form action="" method="POST">
          <div className="form-group">
            <label htmlFor="producto">Producto</label>
            <input type="text" id="producto" name="producto" />
          </div>
          <div className="form-group">
            <label htmlFor="seccion">Sección</label>
            <input type="text" id="seccion" name="seccion" />
          </div>
          <div className="form-group">
            <label htmlFor="fecha">Fecha de almacenaje</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fechacaducidad">Fecha de Caducidad</label>
            <input
              type="date"
              id="fechacaducidad"
              name="fechacaducidad"
            />
          </div>
          <button  type="submit">Enviar</button >
        </form>
      </div>
    </div>
  );
}

export default App;
