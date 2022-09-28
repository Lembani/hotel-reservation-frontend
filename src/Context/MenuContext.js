import { createContext, useState } from 'react';

const MenuContext = createContext({});

export const MenuProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => {
    setSideBar(true);
  };

  return (
    <MenuContext.Provider
      value={{
        sideBar,
        setSideBar,
        showSideBar,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
