<<<<<<< HEAD
// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(inputValue);
=======
// Ejemplo de uso en otro componente
import React, { useState } from 'react';
import SearchBar from './SearchBar'; // Ajusta la ruta según la estructura de tu proyecto

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    // Puedes realizar acciones adicionales aquí según el término de búsqueda
    setSearchTerm(term);
>>>>>>> f5f39852b75ceeb98bf59c14a4292fe9b910c806
  };

  return (
    <div>
<<<<<<< HEAD
      <input type="text" value={inputValue} onChange={handleInputChange} />
=======
      <SearchBar onSearch={handleSearch} />
      {/* Resto de tu aplicación */}
>>>>>>> f5f39852b75ceeb98bf59c14a4292fe9b910c806
    </div>
  );
};

<<<<<<< HEAD
export default SearchBar;
=======
export default App;
>>>>>>> f5f39852b75ceeb98bf59c14a4292fe9b910c806
