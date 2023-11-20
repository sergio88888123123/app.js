import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = ({ onSearch }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onSearch(event.target.value);
  };

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <div>
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={closeSidebar}>
          &times;
        </button>
        <ul className="sidebar-links">
          <li><Link to="/" onClick={closeSidebar}>Inicio</Link></li>
          <li><Link to="/Table" onClick={closeSidebar}>Table</Link></li>
          <li><Link to="/Form" onClick={closeSidebar}>Formulario</Link></li>
          <li><Link to="/user" onClick={closeSidebar}>Página del Usuario</Link></li>
        </ul>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-toggle" onClick={toggleSidebar}>
          ☰
        </div>

        <div className="navbar-search">
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={handleSearch}>&#128270;</button>
        </div>
      </nav>
    </div>
  );
};


export default NavigationBar;
