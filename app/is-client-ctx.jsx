import React from "react";
import { useEffect, useLayoutEffect, createContext, useState } from "react";


const IsClientCtx = createContext(false);

export const IsClientCtxProvider = ({ children }) => {
  
  if(typeof window !== 'undefined') 
    {
      const [isClient, setIsClient] = useState(false);
      useEffect(() => setIsClient(true), []);
  return (
    <IsClientCtx.Provider value={isClient}>{children}</IsClientCtx.Provider>
  );}
};

export function useIsClient() {
  return useContext(IsClientCtx);
}