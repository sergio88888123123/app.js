// NavigationBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
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

      {/* Main Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-toggle" onClick={toggleSidebar}>
          ☰
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
