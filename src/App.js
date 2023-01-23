import React from "react";
import Home from "./ecomerceWeb/Home";
import Contact from "./ecomerceWeb/Contact";
import Services from "./ecomerceWeb/Services";
import About from "./ecomerceWeb/About";
import Footer from "./ecomerceWeb/Footer";
import Header from "./ecomerceWeb/Header";
// import Error from "./Error";
import { BrowserRouter , Routes , Route , } from "react-router-dom";
import {GlobalStyle} from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Portfolio from "./ecomerceWeb/Portfolio";
import GoToTop from "./GoToTop";
const App = () => {
 
    const theme ={
        colors:{
            heading:"rgb()24 24 29)",
            text:"rgb(24 24 29)",
            white:"#fff",
            black:"#212529",
            helper:"#8490ff",
            bg:"rgb(249 249 200)",
            footer_bg:"#0a1435",
            btn:"rgb(98 84 243)",
            border:"rgba(98,84, 234,0.5)",
            hr:"#ffffff",
            gradient:"liner-gradient(0deg,rgb(132 144 255) 0% rgb(98 189 252)100%",
            shadow:"rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15)0px 0px 0px 1px",
            shadowSupport:"rgba(0, 0, 0, 0.16)0px 1px 4px",
        },
        media:{ mobile: "768px", tab:"998px"},
    };
    return (
        <ThemeProvider theme={theme}>
        <GlobalStyle/>
        
        <BrowserRouter>
       <Header />
       <Routes>
        <Route path="/myportfolio" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Services/>} />
        <Route path="/potfolio" element={<Portfolio/>} />
        {/* <Route path="*" element={<Error/>} /> */}
        </Routes>
         <GoToTop />
        <Footer />
        </BrowserRouter>
        </ThemeProvider>      
    )
};

export default App;