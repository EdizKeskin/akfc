import { createContext, useState, useEffect, useContext } from "react";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "tr-TR");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);
  const values = {
    lang,
    setLang,
  };
  return (
    <LangContext.Provider value={values}>{children}</LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
