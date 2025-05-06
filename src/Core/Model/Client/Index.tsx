import './StyleClient.css';
import Munu from '../../Componentes/MenuLateral/index';

const Clientes = () => {
  return (
    <div className='contenedor-principal'>
      <div className="ventana1">
        <Munu />
      </div>

      <div className="ventana2">
        <div className="encabezado">
          <h2 className='bienvenida'>¡Bienvenido, <br /> Cliente!</h2>
          <div className="icono-gato"  />
          <div>
            <img src="src/assets/image 1 (3).png" alt="" />
          </div>
        </div>

        <div className="caja">
          <h3>Proxima citas</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div className="caja">
          <h3>Historial de tratamientos</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
