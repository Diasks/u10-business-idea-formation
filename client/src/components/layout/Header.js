import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { colors } from "../Common";
import client from "../../client";

const Navbar = styled.div`
  background-color: ${colors.Cerulean};
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Dropdown = styled.div`
  display: block;
  position: relative;
  min-height: 60px;
`;

const Options = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  height: 60px;
  background-color: ${colors.Cerulean};
  min-width: 160px;
  z-index: 1;
  overflow: hidden;

  &:hover,
  &:focus-within {
    height: auto;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 20px;
  display: block;
  font-weight: 700;

  &:hover {
    color: ${colors.DarkCerulean};
    text-decoration: none;
  }
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

  const firstName = user.loading ? "" : user.first_name;

  return (
    <Navbar>
      <Dropdown>
        <Options>
          <StyledLink to="/profile">{firstName}</StyledLink>
          <StyledLink to="/my-coverletters">My Coverletters</StyledLink>
          <StyledLink to="/my-cv">My CV</StyledLink>
          <StyledLink to="/" onClick={() => { localStorage.clear()  }}>Log out</StyledLink>
        </Options>
      </Dropdown>
    </Navbar>
  );
};

export default Header;
