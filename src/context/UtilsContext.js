import { createContext, useContext, useState } from "react";

const UtilsContext = createContext(null);

export const UtilsContextProvider = ({children}) => {

  const [isSideBar, setIsSideBar] = useState(false);
  const [mobileShow, setMobileShow] = useState(false);

  return <UtilsContext.Provider value={{isSideBar, setIsSideBar, mobileShow, setMobileShow}}>
    {children}
  </UtilsContext.Provider>
}

export const useUtils = () => {
  const utilsContext = useContext(UtilsContext);
  if(!utilsContext) return null;
  return utilsContext;
}