import { useState } from "react";
import "./GreetingsComp.css";
import { useLanguage } from "../LanguageContext/LanguageContext";

/* Greeting component that checks the stored language using the useLanguage hook.
   It then changes the language based on the language code, and also adjusts the greeting 
   depending on the time of day (morning, afternoon, evening). An array of objects is used 
   to find the correct greeting words for each language. */

const GreetingsComp = () => {
  const { language } = useLanguage();
  const [name, setName] = useState("");

  const getGreetingMessage = (languageCode) => {
    const currentHour = new Date().getHours();
    let timeOfDay = "";

    if (currentHour < 12) timeOfDay = "morning";
    else if (currentHour < 18) timeOfDay = "afternoon";
    else timeOfDay = "evening";

    const greetingsByLanguage = {
      en: {
        morning: "Good morning",
        afternoon: "Good afternoon",
        evening: "Good evening",
      },
      sv: {
        morning: "God morgon",
        afternoon: "God eftermiddag",
        evening: "God kväll",
      },
      fr: {
        morning: "Bonjour",
        afternoon: "Bon après-midi",
        evening: "Bonsoir",
      },
      es: {
        morning: "Buenos días",
        afternoon: "Buenas tardes",
        evening: "Buenas noches",
      },
      de: {
        morning: "Guten Morgen",
        afternoon: "Guten Tag",
        evening: "Guten Abend",
      },
      it: {
        morning: "Buongiorno",
        afternoon: "Buon pomeriggio",
        evening: "Buona sera",
      },
    };

    return greetingsByLanguage[languageCode]?.[timeOfDay];
  };
  /* Accessing an array of objects using a language code for example "sv".
   The greeting is then determined based on the time of day, 
   with conditional logic (if-else statements) to select the appropriate greeting. */
  const greetingsMessage = getGreetingMessage(language);

  return (
    <>
      <p className="name-text">Enter your name here:</p>

      <form className="input-form">
        <input
          className="input-text"
          type="text"
          placeholder="Ener your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>

      {name && (
        <h2>
          {greetingsMessage}, {name}!
        </h2>
      )}
    </>
  );
};

export default GreetingsComp;
