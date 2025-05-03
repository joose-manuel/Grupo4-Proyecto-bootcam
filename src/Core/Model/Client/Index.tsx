import './StyleClient.css';
import { useUser } from '../../Guards/UserContex'; // Importa el hook useUser

const Clientes = () => {
  const { user } = useUser(); // Obtén los datos del usuario desde el contexto

  return (
    <div>
      <h1>Clientes</h1>
      <p>Información del usuario:</p>
      <ul>
        <li><strong>ID:</strong> {user.id}</li>
        <li><strong>Nombre:</strong> {user.name}</li>
        <li><strong>Apellido:</strong> {user.lastName}</li>
        <li><strong>Email:</strong> {user.email}</li>
        <li><strong>Teléfono:</strong> {user.phone}</li>
      </ul>
    </div>
  );
};

export default Clientes;