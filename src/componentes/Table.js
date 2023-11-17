// Table.js

import React from 'react';
import './Table.css';
const Table = () => {
  return (
    <div className="table-container">
      <table className="default">
        <tbody>
          <tr>
            <td>Producto</td>
            <td>Seccion</td>
            <td>Fecha de amacenaje</td>
            <td>Fecha de Caducidad</td>
            <td>Stock</td>
          </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
