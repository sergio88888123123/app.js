// Login.js
import React, { useState } from 'react';
import './Login.css'; // Importa el archivo CSS

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('Contraseña');
  const [password, setPassword] = useState('Contraseña');

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación (por ejemplo, una API o validación local)
    // Por ahora, solo comprobamos que ambos campos no estén vacíos
    if (username && password) {
      setLoggedIn(true); // Establecer el estado de inicio de sesión como verdadero
    } else {
      alert('Por favor, ingresa un nombre de usuario y contraseña válidos.');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <label>Usuario:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <label>Contraseña:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">
        Iniciar Sesión
      </button>
    </div>
  );
};

export default Login;
