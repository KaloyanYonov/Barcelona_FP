import Header from "./reusable/Header";
import Footer from "./reusable/Footer";
import Home from "./pages/Home";
import Trophies from "./pages/Trophies";
import Squad from "./pages/Squad";
import Legends from "./pages/Legends";
import History from "./pages/History";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/squad" element={<Squad />} />
        <Route path="/trophies" element={<Trophies/>} />
        <Route path="/legends" element={<Legends/>}/>
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
