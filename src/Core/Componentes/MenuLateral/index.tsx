
import { useNavigate } from 'react-router-dom';
import './Style.css';


const Munu =() => {

    const navigate = useNavigate(); // Hook para navegar entre rutas

    const handleRegistro = () => {
        navigate('/registro'); // Navega a la ruta de registro
    };

    const RegistroDegatos = () => {
        navigate('/regitroAnimal'); // Navega a la ruta de registro
    };


    return(
        <div className='contenedor-principal'>
        <div className='contenedor-iconos'>
            <div className='contenedor0'>
                <img src="src/assets/Vector 1.svg" alt="" />
            </div>

            <div className='contenedor1'>
                <p className='titulo1'>
                    Peponé


                </p>
            </div>
            <div className='contenedor2'>
                
                <p className='texto2'>
                    HOTEL GATUNO
                </p>
            </div>

            <div className='contenedor3'>
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#83A0A7"><path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z"/></svg>
                    <button  className='btn' onClick={handleRegistro}>
                            Dashboard
                    </button>
            </div>

            <div className='contenedor3'>
                {/* Icono */}
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#83A0A7"><path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z"/></svg>
                    <button  className='btn' onClick={RegistroDegatos}>
                        Registro de gatos
                    </button>

            </div>

            <div className='contenedor3'>

            </div>

            <div className='contenedor3'>

            </div>

            <div className='contenedor3'>

            </div>
            |
        </div>





    </div>


    );
}

    
export default Munu;