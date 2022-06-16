import { createContext, useContext, useState } from 'react';

export const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  const [lineAnimation, setLineAnimation] = useState(false);
  return (
    <>
      <MenuContext.Provider
        value={{ isOpen, setisOpen, lineAnimation, setLineAnimation }}
      >
        {children}
      </MenuContext.Provider>
    </>
  );
};
