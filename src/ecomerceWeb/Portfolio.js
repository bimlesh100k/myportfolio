import React from "react";
import styled from "styled-components";

const Portfolio =()=>{
return (
   
    <Wrapper className="section section-portfolio">
 <div className="container">
  <h2 className="common-heading">Latest Works</h2>
  <p>I have ample of projects related to my front end engineering,all are  developed or created by me during my learning period . Here,i would like to show some of my latest projects </p>
 </div>
 
 <div className="container grid grid-three-column portfolio-images">
 <div className="btn-active">
 <div className="img-overlay">
    <img src="./Mypic/work1.jpg" alt="work"/>
    <div className="overlay">
       <a href="#" target="_asmi" className="common-pro">Project 1</a>
    </div>
    </div>
    </div>
    <div className="btn-active">
    <div className="img-overlay">
    <img src="./Mypic/pizza.jpg" alt="work"/>
    <div className="overlay">
       <a href="#" target="_asmi" className="common-pro">Project 2</a>
    </div>
    </div>
    </div>
    <div className="btn-active">
    <div className="img-overlay">
    <img className="pic" src="./Mypic/color.jpg" alt="work"/>
    <div className="overlay">
       <a href="#" target="_asmi" className="common-pro">Project 3</a>
    </div>
    </div>
 </div>
 <div className="btn-active">
    <div className="img-overlay">
    <img src="./Mypic/computer.jpg" alt="work"/>
    <div className="overlay">
       <a href="#" target="_asmi" className="common-pro">Project 4</a>
    </div>
    </div>
</div>
<div className="btn-active">
    <div className="img-overlay">
    <img src="./Mypic/photo.jpg" alt="work"/>
    <div className="overlay">
       <a href="#" target="_asmi" className="common-pro">Project 5</a>
    </div>
    </div>
    </div>
    <div className="btn-active">
    <div className="img-overlay">
    <img src="./Mypic/game.jpg" alt="work"/>
    <div className="overlay">
       <a href="#" target="_asmi" className="common-pro">Project 6</a>
    </div>
    </div>
</div>

 </div>
   </Wrapper>
)
};
const Wrapper =styled.section`
padding-bottom:3rem;
background-color:#000000c4;
${'' /* margin-top:6rem; */}
${'' /* width:100%;
height:100vh; */}
${'' /* max-width:120rem; */}
${'' /* animation: changeBg 10s linear infinite; */}

${'' /* @keyframes changeBg {
   0% {
      background-color:green;
   }
   20% {
      background-color:yellow;
   }
   40% {
      background-color:pink;
   }
   60% {
      background-color:green;
   }
   80% {
      background-color:green;
   }
  100% {
      background-color:green;
   }
} */}
h2.common-heading {
    margin-top: 3rem;
    color:white;
}
.grid{
   gap:3rem;
}
p {
    padding-bottom: 2rem;
    font-size:1.2rem;
}
img{
   width:90%;
   border-radius:6px;
   position:relative;
   overflow:hidden;
}
.img-overlay .pic{
   height:120%;
}
.img-overlay {
   position:relative;
   overflow:hidden;
}
.img-overlay .overlay{
   position:absolute;
   opacity:0;
   top:0;
   left:0;
   width: 90%;
    height: 100%;
    background:linear-gradient(to right,rgb(2, 117, 54),green,lawngreen );
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(100%);
    transition: all 0.3s linear;
    border-radius: 6px;  
}
.img-overlay:hover > .overlay{
   transform:translateY(0);
   opacity:0.6;
   cursor:pointer;
}
.btn-active:hover{
   transform:translateY(-1rem);
}
.common-pro{
color:white;
font-size:2rem;
}

@media (max-width:${({ theme })=> theme.media.mobile}){
 .grid-three-column{
         grid-template-columns: 1fr 1fr;
         gap:1.7rem;
         .container{
         padding:0 3.2rem;
         height:50vh;
         }
         .section .section-portfolio {
    margin-bottom: -16rem;
}
 } 
}
 ${'' /* @media (max-width:${({ theme })=> theme.media.mobile}){
   .container.grid-three-column{
         grid-template-columns:1fr 1fr;
     }
     .container{
         padding:0 3.2rem;
         padding-top:1rem;
         display:flex;
    position: relative;
    left: 4rem;
   
}
img{
   width:73%;
   border-radius:6px;
   position:relative;
   overflow:hidden;
}
.img-overlay .overlay{
   position:absolute;
   opacity:0;
   top:0;
   left:0;
   width: 73%;
    height: 100%;
    background:linear-gradient(to right,rgb(2, 117, 54),green,lawngreen );
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(100%);
    transition: all 0.3s linear;
    border-radius: 6px;  
}
h2.common-heading {
    margin-left: -3rem;
}
p {
    margin-left: -3rem;
    margin-right: 4rem;
} */}
${'' /* .portfolio-images{
   padding-bottom:19rem;
} */}
 
  ${'' /* @media (max-width:${({ theme })=> theme.media.tab}){
     .grid-three-column{
         grid-template-columns:1fr 1fr;
      
     }
     .container{
         padding:0 3.2rem;
     } 
  } */}
`;

export default Portfolio;

