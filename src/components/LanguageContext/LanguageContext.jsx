/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("code") || "sv"
  );

  useEffect(() => {
    localStorage.setItem("code", language);
  }, [language]);

  const changeLanguage = (code) => {
    setLanguage(code);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
