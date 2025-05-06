import Munu from '../../../Componentes/MenuLateral';
import './Style.css'
import './controlado'

const Mensaje = () => {
  return (
    


    <div className="contenedor-principal">
    <div className="ventana1">
      <Munu />
    </div>

  

    <div className="ventana2">
      <div className="encabezado">
        <h2 className="bienvenida">
          ¡Bienvenido,<br />Cliente!
        </h2>
        <img src="src/assets/image 1 (3).png" alt="" />
      </div>

      <div className="caja">
        <h3>Veterinario/Cuidador</h3>
      </div>
      <div className="cuadro-historial"></div>
{/* 
      <div className="historial-activo">
        <div className="boton-mas">+</div>
        <div className="texto">El historial esta activo</div>
        <div className="flecha">➤</div>
      </div> */}


      <form action="">
      <input  className="historial-activo" type="text" placeholder='El Historial esta activo' />
      <button  className='Jose' >  
        ➤
      </button>

      </form>

      


    </div>
  </div>
);
};



export default Mensaje