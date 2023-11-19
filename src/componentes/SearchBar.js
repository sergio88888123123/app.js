// Ejemplo de uso en otro componente
import React, { useState } from 'react';
import SearchBar from './SearchBar'; // Ajusta la ruta según la estructura de tu proyecto

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    // Puedes realizar acciones adicionales aquí según el término de búsqueda
    setSearchTerm(term);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {/* Resto de tu aplicación */}
    </div>
  );
};

export default App;
