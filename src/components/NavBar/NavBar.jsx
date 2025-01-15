import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="">
      <Link to={"/"}>Home</Link>
      <Link to={"/Greetings"}>Greetings</Link>
    </nav>
  );
};
export default NavBar;
