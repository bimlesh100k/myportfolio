import React from "react";
import About from "./MyPhotfolio/About";
import Resume from "./MyPhotfolio/Resume";
import Contact from "./MyPhotfolio/Contact";
import Project from "./MyPhotfolio/Project";
import Navbar from "./MyPhotfolio/Navbar";
import Home from "./MyPhotfolio/Home";
import Error from "./MyPhotfolio/Error";
import {GlobalStyle} from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = ()=> {
  return (
<>
<GlobalStyle />
<BrowserRouter>
<Navbar />
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/resume" element={<Resume />}/>
    <Route path="/project" element={<Project />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/element" element={<Error />}/>
  </Routes>
</BrowserRouter>
</>
  );
};

export default App;
