import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = ()=> {
    return(
       <MainHeader>
        <NavLink to="/">
        <div className="logo">
            <h2> PORT<span>folio</span></h2>
         </div>
        </NavLink>
        <Navbar />
       </MainHeader>
       
    );
};
const MainHeader = styled.header`
padding: 0 4.8rem;
height: 5rem;
${'' /* background-color: ${({ theme})=> theme.colors.bg}; */}
background-color:green;
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


`;

 
export default Header;