<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = ({ onSearch }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
=======
// NavigationBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; // Ajusta la ruta según la estructura de tu proyecto
import './NavigationBar.css';
import './SearchBar.css';
const NavigationBar = ({ onSearch }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
>>>>>>> f5f39852b75ceeb98bf59c14a4292fe9b910c806

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

<<<<<<< HEAD
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onSearch(event.target.value);
  };

  const handleSearch = () => {
    onSearch(inputValue);
  };

=======
>>>>>>> f5f39852b75ceeb98bf59c14a4292fe9b910c806
  return (
    <div>
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={closeSidebar}>
          &times;
        </button>
        <ul className="sidebar-links">
<<<<<<< HEAD
        <li><Link to="/user" onClick={closeSidebar}>Página del Usuario</Link></li>
          <li><Link to="/Table" onClick={closeSidebar}>Table</Link></li>
          <li><Link to="/Form" onClick={closeSidebar}>Formulario</Link></li>
         
        </ul>
      </div>

      {/* Navbar */}
=======
          <li><Link to="/" onClick={closeSidebar}>Inicio</Link></li>
          <li><Link to="/Table" onClick={closeSidebar}>Table</Link></li>
          <li><Link to="/Form" onClick={closeSidebar}>Formulario</Link></li>
          <li><Link to="/user" onClick={closeSidebar}>Página del Usuario</Link></li>
        </ul>
      </div>

      {/* Main Navigation Bar */}
>>>>>>> f5f39852b75ceeb98bf59c14a4292fe9b910c806
      <nav className="navbar">
        <div className="navbar-toggle" onClick={toggleSidebar}>
          ☰
        </div>
<<<<<<< HEAD

        <div className="navbar-search">
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={handleSearch}>&#128270;</button>
        </div>
      </nav>
=======
       
      </nav>
      <SearchBar onSearch={onSearch} />
>>>>>>> f5f39852b75ceeb98bf59c14a4292fe9b910c806
    </div>
  );
};

<<<<<<< HEAD

=======
>>>>>>> f5f39852b75ceeb98bf59c14a4292fe9b910c806
export default NavigationBar;
