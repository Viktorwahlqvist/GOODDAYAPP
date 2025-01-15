/* eslint-disable react/prop-types */
// Universal button to display all languages
import "./UniversalButton.css";
const UniversalButton = ({ language, onClick }) => {
  return (
    <button className="universal" onClick={onClick}>
      <img src={language.link} alt={language.name} />
      <h3>{language.name}</h3>
    </button>
  );
};
export default UniversalButton;
