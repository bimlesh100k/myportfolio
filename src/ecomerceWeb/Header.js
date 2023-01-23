import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = ()=> {
    return(
       <MainHeader>
        <NavLink to="/myportfolio">
        <div className="logo">
            {/* <h2> PORT<span>folio</span></h2> */}
            <ul>
                <li>P</li>
                <li>O</li>
                <li>R</li>
                <li>T</li>
                <li>F</li>
                <li>O</li>
                <li>L</li>
                <li>I</li>
                <li>O</li>
            </ul>
         </div>
        </NavLink>
        <Navbar />
       </MainHeader>
       
    );
};
const MainHeader = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Mochiy+Pop+One&family=Pacifico&display=swap');
padding: 0 4.8rem;
height: 5rem;
${'' /* background-color: ${({ theme})=> theme.colors.bg}; */}
background-color:black;
display: flex;
justify-content: space-between;
align-items: center;
text-decoration: none;
span{
        color:lawngreen;
    }
    h2{
        font-size:1.6rem;
    }
.logo{
    display:flex;
    text-decoration: none;
    align-items:center;
    color:white;
}
.logo ul{
display:flex;

}
li{
   
    ${'' /* font-family: 'Pacifico', cursive; */}
    font-family: fangsong;
    font-size: 1.6rem;
    color:lawngreen;
    font-weight: bold;
    padding-left:3px;
    animation: light 1.5s linear infinite;
}
li:first-child{
    padding-left:0%;
}
@keyframes light {
    0%{
        ${'' /* color:#576574; */}
        color:white;
        text-shadow:none;
    }
    90%{
        color:greenyellow;
        text-shadow:none;
    }
    100%{
        ${'' /* color:#f1c40f; */}
        color:lawngreen;
        text-shadow: 0 0 1rem #f1c40f, 0 0 1rem #f1c40f;
    }
}
li:nth-child(1){
    animation-delay: 0s;
}
li:nth-child(2){
    animation-delay: 0.1s;
}
li:nth-child(3){
    animation-delay: 0.2s;
}
li:nth-child(4){
    animation-delay: 0.3s;
}
li:nth-child(5){
    animation-delay: 0.4s;
}
li:nth-child(6){
    animation-delay: 0.5s;
}
li:nth-child(7){
    animation-delay: 0.6s;
}
li:nth-child(8){
    animation-delay: 0.7s;
}
li:nth-child(9){
    animation-delay: 0.8s;
}

@media (max-width:998px) {
    ul{
        margin-left: -4rem;
    }
}
`;

 
export default Header;