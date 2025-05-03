
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login  from "../../Model/LoginPage/Index";
import Registro from "../../Model/Registro/Index";
import Veterinario from "../../Model/Veterinario/Index";
import Admin from "../../Model/Admin/Index";
import Clientes from "../../Model/Client/Index";
import Landing from "../../Model/Landing/Index";
import { UserProvider } from "../UserContex";

function Rustas() {
  return (
    <UserProvider>
      <Router>
      <Routes>
        Ruta prinLoginl
        {/* Rutas de la aplicación */}
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/veterinario" element={<Veterinario />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cliente" element={<Clientes />} />
        <Route path="/landing" element={<Landing />} />
        {/* <Route path="/contact" element={<Contact />} /> */}

        {/* Ruta para manejar páginas no encontradas */}
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </Router>
    </UserProvider>
    
  );
}

export default Rustas;