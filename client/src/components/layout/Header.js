import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import client from "../../client";
import LogoImg from "../../assets/formation.png";

const Navbar = styled.div`
  background-color: #d8c1cf;
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
    color: #bb8fa9;
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

  const firstName = user.loading ? "" : user.first_name;

  return (
    <Navbar>
      <Logo>
        <Link
          to="/"
          onClick={() => {
            localStorage.clear();
          }}
        >
          <img
            src={LogoImg}
            alt="Formation Logo"
            width="35px"
            style={{ borderRadius: "50%" }}
          />
        </Link>
      </Logo>
      <StyledLink
        to="/"
        onClick={() => {
          localStorage.clear();
        }}
      >
        Log out
      </StyledLink>
    </Navbar>
  );
};

export default Header;
