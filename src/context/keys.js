import { createContext } from 'react';

const keysContext = createContext({
  validKeys: [],
  setValidKeys: [],
});

export const keysProvider = keysContext.Provider;
export const keysConsumer = keysContext.Consumer;

export default keysContext;
