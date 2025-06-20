"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
}

interface AuthUserContextProps {
  isAuthenticated: boolean;
  handleAuthentication: (status: boolean) => void;
  user?: User | null;
}

const AuthUserContext = createContext<AuthUserContextProps>({
  isAuthenticated: true,
  handleAuthentication: () => {},
});

export function AuthUserProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const handleAuthentication = (status: boolean) => {
    setIsAuthenticated(status);
  };

  useEffect(() => {
    // TODO: Fetch user data from an API or authentication service
    setUser({
      id: "1",
      name: "Henry franz",
      email: "henry@example.com",
      avatarUrl:
        "https://github.com/user-attachments/assets/ff08f517-ccb6-4e63-a4c7-65a7a6773e53",
    });
  }, []);

  return (
    <AuthUserContext.Provider
      value={{ isAuthenticated, handleAuthentication, user }}
    >
      {children}
    </AuthUserContext.Provider>
  );
}

export const useAuthUser = () => {
  const { ...props } = useContext(AuthUserContext);

  return { ...props };
};
