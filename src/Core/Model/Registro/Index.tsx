import React, { useState } from "react";
import "./StyleRegistro.css";

import { useNavigate } from 'react-router-dom';
const Registro: React.FC = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
        
    <div className="form-container">
      <img src="src/assets/Vector 1.svg" alt="Logo" className="logo" />
      <h2>Crear Cuenta</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={formData.correo}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          value={formData.contraseña}
          onChange={handleChange}
          required
        />
        <button type="submit">Crear Cuenta</button>
        <p>¿Ya tienes una cuenta? <a onClick={() => navigate('/')}>Inicia sesion</a></p>
      </form>
    </div>
      
  );
};

export default Registro;
