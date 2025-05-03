import React, { PropsWithChildren, createContext, useState, useContext } from "react";

interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

interface UserContextProps {
  user: User;
  setUser: (user: User) => void; // Función para actualizar el usuario
}

// Crear el contexto
const UserContext = createContext<UserContextProps | undefined>(undefined);

// Obtener los datos del localStorage
const getUserFromLocalStorage = (): User => {
  return JSON.parse(localStorage.getItem("user") || "{}") as User;
};

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>(getUserFromLocalStorage());

  // Función para actualizar el usuario y sincronizar con localStorage
  const updateUser = (newUser: User) => {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  return (
    <UserContext.Provider value={{ user, setUser: updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar el contexto en otras vistas
export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe ser usado dentro de un UserProvider");
  }
  return context;
};

