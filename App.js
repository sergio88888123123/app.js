import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="container">
      <header className="navbar"> {/* Cambio de div a header */}
   
        <ul className="nav-links">
          <li><a href="https://open.spotify.com/intl-es/track/1L0C3xvOtzHSOSZ5T59n0L?si=55a42004a214479d">Inicio</a></li>
          <li><a href="#">Existencias</a></li>
          <li><a href="#">Catálogo</a></li>
          <li><a href="http://localhost:3000/?producto=&seccion=&fecha=2023-10-04&fechadecaducidad=2023-09-15#">Formularios</a></li>
          <li><a href="#">Clientes</a></li>
        </ul>
      </header> {/* Cierre del header */}

      <div className="left-panel">
        <div className="App">
          <h1>Registro de Mercancía</h1>

          <form>
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

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      <div className="right-panel">
        <table>
          <thead>
            <tr>
              <th>Encabezado 1</th>
              <th>Encabezado 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dato 1</td>
              <td>Dato 2</td>
            </tr>
            <tr>
              <td>Dato 3</td>
              <td>Dato 4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
