import { createContext, useContext, useState } from 'react';

export const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  const [lineAnimation, setLineAnimation] = useState(false);
  const [loading, setLoading] = useState(true);
  return (
    <>
      <MenuContext.Provider
        value={{
          isOpen,
          setisOpen,
          lineAnimation,
          setLineAnimation,
          loading,
          setLoading,
        }}
      >
        {children}
      </MenuContext.Provider>
    </>
  );
};
