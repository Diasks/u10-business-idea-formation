import React from "react";
import Header from "../layout/Header";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { colors, TemplatePicture } from "../Common";

const Content = styled.div`
  display: flex;
  flex: 1 10;
  min-height: 900px;
`;

const Sidebar = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  display: flex;
  flex: 0 0 25%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 2000;
  color: ${colors.Gray};
`;

const Body = styled.div`
  position: relative;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 640px;
  min-height: 640px;
  margin: 30px auto;
  height: 100%;
  width: 100%;
`;

const Circle = styled.div`
  position: absolute;
  z-index: 1000;
  left: calc(50% - 640px / 2);
  top: 0;
  border-radius: 50%;
  height: 640px;
  width: 640px;
  background: ${colors.LightLily};
  border-radius: 50%;
  background-position: 50% 50%;
  background-size: cover;
`;

const BodyItem = styled.div`
  flex: 1 0 calc(33% - 20px);
  margin: 10px;
  z-index: 2000;
`;

const StyledHr = styled.hr`
  border: 1px white ${colors.LightGray};
  width: 100%;
`;

const StyledLink = styled(Link)`
  color: #a9a9a9;
  text-decoration: none;
  padding: 10px;
  font-weight: 500;
  font-size: 22px;

  &:hover {
    color: ${colors.DarkCerulean};
    text-decoration: none;
  }
`;

function Profile() {
  return (
    <div>
      <Header />
      <Content>
        <Sidebar>
          <StyledLink to="/profession">Templates</StyledLink>
          <StyledLink to="/color-schemes">Color schemes</StyledLink>
          <StyledLink to="/popular">Popular designs</StyledLink>
          <StyledHr />
          <StyledLink to="/new">+ New</StyledLink>
        </Sidebar>
        <Body>
          <Circle />
          {[0, 1, 2, 3, 4, 5].map(i => {
            return (
              <BodyItem>
                <TemplatePicture />
              </BodyItem>
            );
          })}
        </Body>
      </Content>
    </div>
  );
}

export default Profile;
