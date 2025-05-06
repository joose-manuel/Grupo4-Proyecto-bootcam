import './Style.css'
import './controlado'
import Menu from '../../../Componentes/MenuLateral'; // Asegúrate que el nombre del componente es 'Menu'
import { useState } from 'react';
const RegistroAnimal = () => {
  
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
        <div className="icono-gato"></div>
      </div>

      <div className="caja">
        <div className="cuadro-historial">
          <div className="tabla-encabezado">
            <h3>Mis mascotas</h3>
            <button className="btn-amarillo" onClick={toggleFormulario}>
              +Agregar registro
            </button>
          </div>

          <div className="tabla-contenido">
            Mascota1
          </div>

          {mostrarFormulario && (
            <div className="formulario-popup">
              <h3>Registro de mascota</h3>
              <input type="text" placeholder="Nombre de la mascota" />
              <input type="text" placeholder="Raza de la mascota" />
              <input type="text" placeholder="edad" />
              <input type="file" placeholder="Historial"  />
              <button className="btn-amarillo">+Agregar registro</button>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}

export default RegistroAnimal