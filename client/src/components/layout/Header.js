import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const LividBrown = "#55273c";

const HeaderDiv = styled.div`
  background-color: ${LividBrown};
  color: white;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  padding: 0 20px 0 20px;
  font-size: 36px;
`;

const Links = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  padding: "20px"
};

function Header() {
  return (
    <HeaderDiv>
      <Title>Formation</Title>
      <Links>
      <Link style={linkStyle} to="/login">
        Login
      </Link>
      <Link style={linkStyle} to="/profile">
        Profile
      </Link>
      <Link style={linkStyle} to="/register">
        Register
      </Link>
      </Links>
    </HeaderDiv>
  );
}

export default Header;
