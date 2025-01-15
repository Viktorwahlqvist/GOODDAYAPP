/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";

// Creates a context object to pass language to other components.
const LanguageContext = createContext();

// Function to get the selected language stored in LanguageContext.
export const useLanguage = () => {
  return useContext(LanguageContext);
};

/* LanguageProvider works as a provider for all children inside of LanguageProvider. 
Takes children as a prop. */
export const LanguageProvider = ({ children }) => {
  /*useState variable to keep track of the current language. 
  Checks if localStorage has a language saved. */
  const [language, setLanguage] = useState(
    localStorage.getItem("code") || "sv"
  );

  /* useEffect to save the language. It runs every time the language is updated, 
  ensuring it is saved even if the user reloads the page. */
  useEffect(() => {
    localStorage.setItem("code", language);
  }, [language]);

  /* Function to change the language. Takes a language code as a parameter and 
  calls setLanguage with it. */
  const changeLanguage = (code) => {
    setLanguage(code);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
