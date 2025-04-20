'use client';
import { createContext, useContext, useState } from 'react';

interface AuthUserContextProps {
  isAuthenticated: boolean;
  handleAuthentication: (status: boolean) => void;
}

const AuthUserContext = createContext<AuthUserContextProps>({
  isAuthenticated: true,
  handleAuthentication: () => {},
});

export function AuthUserProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleAuthentication = (status: boolean) => {
    setIsAuthenticated(status);
  };
  return (
    <AuthUserContext.Provider value={{ isAuthenticated, handleAuthentication }}>
      {children}
    </AuthUserContext.Provider>
  );
}

export const useAuthUser = () => {
  const { isAuthenticated } = useContext(AuthUserContext);

  return { isAuthenticated };
};
