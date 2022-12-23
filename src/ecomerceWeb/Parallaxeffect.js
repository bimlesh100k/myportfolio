
import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../style/Button";
import styled from "styled-components";
const Parallaxeffect =()=>{
    return(
       <Wrapper classNamee="section section-paraeffect">
       <div className="overlay">
        <div className="contain">
            <h2>I am <span>avilable</span> for freelancing</h2>
            <p>I want to do freelancing for different client or organisation.I will do my best for their project.</p>
            <NavLink to="/contact">
                <Button className="btn">HIRE ME</Button>
            </NavLink>

        
        </div>
       </div>

       </Wrapper>
    )
};
const Wrapper = styled.section`
background-color:#000000c4;

text-align: center;
    padding-top: 4rem;
    padding-bottom:3rem;
   
    p {
    padding-bottom: 1rem;
    font-size:1.2rem;
}
span{
    color:lawngreen;
}
${'' /* parallaxeeffect======== */}
.section-paraeffect {
    ${'' /* background-image: url("../public/Mypic/dekstop.jpg");
    width:10%;
    height:30%; */}
    ${'' /* background-image: url("../public/Mypic/dekstop.jpg"); */}
    ${'' /* background-image: url("./dekstop.jpg"); */}
    ${'' /* background: url("./dekstop.jpg"); */}
${'' /* background-attachment:fixed;
position:relative;
transition:all 0.7s linear; */}
    ${'' /* background-size:100%; */}
}
${'' /* .overlay{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:blue;
    opacity:0.7;
} */}

`;
export default Parallaxeffect;