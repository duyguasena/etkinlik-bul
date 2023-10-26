import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Card from "./pages/CardUI";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route Component={NotFound} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
