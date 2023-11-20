import React, { useState } from 'react';
export const Form = () => {
 
  const [selectedDate, setSelectedDate] = useState(null);



  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    };
  
  
    return (
        
        <div className="content">
         
            <div className="form-group">
              <label htmlFor="producto">Producto</label>
              <input type="text" id="producto" name="producto" />
              <label htmlFor="seccion">Sección</label>
              <input type="text" id="seccion" name="seccion" />
              <label htmlFor="fecha">Fecha de almacenaje</label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                value={selectedDate}
                onChange={handleDateChange}
              />
              <label htmlFor="fechacaducidad">Fecha de Caducidad</label>
              <input
                type="date"
                id="fechacaducidad"
                name="fechacaducidad"
              />
            <button  type="submit">Enviar</button >
            </div>
            
         
        </div>
   
  );
};