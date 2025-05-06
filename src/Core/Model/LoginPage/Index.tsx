import React, { useState } from "react";
import "./StyleLogin.css"; // Conecta el CSS
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos de react-toastify

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  // Notificaciones personalizadas
  const notifyInvalidEmail = () => toast.error("Por favor, introduce un correo electrónico válido.");
  const notifyShortPassword = () => toast.error("La contraseña debe tener al menos 6 caracteres.");
  const notifySuccess = () => toast.success("Inicio de sesión exitoso. Datos guardados en localStorage.");

  const Cliente = () => {
    navigate('/cliente'); // Navega a la ruta de cliente
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!email.includes("@")) {
      notifyInvalidEmail(); // Notificación de correo inválido
      return;
    }

    if (password.length < 6) {
      notifyShortPassword(); // Notificación de contraseña corta
      return;
    }

    // Guardar los datos en el localStorage
    const userData = { email, password, remember };
    localStorage.setItem("user", JSON.stringify(userData));

    console.log("Datos guardados en localStorage:", userData);
    notifySuccess(); // Notificación de éxito

    // Navegar a la página de cliente después del inicio de sesión
    Cliente();
  };

  return (
    <div className="login-page">
      <div className="login-header">
        <img src="src/assets/Vector 1.svg" alt="Logo" className="logo" />
        <h1>Peponé</h1>
        <p>HOTEL GATUNO</p>
      </div>

      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-footer">
          <label>
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Recuérdame
          </label>
          <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
        </div>

        <button type="submit" className="login-button">
          Iniciar sesión
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
