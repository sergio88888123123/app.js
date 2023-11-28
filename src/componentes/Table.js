// Table.js

<<<<<<< HEAD
import React from 'react';
import './Table.css';

const Table = ({ tableData, columnNames, onChangeSearch }) => {
=======
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

>>>>>>> f5f39852b75ceeb98bf59c14a4292fe9b910c806
  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar..."
<<<<<<< HEAD
          onChange={onChangeSearch}
=======
          value={searchTerm}
          onChange={handleSearchChange}
>>>>>>> f5f39852b75ceeb98bf59c14a4292fe9b910c806
        />
      </div>
      <div className="table-container">
        <table className="default">
          <tbody>
            <tr>
<<<<<<< HEAD
              {columnNames.map((columnName, index) => (
                <th key={index}>{columnName}</th>
              ))}
            </tr>
            {tableData.map((item, index) => (
              <tr key={index}>
                {columnNames.map((columnName, columnIndex) => (
                  <td key={columnIndex}>{item[columnName]}</td>
                ))}
=======
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
>>>>>>> f5f39852b75ceeb98bf59c14a4292fe9b910c806
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
