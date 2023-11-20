// Table.js

import React, { useState } from 'react';
import './Table.css';

const Table = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Sample data for demonstration purposes
  const tableData = [
    { producto: 'Producto1', seccion: 'Seccion1', fecha: 'Fecha1', caducidad: 'Caducidad1', stock: 'Stock1' },
    { producto: 'Producto2', seccion: 'Seccion2', fecha: 'Fecha2', caducidad: 'Caducidad2', stock: 'Stock2' },
    // Add more data as needed
  ];

  // Filter the data based on the search term
  const filteredData = tableData.filter((item) => {
    return (
      item.producto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.seccion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.fecha.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.caducidad.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.stock.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="table-container">
        <table className="default">
          <tbody>
            <tr>
              <td>Producto</td>
              <td>Seccion</td>
              <td>Fecha de almacenaje</td>
              <td>Fecha de Caducidad</td>
              <td>Stock</td>
            </tr>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.producto}</td>
                <td>{item.seccion}</td>
                <td>{item.fecha}</td>
                <td>{item.caducidad}</td>
                <td>{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
