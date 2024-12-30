import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home.jsx";
import Resume from "./Resume.jsx";
import Header from "./Header.jsx";
import Conact from "./Contact.jsx";
import Project from "./Project.jsx";

function App() {
  return(
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/contact" element={<Conact/>} />
          <Route path="/project" element={<Project/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
