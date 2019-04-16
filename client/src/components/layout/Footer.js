import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const LividBrown = "#55273c";

const FooterDiv = styled.div`
  background-color: ${LividBrown};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 200px;
`;

const Connect = styled.span`
  align-self: center;
  font-weight: 700;
`;

const Social = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const InstaIcon = styled.button`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,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);
`;

const FacebookIcon = styled.button`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACKklEQVRIia2VzUtUURjGf6/dmY2OFuh8NBMmVoKzMNwoWBCEUUQEgeCiRbRqE+3DXX/A/AFRW+kDAnd9EEEuhgo1KiqYbCacvhA1E7Mp7+viOrc73jl3utkDl3PO+577POf9OPeKqlIPqpoEDm613xu/w/0bE8wViogIHekk8UxyZuxa7nM9Hqsuu4NDwC2PIC/zU+TvPmLx6zxq2yiw+n2FbwtLI8DtsAKIiDt/O/WC61dyfHxfqtmz9mON1eUVI0dTkEA1farKg5sTlGdLm2tABCsSJRqNYEUjRg5jBCKCtz6vnkzjBCREohbnLl+iPRVnh2VhRcyJCEyRN4rFL/NVC9mBfoZHT9ccxoTAFHlftm0bEECI7Wx17UHkEBDB+u91VG3qtbHayq9KxRFAoEmwrPpURoHpx3nmCkWWF5Z8vuKbAuO5qwC0tMVI7EkzdPJoOIHXT5/z7OEkn4ofQAVE3bH8rkR5tggqpPd1MnjsiIkmqAbV1IiTesPY3BqjK9tjZAnoIvHo6ObaPzbHWujs6Q4vcPzsGQ6fGqby0ynm2OgFV7RvaICRi+cBpwbtqUR4gfZUgo7dSVTV14qxXW3s7+v1XcZQAr4+r0lVHb8BxiJ7v0MOEyDypzQef1AUf32TTfZ/jqAK96Sep8b+v2ogGuw3oWENallD7G0kYCQPPrAPDf8HVXT1HnDn8Uxq+wIiMgmcqK6zg/2uL9O9d+veGSNPoy7YLjYAK63Dk2NMjOUAAAAASUVORK5CYII=);
`;

const LinkedinIcon = styled.button`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADlElEQVRIia2Wz29UVRTHP+fNm5ZOp1DotLTTZiyZmoZiQKStJKgx0RXYHUYwASIxXZkYWPlXGDYuDCbuMMaFLo3GBZqwwMYYCVOxpC0M9hcDk9p2OtOZeYfFfe/Ne2+mXXk3991z7jnfc+753nOf1Ov1xPz9B2Pf3viKh/dmefWt01z49GP6hgYQEQBUFRFpmj2dNzyZO3JAyX741+zYfO7B74WVVao7O6w8esJC7h96+nux4/GQYXTexbEHOiEiM7FDW5K+d2dmemk+T71Wo7hWoFza5uj4CRJdyZBxNFpvHQVwZTeBJXt5MU9lu+wKjXJzfYNyqdR0REGnUaBWOgDr3JUPOPX2Gdo72gEh0ZXk2ORJUul+VNU3ikYbddbKOYB97sr7rOaXyYxmKa4VSB/JMPHum3R0JprSDxZ3ryMKganquKqq4zhaq1a11XAcRx3H8b+D8x7f46qKvfXfJqAh1HhbG+0d+1BVShubIV3Mtmnb1856ocgft++w/OgJ8XiczGiW42cmSCQ7Q3Wxr09dplLaprSx4WYEUx9d4PJnn1Da3OLa2UsUnxZAQBBOvDHJO+ff45sbN1lezBsDARCGj77MxWvTvHL6FPE2Q3ELPzpBVZqKKJYrU4Oen1vguy++Znkhb0jg2gIszs5x6/Mvmb//N47jmCI3CqQuTaOXyPj29j1ffUpxrYCKIoiH6+/Lzy1w9+dfqe1UOfb6a9gNGgpBMjSAJQRpWRZjkyeZunqRVLqP2z/8yE+3vqdc2kZUqddq5O7+yfO1ZwYAn3Zhiqmq7zhIz8HsMB9en2bk+BgAZy+dZ2nhMTO//OY7WXn8L+vPiuaI/BqohqINclsCIKl0Hy+NjviBdPf20J8ZQsRCHRPU9lbJ7w6WX1TjBq/kjQK6EGJiiNk2dlvcbx0iQiKZIGbHjJ2AU69Tq1YNQOM2Bh1GbqfBdkva3C7Esgz3Cd1g94jwNgsiSpRFAcTQcrc24dfNlVuNMzdRRh34t1ibG9pe74L3ZYfSCqBIg1aBBPZoap4MDRHbCi4UDWUB4KiCaktdNGpVRdQjjdlsIUGuSFOUngY1DPEdtX7FfLZ5gdtDI0eolCuUN7f8jQf7UgbdshjKDtPdc9DX9Q0ONL1iB3oOkRnNUtupNoHaqYHDuZ1KZcJcDJNYsnu/icgSUunDJLo6/bQPuGBBkM79SXoHB6jXqnhkFvNXgez21P1f4wVYbQmpzEx24QAAAABJRU5ErkJggg==);
`;


const Links = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;


const LinkSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinkSectionTitle = styled.span`
  text-transform: uppercase;
  font-size: 10px;
`;


const Copyright = styled.span`
  align-self: center;
  font-size: 10px;
`;

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "16px"
};

function Footer() {
  return (
    <FooterDiv>
      <Connect>Connect with us!</Connect>
      <Social>
        <InstaIcon />
        <FacebookIcon />
        <LinkedinIcon />
      </Social>
      <Links>
      <LinkSection><LinkSectionTitle>Company</LinkSectionTitle>
        <Link style={linkStyle} to="/login">
          About Us
        </Link>
      </LinkSection>

      <LinkSection><LinkSectionTitle>Resources</LinkSectionTitle>
        <Link style={linkStyle} to="/login">
          Articles
        </Link>
      </LinkSection>

      <LinkSection><LinkSectionTitle>Support</LinkSectionTitle>
        <Link style={linkStyle} to="/login">
          Contact Us
        </Link>
      </LinkSection>
      </Links>
      <Copyright>© FORMATION 2018</Copyright>
    </FooterDiv>
  );
}

export default Footer;
