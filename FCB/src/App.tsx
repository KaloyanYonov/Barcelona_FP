import Header from "./reusable/Header";
import Footer from "./reusable/Footer";
import Home from "./pages/Home";
import Trophies from "./pages/Trophies";
import Squad from "./pages/Squad";
import Legends from "./pages/Legends";
import History from "./pages/History";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Transition from "./reusable/Transition";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Transition><Home /></Transition>} />
          <Route path="/history" element={<Transition><History /></Transition>} />
          <Route path="/squad" element={<Transition><Squad /></Transition>} />
          <Route path="/trophies" element={<Transition><Trophies /></Transition>} />
          <Route path="/legends" element={<Transition><Legends /></Transition>} />
          <Route path="*" element={<Transition><Home /></Transition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
