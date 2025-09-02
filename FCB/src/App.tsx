import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./reusable/Header"
import Footer from "./reusable/Footer"
import Home from "./pages/Home"


function App() {
  
  return(
    <>
      <Header/>
      <Home/>
      <Footer/>

    </>
  )
  
}

export default App
