import React from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import styled from "styled-components/macro";

const FormTitle = styled.div`
  color: gray;
  font-weight: 300;
  margin-bottom: 50px;
`;

const PageTwosAside = styled.div`
  width: 10%;
  background-color: lightgray;
`;

const PageTwos = styled.div`
  height: 100vh;
  display: flex;
  color: white;
`;

const PageTwoForm = styled.div`
  width: 90%;
  background-color: #ececec;
  padding: 25px 40px;
  overflow: auto;
`;

const FormTitleLink = styled(NavLink)`
  color: gray;
  text-decoration: none;
  display: inline-block;
  font-size: 1.5em;
  margin: 0 10px;
  padding-bottom: 5px;

  :active {
    color: white;
    border-bottom: 1px solid lightgray;
  }

  :hover {
    text-decoration: none;
    font-weight: 600;
    color: gray;
  }
`;

export default function GetStarted() {
  return (
    <Router>
      <PageTwos>
        <PageTwosAside />
        <PageTwoForm>
          <FormTitle>
            <FormTitleLink to="/login">Sign In</FormTitleLink> /{" "}
            <FormTitleLink exact to="/register">
              Register
            </FormTitleLink>
          </FormTitle>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </PageTwoForm>
      </PageTwos>
    </Router>
  );
}
