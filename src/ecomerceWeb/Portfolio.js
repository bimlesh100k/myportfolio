import React from "react";
import styled from "styled-components";
import work1 from "../images/work1.jpg"; 
import flower from "../images/flower.jpg"; 
import gallary from "../images/gallary.jpg"; 
import mark from "../images/mark.png"; 
import todo1 from "../images/todo1.jpeg"; 
import keep from "../images/keep.jpeg"; 
const Portfolio =()=>{
return (
   
    <Wrapper className="section section-portfolio">
 <div className="container">
  <h2 className="common-heading">Latest Works</h2>
  <p>I have ample of projects related to my front end engineering, all are  developed or created by me during my learning period . Here, i would like to show some of my latest projects. </p>
 </div>
 
 <div className="container grid grid-three-column portfolio-images">
 <div className="btn-active">
 <div className="img-overlay">
    {/* <img src="./Mypic/work1.jpg" alt="work"/> */}
    <img className="keep" src={work1} alt="work"/>
    <div className="overlay">
       <a href="https://asmita2601.github.io/news/" target="_asmi" className="common-pro">Project 1<br/><span>News site</span></a>
    </div>
    </div>
    </div>
    <div className="btn-active">
    <div className="img-overlay">
    <img src={flower} alt="work"/>
    <div className="overlay">
    <a href=" https://asmita2601.github.io/flower/" target="_asmi" className="common-pro">Project 2<br/><span>Flower site</span></a>
    </div>
    </div>
    </div>
    <div className="btn-active">
    <div className="img-overlay">
    <img className="pic" src={gallary} alt="work"/>
    <div className="overlay">
    <a href="https://asmita2601.github.io/photo-gallery/" target="_asmi" className="common-pro">Project 3<br/><span>Photo-gallary</span></a>  
     </div>
    </div>
 </div>
 <div className="btn-active">
    <div className="img-overlay">
    <img className="keep" src={mark} alt="work"/>
    <div className="overlay">
    <a href="https://asmita2601.github.io/markdown/" target="_asmi" className="common-pro">Project 4<br/><span>Markdown</span></a>   
    </div>
    </div>
</div>
<div className="btn-active">
    <div className="img-overlay">
    <img className="keep" src={todo1} alt="work"/>
    <div className="overlay">
    <a href =" https://asmita2601.github.io/todolist/" target="_asmi" className="common-pro">Project 5<br/><span>Todolists</span></a>  
     </div>
    </div>
    </div>
    <div className="btn-active">
    <div className="img-overlay">
    <img className= "keep" src={keep} alt="work"/>
    <div className="overlay">
    <a href="https://asmita2601.github.io/google-keep/" target="_asmi" className="common-pro">Project 6<br/><span>Google-keep</span></a>
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

h2.common-heading {
    margin-top: 3rem;
    color:white;
}
.keep{
   height:12rem;
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

`;

export default Portfolio;

