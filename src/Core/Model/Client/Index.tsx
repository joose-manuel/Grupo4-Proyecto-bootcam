import './StyleClient.css';
import Munu from '../../Componentes/MenuLateral/index';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';

const Clientes = () => {
  // Notificación de bienvenida
  useEffect(() => {
    toast.success("¡Inicio de sesión exitoso!");
  }, []); // El array vacío asegura que se ejecute solo al montar el componente

  return (
    <>
      <div className='contenedor-principal'>
        <div className="ventana1">
          <Munu />
        </div>

        <div className="ventana2">
          <div className="encabezado">
            <h2 className='bienvenida'>¡Bienvenido, <br /> Cliente!</h2>
            <div className="icono-gato" />
            <div>
              <img src="src/assets/image 1 (3).png" alt="" />
            </div>
          </div>

          <div className="caja11">
            <h3>Próximas citas</h3>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div className="caja11">
            <h3>Historial de tratamientos</h3>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Clientes;
