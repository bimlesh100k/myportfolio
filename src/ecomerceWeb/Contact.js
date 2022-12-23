import React from "react";
import styled from "styled-components";
const Contact =()=>{
    const Wrapper = styled.section`
    background-color:black;
    padding-bottom:4rem;
    .common-heading{
    font-size: 1.8rem;
    font-weight: 60;
    padding-top: 4rem;
    text-transform:capitalize;
   margin-bottom: 3rem;
}
h2.common-heading{
    margin-bottom: 3rem;
    margin-left: 6rem;
}
.contact-form{
    display:flex;
    justify-content:center;
    text-align: center;
}
.contact-inputs{
    margin-top: 1.9rem;
    display: flex;
    flex-direction: column;
    gap:2rem;
}
input{
    height:2rem;
    width:22rem;
    padding-left: 1rem;
}
input[type="submit"] {
    background: linear-gradient(to right,rgb(2, 117, 54),green,lawngreen );
    color:white;
    width: 9rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    cursor: pointer;
    height: 3rem;
    position: relative;
    left: 7rem;
}
textarea{
    padding-left: 1rem;
}
input[ type="submit"]{
    cursor:pointer;
    transition:all 0.2s;
    
    &:hover{
        background-color:white;
        color: white;
    border:1px solid &{({ theme })=> theme.colors.white};  
    transform:scale(0.9);
    }
}
@media (max-width: ${({ theme })=> theme.media.mobile}){
     .container{
         padding:0 2.2rem;
         margin-top:4rem;
     } 
     html {
    font-size: 70%;
    margin-top: 2rem;
    margin-left:-1rem;
}
form.contact-inputs {
    position: relative;
    left: 0.1rem;
}

}
    `;
    return(
        <Wrapper className="section">
        <h2 className="common-heading">Feel Free to contant us</h2>
           <div className="container">
            <div className="contact-form">
                <form action="https://formspree.io/f/xgeqbkzy" method="POST" className="contact-inputs">
                    <input type="text" name="Username" placeholder="Username" autoComplete="off" required />
                    <input type="email" name="Email" placeholder="Email" autoComplete="off" required />
                    <input type="text" name="Subject" placeholder="Subject" autoComplete="off" required />
                    <textarea style={{width:"22rem"}} name="Message" placeholder="Massage" cols="30" rows="6" autoComplete="off" required></textarea>
                    <input type="submit" value="SEND"/>
                </form>
            </div>
           </div>
        </Wrapper>
    )
}
export default Contact;