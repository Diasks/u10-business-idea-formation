import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import styled from 'styled-components';

const Header1 = styled.h1`
 color: #55273c;
 font-size: 46px;
 `;
 const Paragraph = styled.p`
 color: #55273c;
 font-size: 14px;
 `;
 
 const StyleInput = styled.input`
 width: 60%;
 margin: 53px;
 background: #0000;
 border: none;
 border-bottom: 1px solid #55273c;
 input:focus {outline:none;};
 `
function Contact () {
  return(
    <div>
      < Header />
      <Header1>Contact Us</Header1>
      <Paragraph>lorem ipsum är en utfyllnadstext från tryck- och förlagsindustrin. lorem ipsum har varit standard ända sen 1500-talet
        av en okänd boksättare
      </Paragraph>
    
      <StyleInput type="text" placeholder="Name"></StyleInput>
      <StyleInput type="text" placeholder="E-Mail"></StyleInput>
      <StyleInput type="text" placeholder="Message"></StyleInput>
      <Footer />
    </div>
  )

}
 
export default Contact;





