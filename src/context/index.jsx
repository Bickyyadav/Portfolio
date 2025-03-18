import { createContext } from 'react';

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const myName = 'Beekey';

  return <BioContext.Provider value={myName}>{children}</BioContext.Provider>;
};
