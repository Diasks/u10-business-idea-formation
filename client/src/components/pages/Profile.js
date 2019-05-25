import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "formol/lib/default.css";
import Formol, { Field } from "formol/lib/formol";
import client from "../../client";

const Body = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Didact+Gothic);
  height: 100%;
  width: 100%;
  font-family: 'Didact Gothic', sans-serif;
`;

const CircleWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Circle = styled.div`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  background: lightgray;
  background-position: 50% 50%;
  background-size: cover;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 150px;
    width: 150px;
  }
`;

const Headers = styled.h3`
  color: rgb(202, 161, 197);
`;

const HeadersP = styled.p`
  color: gray;
`;

const FullName = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 481px) and (max-width: 767px) {

    display: flex;
    align-items: center;
    flex-direction: column;
  
  }

`;

const TabsWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const ButtonAdd = styled.button`
  cursor: pointer;
  font: inherit;
  padding: 0.3em 1.2em;
  margin: 0 0.3em 0.3em 0;
  border-radius: 2em;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  background-color: rgb(219, 171, 213);
  color: #fafafa;
  text-align: center;
  transition: all 0.2s;
  width: 100px;
  border: none;

  :hover {
    background-color: rgb(202, 161, 197);
  }
`;

const ButtonRemove = styled.button`
  cursor: pointer;
  font: inherit;
  padding: 0.3em 1.2em;
  margin: 0 0.3em 0.3em 0;
  border-radius: 2em;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  background-color: #ab89a6;
  color: #fafafa;
  text-align: center;
  transition: all 0.2s;
  width: 100px;
  border: none;

  :hover {
    background-color: rgb(202, 161, 197);
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  margin: 20px 0;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  font: inherit;
  padding: 0.8em 1.2em;
  margin: 0 0.3em 0.3em 0;
  border-radius: 2em;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  background-color: rgb(219, 171, 213);
  color: #fafafa;
  text-align: center;
  transition: all 0.2s;
  width: 200px;
  border: none;

  :hover {
    background-color: rgb(202, 161, 197);
    text-decoration: none;
    color: #fafafa;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 120px;
    font-size: 12px;
    font-weight: 600;
  }
`;

const UserHeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const UserHeader = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 10px 0;
  font-size: 26px;
  color: #737373;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 24px;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 26px;
  }
`;

const UserParagraph = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 300px;
  text-align: center;
  color: gray;

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 10px 60px;
    font-size: 13px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin: 10px 60px;
    font-size: 13px;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    margin: 10px 80px;
    font-size: 20px;
  }
`;

function JobList({ length }) {
  const [currentLength, setCurrentLength] = useState(length);

  const els = [];
  for (let i = 0; i < currentLength; i++) {
    els.push(
      <div key={`jobs.${i}`}>
        <Field name={`jobs.${i}.start_date`} type="date">
          Date job started
        </Field>
        <Field name={`jobs.${i}.end_date`} type="date">
          Date job finished
        </Field>
        <Field name={`jobs.${i}.role`} type="text">
          Role, Company, Place
        </Field>
      </div>
    );
  }

  return (
    <div>
      {els}
      <ButtonAdd
        onClick={e => {
          setCurrentLength(currentLength + 1);
          e.preventDefault();
        }}
      >
        Add
      </ButtonAdd>
      <ButtonRemove
        onClick={e => {
          if (currentLength > 0) {
            setCurrentLength(currentLength - 1);
          }
          e.preventDefault();
        }}
      >
        Remove
      </ButtonRemove>
    </div>
  );
}

