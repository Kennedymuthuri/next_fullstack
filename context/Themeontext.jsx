"use client";

import { createContext } from "react";
import useState from 'react';
export const ThemeContext = createContext();

const initialState = "dark";
export const ThemeContextProvider = ({ children }) => {
//   const [mode, setMode] = useState(initialState);

//   const toggle = () => {
//     setMode((prev) => (prev === "dark" ? "light" : "dark"));
//   };
  return (
    <ThemeContext.Provider >
      {children}
    </ThemeContext.Provider>
  );
};
