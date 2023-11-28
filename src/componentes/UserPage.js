<<<<<<< HEAD
import React, { useState } from 'react';
import './UserPage.css';
import Table from './Table';

const UserPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const userPageData = [
    { producto: 'Producto1', seccion: 'Seccion1', fecha: 'Fecha1', caducidad: 'Caducidad1', stock: 'Stock1' },
    { producto: 'Producto2', seccion: 'Seccion2', fecha: 'Fecha2', caducidad: 'Caducidad2', stock: 'Stock2' },
    // Agregar más datos según sea necesario
  ];

  const columnNames = ['Actividad', 'Usuario', 'Fecha de actividad', 'Comentarios', ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Aquí puedes agregar lógica adicional, como filtrar los datos en función del término de búsqueda
  };

  return (
    <div className="app-container">
      <div className="box red">Productos a vencer</div>
      <div className="box blue">Sugerencia de compra</div>
      <div className="box green">Productos más vendidos</div>
      <div className="box yellow">Contacto de proveedores</div>

      <Table
        tableData={userPageData}
        columnNames={columnNames}
        onChangeSearch={handleSearchChange}
      />
    </div>
  );
};
=======


import React from 'react';

const UserPage = () => (
  <div>
    <h2>Página del Usuario</h2>
    {/* Contenido de la página del usuario */}
  </div>
);
>>>>>>> f5f39852b75ceeb98bf59c14a4292fe9b910c806

export default UserPage;
