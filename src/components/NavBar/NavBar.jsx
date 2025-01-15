import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-link" to={"/"}>
        Home
      </Link>
      <Link className="navbar-link" to={"/Greetings"}>
        Greetings
      </Link>
    </nav>
  );
};
export default NavBar;
