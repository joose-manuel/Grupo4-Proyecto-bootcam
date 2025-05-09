// import './Stle.css';

// import { useEffect } from "react";
// import { toast, ToastContainer } from "react-toastify";
import MunuVeterinario from "../../Componentes/MenuLateralVeterinario";

const RegistroTratamientoveterinario1 = () => {
    // useEffect(() => {
    //     toast.success("¡Inicio de sesión exitoso!");
    //   }, []); // El array vacío asegura que se ejecute solo al montar el componente
    
    //   const [mostrarFormulario, setMostrarFormulario] = useState(false);
      
        // const toggleFormulario = () => {
        //   setMostrarFormulario(!mostrarFormulario);
        // };


    return (
        <>
              <div className='contenedor-principal'>
                <div className="ventana1">
                  <MunuVeterinario />
                </div>
        
                <div className="ventana2">
                  <div className="encabezado">
                    <h2 className='bienvenida'>¡Bienvenido, <br /> Veterinario!</h2>
                    <div className="icono-gato" />
                    <div>
                      <img src="src/assets/image 1 (3).png" alt="" />
                    </div>
                  </div>
                    
                  <div className="caja11">
                    <h3>HistorialClinico</h3>





                  </div>
                 
                  
                </div>
              </div>
              {/* <ToastContainer /> */}
            </>

  
    );
    }


export default RegistroTratamientoveterinario1 ;




