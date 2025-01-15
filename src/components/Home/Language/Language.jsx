import { useLanguage } from "../../LanguageContext/LanguageContext";
import UniversalButton from "../../Buttons/UniversalButton";
import { Link } from "react-router-dom";

const Language = () => {
  const { language, changeLanguage } = useLanguage();

  const allLanguages = [
    {
      name: "English",
      code: "en",
      link: "https://flagpedia.net/data/flags/w702/gb.webp",
    },
    {
      name: "Svenska",
      code: "sv",
      link: "https://flagpedia.net/data/flags/w702/se.webp",
    },
    {
      name: "Français",
      code: "fr",
      link: "https://flagpedia.net/data/flags/w702/fr.webp",
    },
    {
      name: "Español",
      code: "es",
      link: "https://flagpedia.net/data/flags/w702/es.webp",
    },
    {
      name: "Deutsch",
      code: "de",
      link: "https://flagpedia.net/data/flags/w702/de.webp",
    },
    {
      name: "Italiano",
      code: "it",
      link: "https://flagpedia.net/data/flags/w702/it.webp",
    },
  ];

  const handleLanguageChange = (code) => {
    changeLanguage(code);
  };

  return (
    <>
      <p>{`Selected Language: ${language.toUpperCase()}`}</p>
      <section className="grid-container">
        {allLanguages.map((lang) => (
          <Link
            key={lang.code}
            to="/greetings"
            onClick={() => handleLanguageChange(lang.code)}
          >
            <UniversalButton language={lang} />
          </Link>
        ))}
      </section>
    </>
  );
};

export default Language;
