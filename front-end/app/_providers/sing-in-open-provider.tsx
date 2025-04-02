'use client';
import { ComponentProps, createContext, useContext, useState } from 'react';

interface ContextSingInOpenProviderProps {
  isOpen: boolean;
  closeSingIn: VoidFunction;
  openSingIn: VoidFunction;
}

export const ContextSingInOpenProvider = createContext({
  isOpen: false,
} as ContextSingInOpenProviderProps);

export function SingInOpenProvider({
  children,
}: Pick<ComponentProps<'div'>, 'children'>) {
  const [isOpenSingIn, setIsOpenSingIn] = useState<boolean>(false);

  const closeSingIn = () => {
    setIsOpenSingIn(false);
  };
  const openSingIn = () => {
    setIsOpenSingIn(true);
  };

  return (
    <ContextSingInOpenProvider.Provider
      value={{ isOpen: isOpenSingIn, closeSingIn, openSingIn }}
    >
      {children}
    </ContextSingInOpenProvider.Provider>
  );
}

export const useSingInOpen = () => {
  const { isOpen, closeSingIn, openSingIn } =
    useContext<ContextSingInOpenProviderProps>(ContextSingInOpenProvider);

  return { isOpen, closeSingIn, openSingIn };
};
