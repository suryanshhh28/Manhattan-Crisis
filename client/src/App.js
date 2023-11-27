import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Donate from "./pages/Donate";
import HomePage from "./pages/HomePage";
import Emergency from "./pages/Emergency";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/donate" element={<Donate />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
