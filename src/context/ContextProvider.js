import React, { useState } from "react";

const Context = React.createContext({});

const ContextProvider = ({ children }) => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const loginModalHandler = (c) => {
    setLoginModalOpen((prev) => !prev);
  };
  return (
    <Context.Provider value={{ loginModalHandler, loginModalOpen }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
