import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
// import { colors } from "../Common";
import client from "../../client";
import LogoImg from "../../assets/formation.png";

const Navbar = styled.div`
  background-color: #d3d4d8;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


const StyledLink = styled(Link)`
  @import url(https://fonts.googleapis.com/css?family=Didact+Gothic);
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  font-family: "Didact Gothic", sans-serif;

  &:hover {
    text-decoration: none;
    color: #4d606e;
  }
`;

const Logo = styled.div`
  padding: 5px 0 5px 8px;
`;

const Header = () => {
  const [user, setUser] = useState({ loading: true });

  useEffect(() => {
    async function fetchData() {
      const result = await client.get("/users/me");

      setUser({ ...result.data, loading: false });
    }

    fetchData();
  }, []);

  // const firstName = user.loading ? "" : user.first_name;

  return (

    <Navbar>
      <Logo><img src={LogoImg} width="35px" style={{borderRadius: '50%'}} /></Logo>
      <StyledLink to="/" onClick={() => { localStorage.clear()  }}>Log out</StyledLink>
    </Navbar>

    // <Navbar>
    //   <Dropdown>
    //     <Options>
    //       <StyledLink to="/profile">{firstName}</StyledLink>
    //       <StyledLink to="/my-coverletters">My Coverletters</StyledLink>
    //       <StyledLink to="/my-cv">My CV</StyledLink>
    //       
    //     </Options>
    //   </Dropdown>
    // </Navbar>
  );
};

export default Header;
