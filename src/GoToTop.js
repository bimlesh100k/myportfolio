import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {FaArrowUp} from "react-icons/fa";

const GoToTop = () =>{
    const [visible, setVisible] = useState(false);
    const goToBtn = ()=>{
        window.scrollTo({ top:0, left:0, behavior:"smooth"});    
    }
    const listenToScroll = () =>{
     
        let heightToHidden = 200;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if(winScroll > heightToHidden){
            setVisible(true);
        }else {
            setVisible(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",listenToScroll);
        return () => window.removeEventListener("scroll",listenToScroll);
    },[]);
    return(
        <Wrapper>
        {visible && (
       <div className="top-btn" onClick={goToBtn}>
       <FaArrowUp className="top-btn--icon"/>
       </div>
       )}
       </Wrapper>
    )
};
const Wrapper = styled.section`
display:flex;
justify-content:center;
align-items:center;
.top-btn{
font-size: 1.4rem;
width:3rem;
height:3rem;
color:#fff;
background-color:green;
border-radius:50%;
position:fixed;
bottom:3rem;
right:4rem;
z-index:999;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
&--icon{
    animation:gototop 1.7s linear infinite alternate-reverse;
}
@keyframes gototop {
    0%{
        transform: translateY(-0.9rem);
    }
    100% {
        transform:translateY(0.9rem);
    }
}
}
@media (max-width:${({ theme })=> theme.media.mobile}){
    .top-btn{
        left:40%;
        right:0;
    }
}
`;
export default GoToTop;