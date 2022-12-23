import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenuCheese, CgCloseR } from "react-icons/cg";
import { useState } from "react";
 const Navbar =()=>{
    const[openMenu, setOpenMenu] = useState(false);
    return(
        <Nav>
            <div className={openMenu ? "menuIcon active" :"menuIcon"}>
                <ul className="navbar-list">
                    <li>
                        <NavLink className="navbar-link"  onClick={()=> setOpenMenu(false)} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link"  onClick={()=> setOpenMenu(false)} to="/about">About</NavLink>
                    </li>
                    {/* <li>
                        <NavLink className="navbar-link"  onClick={()=> setOpenMenu(false)} to="/service">Services</NavLink>
                    </li> */}
                    <li>
                        <NavLink className="navbar-link"  onClick={()=> setOpenMenu(false)} to="/potfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link"  onClick={()=> setOpenMenu(false)} to="/contact">Contact</NavLink>
                    </li>
                 <li>
                        <NavLink className="navbar-link"  onClick={()=> setOpenMenu(false)} to="/contant"><button>HIRE ME</button></NavLink>
                    </li> 
                </ul>
                {/* // nav icon== */}
                <div className="mobile-navbar-btn">
                    <CgMenuCheese name="menu-outline" className="mobile-nav-icon"
                    onClick={()=> setOpenMenu(true)}
                     />
                    <CgCloseR name="close-outline" className="close-outline mobile-nav-icon"
                          onClick={()=> setOpenMenu(false)}
                    />
                </div>
            </div>
        </Nav>
    )
 };
 const Nav = styled.nav`
 .navbar-list {
    display: flex;
    gap : 3rem;
    li{
        list-style: none;
        .navbar-link{
            &:link,
            &:visited{
                text-decoration: none;
                display: inline-block;
                font-size: 1.2rem;
                text-transform: uppercase;
                ${'' /* color:${({ theme})=> theme.colors.black}; */}
                color:white;
                transition: color 0.3s linear;
            }
        &:hover,
        &:active{
            ${'' /* color:${({ theme})=> theme.colors.helper}; */}
            color:lawngreen;
        }
        }
    }
   
    button{
                height: 35px;
                width: 90px;
                border-radius: 2px;
                background-color: green;
                border-color:white;
                color:white;
                font-size:15px;
            &:hover,
            &:active{
            background-color:lawngreen;
            }
    }
 }
 .mobile-navbar-btn {
        display: none;

        .close-outline{
            display:none;
        }
    }
    .mobile-navbar-btn[name="close-outline"] {
        display: none;
    }
    @media (max-width: ${({theme})=> theme.media.mobile}){
        .mobile-navbar-btn {
            display:inline-block;
            z-index:999;
            border: black;
            ${'' /* padding-right:1rem; */}
            .mobile-nav-icon {
                font-size:2.8rem;
                color: black;
            }
        }
        
        ${'' /* // hide the original nav menu */}
        .navbar-list{
            width: 100vw;
            height: 100vh;
            position: absolute;
            top:0;
            left:0;
            background-color:#ffff;
           font-size:3rem;
           font-weight:900;
           display:flex;
           justify-content:center;
           align-content:center;
           flex-direction: column;
           text-align:center;

           transform: translateX(100%);

           visibility:hidden;
            opacity:0;
        }
        .active .mobile-nav-icon{
            display:none;
            color:#ffff;
            ${'' /* background-color:#ffff; */}
            font-size:2.2rem;
            position:absolute;
            top:2%;
            right:14%;
            color:black;
            z-index:9999;
        }
        .active .close-outline {
            display: inline-block;
        }
        .active .navbar-list{
            visibility:visible;
            opacity:1;
            transform:translateX(0);
            z-index:999;
            background: linear-gradient(to right,rgb(2, 117, 54),green,lawngreen );
            font-size:3rem;

        
        }
    }
    @media (max-width:${({ theme })=> theme.media.mobile}){
        .navbar-list {
    gap: 3rem;
   
    }
    a{
        font-size:2rem;
    }
    .navbar-link:visited {
    font-size: 2rem;
    }
    &:hover,
            &:active{
            background-color:green;
            }
    }
 `;
 export default Navbar;