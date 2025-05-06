import './Style.css'
import './controlado'
import React, { useState } from 'react';
import Menu from '../../../Componentes/MenuLateral';
const RegistroTratamiento = () => {
      const [mostrarFormulario, setMostrarFormulario] = useState(false);
    
      const toggleFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
      };
  
  return (
    <div className="contenedor-principal">
    <div className="ventana1">
      <Menu />
    </div>

    <div className="ventana2">
      <div className="encabezado">
        <h2 className="bienvenida">
          ¡Bienvenido,<br />Cliente!
        </h2>
        <img src="src/assets/image 1 (3).png" alt="" />
      </div>

      <div className="caja">
        <div className="cuadro-historial">
          <div className="tabla-encabezado">
            <h3>Registro Tratamiento</h3>
            <button className="btn-amarillo" onClick={toggleFormulario}>
              +Agregar registro
            </button>
          </div>

          <div className="tabla-contenido">
            Mascota1
          </div>

          {mostrarFormulario && (
            <div className="formulario-popup">
              <h3>Registo Tratamientos</h3>
              <select>
                <option value="">Mis Mascotas </option>
                <option value="">Gamusa </option>
              </select>
              <input type="text" placeholder="Medicamentos" />
              <input type="text" placeholder="Veces" />
              <input type="text" placeholder=" Mc/Pastillas" />
              <button className="btn-amarillo">+Agregar registro</button>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}

export default RegistroTratamiento 