import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0 ;
    padding: border-box;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
}
html{
    font-size: 6.2.5%;
    overflow-x: hidden;
     /* scroll-behavior: smooth;
    1rem = 10px */
    overflow-x: hidden;
}
 body{
     overflow-x: hidden; 
}
${'' /* // scrolling css========= */}
::-webkit-scrollbar{
    background-color:rgb(24 24 29);
}
::-webkit-scrollbar-track{
    width:11.5rem;
}
::-webkit-scrollbar-thumb{
    background:#fff;
    border:5px solid transparent;
    border-radius:9px;
    background-clip:content-box;
}
a{
    text-decoration:none;
}
ul{
    list-style: none
}
h1{
    color: ${({ theme})=> theme.colors.heading};
    font-size: 2rem;
    font-weight: 900;
}
h2{
    text-align: center;
    color:white;
}
${'' /* .common-heading{
    font-size: 2.8rem;
    font-weight: 100;
    text-transform:capitalize;
} */}
h3{
    color: #ffffffd9;
    font-size: 1rem;
    font-weight:600;
}

p {
    color: #9e9e9e;
    opacity: .8;
    font-size: 1rem;
    line-height: 1.5;
    margin-top: 2.5rem;
    font-weight: 400;
}

.container{
    position:relative;
    max-width: 62rem;
    margin:0 auto;
    ${'' /* margin-left:190px; */}
     ${'' /* padding-top:-19rem; */}
    // margin-top:-5rem;
    display:flex;
    flex-direction: column;
    justify-content:center; 
    // text-align:center;
    
}
.grid{
    display:grid;
    gap: 5rem;
}
.grid-two-column{
    grid-template-columns: repeat(2 , 400px);
}
.grid-three-column{
    grid-template-columns: repeat(3, 300px);
}
 .grid-four-column{
    grid-template-columns: 1fr 1fr 1fr 1fr;

} 
 input[type="submit"]{
    ${'' /* background-color: &{({ theme })=> theme.colors.btn}; */}
    background-color:blue;
    color: &{({ theme })=> theme.colors.white};
    width:5rem;
    border-style: solid;
    border-width: .1rem;
    text-transform:uppercase;
    cursor:pointer;
    height:3rem;
        
}
${'' /* //998px for tab  */}


${'' /* .grid-three-columns{
      grid-template-columns: 1fr 1fr;
      } */}
 
 @media (max-width:${({ theme })=> theme.media.tab}){
     .container{
         padding:0 3.2rem;
     } 
    
    @media (max-width:${({ theme })=> theme.media.mobile}){
     .grid-two-column, .grid-four-column{
         grid-template-columns:1fr;
         gap:3rem;
         .container{
         padding:0 3.2rem;
         }
 } 
 html{
    font-size:70%;
 
 }
}
 }
 ${'' /* //pin horizontal line-==== */}
.common-heading {
    text-align: left;
    text-transform: uppercase;
    text-transform: capitalize;
    ${'' /* margin-top: -1.9rem; */}
    position: relative;
    font-weight: 700;
    font-size: 2rem;
}
.common-heading::before{
    content:"";
    position:absolute;
    top:120%;
    left:0;
    width:1rem;
    height:1rem;
    border-radius:50%;
    background:green;
 }
 .common-heading::after{
    content:"";
    position:absolute;
    top:135%;
    left:0;
    width:15rem;
    height:0.1rem;
    background:green;
 }
 .service-icon{
  width:6rem;
  height:6rem;
  background-color:#87ceebbf;
  display:inline-block;
  border-radius:62% 38% 41% 59% / 36% 34% 66% 64%;
  padding:1rem 1rem;
  position:relative;
  color: ghostwhite;
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
`;