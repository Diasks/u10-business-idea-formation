import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';


import axios from "axios";

const StyledLink = styled(Link)`
  color: gray;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  padding: 3px 10px 3px 10px;

  &:hover {
    color: gray;
    text-decoration: none;
  }
`;



const client = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    // https://github.com/axios/axios/issues/1383
    Authorization: {
      toString() {
        const token = localStorage.getItem("cool-jwt");
        return `Bearer ${token}`;
      }
    }
  }
});

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
    <div>
<Navbar collapseOnSelect expand="xl" bg="light" variant="light">
  <Navbar.Brand style={{ color: '#787878' }}>Formation</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      <NavDropdown title="Profile" id="collasible-nav-dropdown">
        <StyledLink to="/profile">{firstName}</StyledLink>
        <StyledLink to="/My templates">My templates</StyledLink>
        <StyledLink to="/Profession">Add new</StyledLink>
        <StyledLink to="/coverletters">Add new Coverletter (!!)</StyledLink>
        <StyledLink to="/" onClick={() => { localStorage.clear()  }}>Log out</StyledLink>
      </NavDropdown>
  
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

    </div>
    
  );
};

export default Header;
