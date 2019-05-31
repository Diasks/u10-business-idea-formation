import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterDiv = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Didact+Gothic);
  background-color: #cecdcd;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 30px 10px;
  height: 200px;
  left: 0;
  bottom: 0;
  right: 0;
  font-family: "Didact Gothic", sans-serif;
`;

const Social = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
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
  color: "gray",
  textDecoration: "none",
  fontSize: "16px"
};

const Icon = styled.div`
  margin: 10px;
  font-size: 40px;
  cursor: pointer;

  :hover {
    color: rgb(202, 161, 197);
  }
`;

export default function Footer() {
  return (
    <FooterDiv>
      <Social>
        <Icon>
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </Icon>
      </Social>
      <Links>
        <LinkSection>
          <LinkSectionTitle>Company</LinkSectionTitle>
          <Link style={linkStyle} to="/about">
            About Us
          </Link>
        </LinkSection>

        <LinkSection>
          <LinkSectionTitle>Resources</LinkSectionTitle>
          <Link style={linkStyle}>
            Articles
          </Link>
        </LinkSection>

        <LinkSection>
          <LinkSectionTitle>Support</LinkSectionTitle>
          <Link style={linkStyle} to="/contact">
            Contact Us
          </Link>
        </LinkSection>
      </Links>
      <Copyright>© FORMATION 2019</Copyright>
    </FooterDiv>
  );
}
