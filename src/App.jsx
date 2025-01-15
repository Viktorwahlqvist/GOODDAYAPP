import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Greetings from "./pages/Greetings";
import { LanguageProvider } from "./components/LanguageContext/LanguageContext";
function App() {
  return (
    <LanguageProvider>
      <NavBar />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Greetings" element={<Greetings />} />
          <Route path="*" element={<h1>SIDAN finns inte</h1>} />
        </Routes>
      </main>
    </LanguageProvider>
  );
}

export default App;
