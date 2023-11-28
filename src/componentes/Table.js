// Table.js

import React from 'react';
import './Table.css';

const Table = ({ tableData, columnNames, onChangeSearch }) => {
  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar..."
          onChange={onChangeSearch}
        />
      </div>
      <div className="table-container">
        <table className="default">
          <tbody>
            <tr>
              {columnNames.map((columnName, index) => (
                <th key={index}>{columnName}</th>
              ))}
            </tr>
            {tableData.map((item, index) => (
              <tr key={index}>
                {columnNames.map((columnName, columnIndex) => (
                  <td key={columnIndex}>{item[columnName]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
