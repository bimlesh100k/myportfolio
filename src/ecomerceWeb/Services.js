import React from "react";
import styled from "styled-components";
import { FcTabletAndroid, FcRating, FcPortraitMode} from "react-icons/fc";
import Parallaxeffect from "./Parallaxeffect";

 const Services =()=>{
    return(
      <>
        <Wrapper className="section section-services">
          <div className="container">
            <h2 className="common-heading">Services Offers</h2>
            <p>Using HTML, CSS, JavaScripts, React and Wordpress to bring concepts to life.Developing and Maintaining the user interface.</p>
          </div>
          {/* services offer card===== */}
        <div className="container grid grid-three-column">
            <div className="service-box">
           <FcTabletAndroid className="service-icon" />
           <h3>Web Developer</h3>
           <p>develop high performance customer facing e-commerce application using ReactJS,React Hooks Reacts Router ,JavaScript,Bootstrap </p>
            </div>
            <div className="service-box">
           <FcRating className="service-icon" />
           <h3>portfolio</h3>
           <p>I focoused on writing clean,elegant and efficient code love HTML5, CSS3 and a touch of Jquery.</p>
            </div>
            <div className="service-box">
           <FcPortraitMode className="service-icon" />
           <h3>Wordpress</h3>
           <p> I make use of the best and the letest technology with fresh creative ideas to give your business.</p>
            </div>
        </div>
        </Wrapper>
        <Parallaxeffect />
        </>
    )
 };
 const  Wrapper = styled.section`
 padding-bottom:3rem;
 background-color:black;
 .section-services{
  transition:all 0.7s linear;
 }
 h2.common-heading {
    text-align: inherit;
    margin-top: 4rem;
    margin-bottom: 2rem;
}
.container.grid.grid-three-column {
    text-align: center;
    margin-top: 3rem;
}
p {
    max-width: 40rem;
    padding-bottom: 2rem;
    margin-top: revert;
}
.service-box{
  box-shadow: 4px 3px 2px 5px gray;
 border-radius:7px;
 transition:all 0.2s linear;
}
.service-box:hover,.service-box:active{
  ${'' /* transform:translateY(-3rem); */}
  background-color:green;
 }
.service-icon {
    margin-top: 3rem;
}
${'' /* // water fallow button====== */}
.service-icon{
  width:6rem;
  height:6rem;
  background-color:#87ceebbf;
  display:inline-block;
  border-radius:62% 38% 41% 59% / 36% 34% 66% 64%;
  padding:1rem 1rem;
  position:relative;
  color:pink;
  animation:water-wave 3s linear infinite;
}
@keyframes water-wave {
0%{
  border-radius:62% 38% 41% 59% / 36% 34% 66% 64%;
}
50%{
  border-radius:6% 98% 14% 89% / 36% 0% 100% 24%;
}
100%{
  border-radius:62% 38% 41% 59% / 36% 34% 66% 64%;
}
}
@media (max-width:${({ theme })=> theme.media.tab}){
     .container{
         padding:0 3.2rem;
     } 
    
    @media (max-width:${({ theme })=> theme.media.mobile}){
    .grid-three-column{
         grid-template-columns:1fr;
         gap:4rem;
         .container{
         padding:0 3.2rem;
         }
     }
    }
    p{
      font-size: 1.2rem;
    }
    h3{
      font-size: 1.3rem;
    }
    }
 `;

 export default Services;