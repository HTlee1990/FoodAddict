import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

const Context = React.createContext({});

const ContextProvider = ({ children }) => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const setLoginHandler = () => {
    localStorage.setItem("loggd-in", true);
  };

  const loginModalHandler = () => {
    setLoginModalOpen((prev) => !prev);
    console.log(loginModalOpen);
  };
  return (
    <Context.Provider
      value={{ setLoginHandler, loginModalHandler, loginModalOpen }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
