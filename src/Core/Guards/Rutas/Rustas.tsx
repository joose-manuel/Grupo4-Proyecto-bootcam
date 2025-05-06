
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login  from "../../Model/LoginPage/Index";
import Registro from "../../Model/Registro/Index";
import Veterinario from "../../Model/Veterinario/Index";
import Admin from "../../Model/Admin/Index";
import Clientes from "../../Model/Client/Index";
import Landing from "../../Model/Landing/Index";
import { UserProvider } from "../UserContex";
import Mensaje from "../../Model/Client/Mensaje";
import RegistroTratamiento from "../../Model/Client/RegistroTrataiento";
import RegistroAnimal from "../../Model/Client/Registronimal";
import RegistroCitas from "../../Model/Client/RegistroCitas";
import Citasveterinario from "../../Model/Veterinario/Citas";
import Mensajeveterinario from "../../Model/Veterinario/Mensaje";
import RegistroCitasveterinario from "../../Model/Veterinario/RegistroCitas";
import RegistroTratamientoveterinario from "../../Model/Veterinario/Index";

function Rustas() {
  return (
    <UserProvider>
      <Router>
      <Routes>
        Ruta prinLoginl
        {/* Rutas de la aplicación */}
        <Route path="/" element={<Landing />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/veterinario" element={<Veterinario />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cliente" element={<Clientes />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        
        {/* Clientes inicio */}
        <Route path="/mensaje" element={<Mensaje />} />
        <Route path="/regitroCitas" element={<RegistroCitas/>} />
        <Route path="/regitroAnimal" element={<RegistroAnimal />} />
        <Route path="/regitroTratamiento" element={<RegistroTratamiento />} />
         {/* Clientes Fin */}


        {/* Veterinario Inicio */}
        <Route path="/Citasvetrinario" element={<Citasveterinario />} />
        <Route path="/Mensajevetrinario" element={<Mensajeveterinario />} />
        <Route path="/RegistroCitasevetrinario" element={<RegistroCitasveterinario />} />
        <Route path="/RegistroTratamientovetrinario" element={<RegistroTratamientoveterinario />} />

        {/* <Route path="/contact" element={<Contact />} /> */}

        {/* Ruta para manejar páginas no encontradas */}
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </Router>
    </UserProvider>
    
  );
}

export default Rustas;