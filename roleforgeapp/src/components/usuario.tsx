import React, { createContext, useState, useContext, ReactNode } from 'react';

// Defina o tipo para os dados do usuário
type User = {
    id: string;
  nome: string;
  email: string;
  campanha: string;
  // outros campos, se necessário
};

// Defina o tipo para o contexto
type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

// Crie o contexto
const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

// Crie um componente de provedor para envolver seu aplicativo
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Criar um hook personalizado para acessar o contexto
export const useUser = () => useContext(UserContext);