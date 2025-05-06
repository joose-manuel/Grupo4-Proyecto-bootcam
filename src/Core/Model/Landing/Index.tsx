import './LandingStyle.css';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const LandingPage = () => {
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const handleRegistro = () => {
    navigate('/registro'); // Navega a la ruta de registro
  };

  const handleLogin = () => {
    navigate('/login'); // Navega a la ruta de inicio de sesión
  };

  return (
    <div className='principal'>
      <div className='Contenedor-fondo'>
        <div className='texto1'>
          <div className='texto01'>
            <img src="src/assets/Vector 1.svg" alt="" />
          </div>

          <div className='texto02'>
            <h1 className='titulo-pagina'>Peponé</h1>
            <p className='subtitulo'>HOTEL GATUNO</p>
          </div>
          <div className='texto3'>
            <p className='parrafo'>Bienvenido a Peponé Hotel Gatuno</p>
            <p className='informacion-final'>
              La mejor plataforma para la gestión de reservas y cuidado de gatos
            </p>
          </div>
        </div>
        <div className='texto2'>
          <div className='botones11'></div>

          <div className='botones2'>
            {/* Botón para registro */}
            <button className='btn-registro' onClick={handleRegistro}>
              <p>Crear cuenta</p>
            </button>

            {/* Botón para iniciar sesión */}
            <button className='btn-login' onClick={handleLogin}>
              <p>Iniciar sesión</p>
            </button>
          </div>
        </div>
      </div>
      <img src="src/assets/Rectangle 7.jpg" className='fondo' alt="" />
    </div>
  );
};

export default LandingPage;