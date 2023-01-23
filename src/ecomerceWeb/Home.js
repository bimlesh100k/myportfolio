import React from "react";
import styled from "styled-components";
import videoBg from "../videos/videoBg.mp4";
import { Button } from "../style/Button";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { NavLink } from "react-router-dom";
// import resume from "../images/resume.pdf";

const Home =()=>{
    return(
      <>
        <Wrapper>
      <video src={videoBg} autoPlay loop muted />
      <div className="container">
      <h1 className="first-line">Front-End Web Developer</h1>
      <h1 className="first-sec">Welcome to my Site</h1>
      <h2 className="first-third">I am Asmita</h2>
      <h2 className="first-fourth">I like to craft solid and scalable frontend prodouct with great user experiences.</h2>
      <div className="btn">
      <NavLink to="/about">
      <Button className="button"> About Me</Button>
      </NavLink>

      {/* <a href={resume} >
      <Button className="button">my Resume</Button>
      </a> */}
      <NavLink to="/contact">
      <Button className="button"> Contact Me</Button>
      </NavLink>
      </div>
      </div>
      
        </Wrapper>
        <About />
        <Portfolio />
        <Services />
        <Contact />
        </>
    )
};
const Wrapper = styled.section`
width:100%;
height:100vh;

video{
  width:100%;
  height:100%;
  object-fit:cover;
background:#232a34;

}
.container{
  
  ${'' /* position:absolute;
  width:100%;
  height:100%;
  display:flex;
  top:0;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:white; */}
  position:absolute;
  margin-top:-30rem;
  margin-left:10rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:white;

  .first-line{
    font-size:2.7rem;
    text-align: center;
  }
  .first-sec{
    font-size:2.5rem;
  }
  .first-third{
    font-size:2rem;
  }
  .btn{
    padding-top:2rem;
    display:flex;
justify-content:center;
display-direction:column;
gap:2rem;
  }
}
@media (max-width:${({ theme })=> theme.media.tab}){
     .container{
         padding-left: 1rem;
         padding-right:1rem;
         padding-top:-40rem;
     } 
     @media (max-width:${({ theme })=> theme.media.mobile}){
     .container{
        
         padding-left: 0rem;
         margin-left:-0rem;
         margin-top:-44rem;
     } 
     }
}
`
;
export default Home;