function SchoolList({ length }) {
  const [currentLength, setCurrentLength] = useState(length);

  const els = [];
  for (let i = 0; i < currentLength; i++) {
    els.push(
      <div key={`schools.${i}`}>
        <Field name={`schools.${i}.start_date`} type="date">
          Date education started
        </Field>
        <Field name={`schools.${i}.end_date`} type="date">
          Date education finished
        </Field>
        <Field name={`schools.${i}.program`} type="area">
          Program, Institution, Place
        </Field>
      </div>
    );
  }

  return (
    <div>
      {els}
      <ButtonAdd
        onClick={e => {
          setCurrentLength(currentLength + 1);
          e.preventDefault();
        }}
      >
        Add
      </ButtonAdd>
      <ButtonRemove
        onClick={e => {
          if (currentLength > 0) {
            setCurrentLength(currentLength - 1);
          }
          e.preventDefault();
        }}
      >
        Remove
      </ButtonRemove>
    </div>
  );
}

function Profile() {
  const [user, setUser] = useState({ loading: true });

  useEffect(() => {
    async function fetchData() {
      const result = await client.get("/users/me");

      setUser({ jobs: [], ...result.data, loading: false });
    }

    fetchData();
  }, []);

  async function updateProfile(item) {
    console.log(item);
    setUser({ loading: true });

    const result = await client.patch("/users/me", item);

    setUser({ jobs: [], ...result.data, loading: false });
  }

  if (user.loading) {
    return (
      <div>
        <div
          className="spinner-grow"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  const Objective = (
    <TabPanel>
      <Headers>Objective</Headers>
      <HeadersP>Optional. Please fill in your role or an objective.</HeadersP>
      <Field name="objective" type="text">
        Objective
      </Field>
    </TabPanel>
  );

  const WorkExperience = (
    <TabPanel>
      <Headers>Work experience</Headers>
      <HeadersP>Please list your employment.</HeadersP>
      <JobList length={user.jobs.length} />
    </TabPanel>
  );

  const Education = (
    <TabPanel>
      <Headers>Education</Headers>
      <HeadersP>Please list your education.</HeadersP>
      <SchoolList length={user.schools.length} />
    </TabPanel>
  );

  const Skills = (
    <TabPanel>
      <Headers>Skills</Headers>
      <HeadersP>Please list your skills. E.g. Spanish.</HeadersP>
      <Field type="text" name="skills">
        Skills
      </Field>
    </TabPanel>
  );

  const Others = (
    <TabPanel>
      <Headers>Qualifications</Headers>
      <HeadersP>
        Please list your qualifications. E.g. driving license.
      </HeadersP>
      <Field type="text" name="others">
        Qualifications
      </Field>
    </TabPanel>
  );


  return (
    <div>
      <Header />
      <Body>

        <UserHeaderWrap>
          <UserHeader>Hello there, {user.first_name}!</UserHeader>
          <UserParagraph>Welcome to your profile page! Here you can change your contacts, work experience etc. Feel free to change however you want. Click on My CV for all the branch specific templates and on My Coverletters for all your coverletters to different companies.</UserParagraph>
        </UserHeaderWrap>

        <Menu>
          <StyledLink to="/my-coverletters">My Coverletters</StyledLink>
          <StyledLink to="/my-cv">My CV</StyledLink>
        </Menu>

        <CircleWrap>
          <Circle />
        </CircleWrap>
        <Formol item={user} onSubmit={updateProfile}>
          <FullName>
            <Field style={{ formolColor: "red !default" }} name="first_name">
              First name
            </Field>
            <Field name="last_name">Last name</Field>
          </FullName>
          <Contacts>
            <Field name="place" type="text">
              Place (City, Country)
            </Field>
            <Field type="tel" name="telephone">
              Telephone (XXX-XXX-XXXX)
            </Field>
            <Field readOnly type="text">
              Email
            </Field>
          </Contacts>

          <TabsWrap>
            <Tabs forceRenderTabPanel={true}>
              <TabList>
                <Tab>Objective</Tab>
                <Tab>Work experience</Tab>
                <Tab>Education</Tab>
                <Tab>Skills</Tab>
                <Tab>Qualifications</Tab>
              </TabList>

              {Objective}
              {WorkExperience}
              {Education}
              {Skills}
              {Others}
            </Tabs>
          </TabsWrap>
        </Formol>
      </Body>
      <Footer />
    </div>
  );
}

export default Profile;
