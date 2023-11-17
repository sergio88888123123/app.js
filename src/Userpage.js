
import React from 'react';
import './App.css';

function Userpage() {
    return (
      <div className="welcome-page">
        <h1>Bienvenido a Mi Página</h1>
        <img
          src="https://via.placeholder.com/400"
          alt="Bienvenida"
          className="welcome-image"
        />
        <p>
          ¡Gracias por visitar mi página de bienvenida! Espero que encuentres
          información interesante aquí.
        </p>
      </div>
    );
  }
  
  export default Userpage;