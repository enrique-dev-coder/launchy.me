import { createContext, useContext, useState } from 'react';

export const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  const [lineAnimation, setLineAnimation] = useState(false);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState(0);
  const [english, setEnglish] = useState(false);
  const [countryCode, setCountryCode] = useState('');
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
          categoryFilter,
          setCategoryFilter,
          english,
          setEnglish,
          countryCode,
          setCountryCode,
        }}
      >
        {children}
      </MenuContext.Provider>
    </>
  );
};
