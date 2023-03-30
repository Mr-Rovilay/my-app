import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Article from "./components/Article";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Single from "./components/single";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Article/:name" element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;
