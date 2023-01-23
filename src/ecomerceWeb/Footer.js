import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {FaInstagramSquare,FaWhatsapp, FaLongArrowAltRight, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin} from "react-icons/fa";
import {MdMarkAsUnread} from "react-icons/md"
const Footer = ()=> {
    return(
        <Wrapper>
      {/* // footer section */}
      <footer>
<div className="container grid grid-four-column">
        <div className="footer-about">
            <h4>About</h4>
            <p> I am front end developer. I am able to do all kind of development related to front end of your website .</p>
        </div>
        {/* //2nd column grid */}
        <div className="footer-ubscribe">
            <h4>Links</h4>
            <ul>
                <li>
                   <span><FaLongArrowAltRight /></span><NavLink to="/myportfolio">Home</NavLink>
                </li>
                <li>
                   <span><FaLongArrowAltRight /></span><NavLink to="/about">About</NavLink>
                </li>
                <li>
                   <span><FaLongArrowAltRight /></span><NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li>
                   <span><FaLongArrowAltRight /></span><NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
        {/* //3rd column */}
        <div className="footer-icons">
            <h4>Services</h4>
            <ul>
                <li>
                    <span><FaLongArrowAltRight /></span><NavLink to="/">Web Devlopment</NavLink>
                </li>
                <li>
                    <span><FaLongArrowAltRight /></span><NavLink to="/portfolio"> React project</NavLink>
                </li>
                <li>
                   <span><FaLongArrowAltRight /></span><NavLink to="/portfolio">Wordpress</NavLink>
                </li>
                <li>
                   <span> <FaLongArrowAltRight /></span><NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>

      {/* //4rth column */}
        </div>
        <div className="footer-contact">
            <h4>Have a Question</h4>
           <address>
            <div>
                <p>
                    <span><FaMapMarkerAlt /></span>Gurgoan, India
                </p>
            </div>
            <div>
                <p>
                    <span><FaPhoneAlt /></span><NavLink to="/tel:+919711409071">+91 9711409071</NavLink>
                </p>
            </div>
            <div>
                <p>
                    <span><MdMarkAsUnread /></span><NavLink to="/mailto:ashmitathakur203@gmail.com">ashmitathakur203@gmai.com</NavLink>
                </p>
            </div>
           </address>
            </div>
      </div>
      {/* //footer bottom -icon section=== */}
      <div className="container">
        <div className="f-social-icons">
            <NavLink to="/">
            <FaWhatsapp className="service-icon" />
            </NavLink>
            <NavLink to="/">
                <FaInstagramSquare className="service-icon" />
            </NavLink>
            <NavLink to="/">
                <FaLinkedin className="service-icon"  />
            </NavLink>
        </div>
        <div className="f-credits">
        <p>
           @{new Date().getFullYear()}   All Rights Reserved | This template is made by ❤ Asmita Thakur.
        </p>
        </div>
      </div>
      </footer>
        </Wrapper>
    )
};
const Wrapper = styled.section`
background-color:green;
.grid-four-column{
    grid-template-columns: 1fr 1fr 1.1fr 1.4fr;
    display:grid;
    gap: 3rem;
    padding-top:2rem;
    padding-bottom:1rem;
}

footer{
 padding-left:3rem;
 padding-right:3rem;
    background-color:green;
    h4{
        color:white;
        font-size:1.6rem;
        padding-bottom:1rem;
    }
    li {
    padding-top: 1rem;
    color: #9e9e9e;
}
li:hover, li:active {
        color:#ffffffc9;
    }
span{
    margin-right: 0.5rem;
}
ul{
    ${'' /* position: absolute */}
    position: relative;
    right: 2rem;
}
    p{
       color:#9e9e9e;
        margin-top: 1rem;

    }
    p:hover, p:active {
        color:#ffffffc9;
    }
    .f-credits {
    padding-bottom: 1rem;
    display: grid;
    place-items: center;
    color:#adadad;
}
.f-social-icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
   
}
a{
    color:#adadad;
}
a:hover, a:active {
        color:#ffffffc9;
    }
address {
    font-style: normal;
    color: gray;
}
.service-icon{
        font-size:1.6rem;
        width:3rem;
        height:3rem;  
        position:relative;
        cursor:pointer;
        display:inline-block;
      
        ${'' /* color: &{({ theme })=> theme.colors.white}; */}
    }

}

@media (max-width: ${({ theme })=> theme.media.mobile}){
     .grid-two-column,.grid-four-column{
         grid-template-columns:1fr;
         gap:1rem;
         .container{
         padding:0 ;
         }
         .footer h4 {
    padding-top: 6rem;
 } 
 .footer-about{
    padding-top:3rem;
 }
 .footer p {
    color:#9e9e9e;
    padding-bottom: -2rem;
    font-size:1.2rem;
}
     }
     .contact-short {
    max-width: 28rem;
}
.contact-short .grid div:last-child {
    justify-self: center;
}
.footer-div{
    margin-left:7.3rem;
}
p{
    font-size:1.2rem; 
}
.footer .service-icon {
    width: 5rem;
    height: 4rem;
}
}
`;
export default Footer;