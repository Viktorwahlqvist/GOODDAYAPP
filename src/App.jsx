import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Greetings from "./pages/Greetings";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Greetings" element={<Greetings />} />
        <Route path="*" element={<h1>SIDAN finns inte</h1>} />
      </Routes>
    </>
  );
}

export default App;
