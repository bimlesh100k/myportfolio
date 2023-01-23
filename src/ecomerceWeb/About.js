import React from "react";
import styled from "styled-components";
import { Button } from "../style/Button";
import biopic1 from "../images/biopic1.jpg"
import resume from "../images/resume.pdf"

// const PDF_FILE = "http://localhost:3000/about/resume.pdf"
const About = ()=> {
//    const downloadFileAtURL= (url) => {

//    }
    return(
        
           <Wrapper>
            <div className="container grid grid-two-column">
                <div className="bio-image">
                    {/* <img src="./Mypic/biopic1.jpg" alt="img"/> */}
                    <img src={biopic1} alt="bio" />
                </div>
                {/* bio right side data */}
            <div className="bio-data">
                    <h2 className="common-heading">my bio-data</h2>
                    <p>Hi,I'm Asmita and I graduated from University of Gurugram,Haryana in 2022 with a  degree in Bachelor of Computer Application. My interest aren front end engineering  .</p>
                    

                <div className="bio-data-stats">
                    
                    <div className="bio-stats">
                        <h3>HTML</h3>
                        <div className="bio--progress-bar bio-progress-2">
                            <span>99%</span>
                        </div>
                    </div>
                    <div className="bio-stats">
                        <h3>CSS</h3>
                        <div className="bio--progress-bar bio-progress-3">
                            <span>85%</span>
                        </div>
                    </div>
                    <div className="bio-stats">
                        <h3>JavaScript</h3>
                        <div className="bio--progress-bar bio-progress-4">
                            <span>70%</span>
                        </div>
                    </div>
                    <div className="bio-stats">
                        <h3>Reactjs</h3>
                        <div className="bio--progress-bar bio-progress-5">
                            <span>87%</span>
                        </div>
                    </div>
                    <div className="bio-stats">
                        <h3>Wordpress</h3>
                        <div className="bio--progress-bar">
                            <span>80%</span>
                        </div>
                    </div>
                </div>
                <div className="bio-btn">
                <a href={resume} download="resume">
                        <Button className="btn">Download CV</Button>
                        </a>
                        {/* <Button className="btn" onClick={()=>{downloadFileAtURL(PDF_FILE)}}>Download CV</Button> */}
                    </div>
            </div>
            </div>
           </Wrapper>
        
    )
};

const Wrapper = styled.section`
background-color:black;
color:white;
.container.grid.grid-two-column {
    padding-top: 5rem;
    padding-bottom: 2rem;
}
p{
    font-size:1.2rem;
}
h3{
    font-size: 1.3rem;
}
.bio-image {
    display: flex;
    justify-content: center;
    align-items:center;
   
}
.bio-image img{
width:94%;
height: 100%;
box-shadow:-1.5rem -1.5rem 0 0 green;
display:inline-block;
}
h2.common-heading {
    text-align: left;
    text-transform: uppercase;
    text-transform: capitalize;
    margin-top: -1.9rem;
    position: relative;
    font-weight: 700;
    font-size: 2rem;
}
h2.common-heading::before{
    content:"";
    position:absolute;
    top:120%;
    left:0;
    width:1rem;
    height:1rem;
    border-radius:50%;
    background:green;
 }
 h2.common-heading::after{
    content:"";
    position:absolute;
    top:135%;
    left:0;
    width:15rem;
    height:0.1rem;
    background:green;
 }
 .bio-data-stats {
    ${'' /* padding: 1.5rem 0; */}
    padding-top:1rem;
    padding-bottom:1.6rem;
    gap: 1rem;
    display: flex;
    flex-direction: column; 
}
.bio--progress-bar {
    width: 97%;
    height: 0.7rem;
    background-color: gainsboro;
    border-radius: 3rem;
    position:relative;
}
.bio-stats h3 {
    margin-bottom: 0.5rem;
}
.bio--progress-bar::before{
    content:"";
    position:absolute;
    top:0;
    left:0;
    height:inherit;
    width:80%;
    border-radius:3rem;
    background: linear-gradient(to right,rgb(2, 117, 54),green,lawngreen );
    ${'' /* background:radial-gradient () */}
}
.bio-progress-2::before{
    width:99%; 
}
.bio-progress-3::before{
    width:85%; 
}
.bio-progress-4::before{
    width:70%; 
}
.bio-progress-5::before{
    width:87%; 
}
.bio--progress-bar span {
    position: absolute;
    top: 1rem;
    width: 2rem;
    height: 1rem;
    font-size: 0.9rem;
    background: greenyellow;
    color: cornflowerblue;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:0.4rem;
}
.bio--progress-bar span {
    left: 75%;
}
.bio-progress-2 span {
    left: 95%;
}
.bio-progress-3 span {
    left: 80%;
}
.bio-progress-4 span {
    left: 65%;
}
.bio-progress-5 span {
    left: 82%;
}
.bio--progress-bar span::after {
content:"";
position:absolute;
width:0;
height:0;
border:0.5rem solid greenyellow;
border-color:transparent;
border-bottom-color:greenyellow;
top:-1rem;
}
`;
export default About;