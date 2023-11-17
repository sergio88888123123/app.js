import React, { useState } from 'react';
export const Form = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    };
  
  
    return (
<<<<<<< HEAD
        
=======
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
            <li><a href="Appindex">Existencias</a></li>
            <li><a href="#">Catálogo</a></li>
            <li><a href="#">Clientes</a></li>

          </ul>
  
        </div>
>>>>>>> 97714c5b1073ec4e814a8e77adb3ed53a1f17569
        <div className="content">
         
            <div className="form-group">
              <label htmlFor="producto">Producto</label>
              <input type="text" id="producto" name="producto" />
              <label htmlFor="seccion">Sección</label>
              <input type="text" id="seccion" name="seccion" />
              <label htmlFor="fecha">Fecha de almacenaje</label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                value={selectedDate}
                onChange={handleDateChange}
              />
              <label htmlFor="fechacaducidad">Fecha de Caducidad</label>
              <input
                type="date"
                id="fechacaducidad"
                name="fechacaducidad"
              />
            <button  type="submit">Enviar</button >
            </div>
            
         
        </div>
<<<<<<< HEAD
   
=======
      </div>
>>>>>>> 97714c5b1073ec4e814a8e77adb3ed53a1f17569
  );
};