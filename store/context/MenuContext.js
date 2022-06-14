import { createContext, useContext, useState, useMemo } from 'react';

const MenuContext = createContext([]);

const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const providerValue = useMemo(() => ([isMenuOpen, setIsMenuOpen]), [isMenuOpen]);

  return <MenuContext.Provider value={providerValue}>{children}</MenuContext.Provider>;
}

export const useMenu = () => useContext(MenuContext);

export default MenuProvider;