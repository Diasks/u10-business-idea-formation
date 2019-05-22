import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styled from "styled-components/macro";
import { colors } from "../Common";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "formol/lib/default.css";
import Formol, { Field } from "formol/lib/formol";
import client from "../../client";

const Body = styled.div`
  margin: 30px;
  height: 100%;
  width: 100%;
`;

const Circle = styled.div`
  position: absolute;
  z-index: -1;
  right: 200px;
  top: 150px;
  border-radius: 50%;
  height: 400px;
  width: 400px;
  background: ${colors.LightLily};
  background-position: 50% 50%;
  background-size: cover;

  @media (max-width: 1110px) {
    right: 100px;
    top: 200px;
    height: 300px;
    width: 300px;
  }

  @media (max-width: 800px) {
    display: none;
`;

const Headers = styled.h3`
  color: black;
`;

const HeadersP = styled.p`
  color: black;
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
      <button
        onClick={e => {
          setCurrentLength(currentLength + 1);
          e.preventDefault();
        }}
      >
        Add
      </button>
      <button
        onClick={e => {
          if (currentLength > 0) {
            setCurrentLength(currentLength - 1);
          }
          e.preventDefault();
        }}
      >
        Remove
      </button>
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
      <button
        onClick={e => {
          setCurrentLength(currentLength + 1);
          e.preventDefault();
        }}
      >
        Add
      </button>
      <button
        onClick={e => {
          if (currentLength > 0) {
            setCurrentLength(currentLength - 1);
          }
          e.preventDefault();
        }}
      >
        Remove
      </button>
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
    setUser({ loading: true });

    const result = await client.patch("/users/me", item);

    setUser({ jobs: [], ...result.data, loading: false });
  }

  if (user.loading) {
    return (
      <div>
        <div className="spinner-grow" style={{width: '3rem', height: '3rem',}} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  console.log(user);

  const Objective = (
    <TabPanel>
      <Headers>Objective</Headers>
      <HeadersP>Please think of the main objective you want to reach with you CV</HeadersP>
      <Field name="objective" type="text">
        Objective
      </Field>
    </TabPanel>
  );

  const WorkExperience = (
    <TabPanel>
      <Headers>Work experience</Headers>
      <HeadersP>Please list all your jobs in reverse order</HeadersP>
      <JobList length={user.jobs.length} />
    </TabPanel>
  );

  const Education = (
    <TabPanel>
      <Headers>Education</Headers>
      <HeadersP>Please list your education in reverse order</HeadersP>
      <SchoolList length={user.schools.length} />
    </TabPanel>
  );

  const Skills = (
    <TabPanel>
      <Headers>Skills</Headers>
      <HeadersP>Please list all your skills relevant to the job you want to get</HeadersP>
        <Field type="text" name="skills">
          Skills
        </Field>
    </TabPanel>
  );

  const Others = (
    <TabPanel>
      <Headers>Others</Headers>
      <HeadersP>
        Please list other important things you want your future employer to know
        </HeadersP>
      <Field type="text" name="others">
        Others
      </Field>
    </TabPanel>
  );

  return (
    <div>
      <Header />
      <Body>
        <Formol item={user} onSubmit={updateProfile}>
          <Field name="first_name">First name</Field>
          <Field name="last_name">Last name</Field>
          <Field name="place" type="text">
            Place (City, Country)
          </Field>
          <Field type="tel" name="telephone">
            Telephone (XXX-XXX-XXXX)
          </Field>
          <Field readOnly type="text">
            Email
          </Field>
          <Circle />
          

          <Tabs forceRenderTabPanel={true}>
            <TabList>
              <Tab>Objective</Tab>
              <Tab>Work experience</Tab>
              <Tab>Education</Tab>
              <Tab>Skills</Tab>
              <Tab>Others</Tab>
            </TabList>

            {Objective}
            {WorkExperience}
            {Education}
            {Skills}
            {Others}
          </Tabs>
        </Formol>
      </Body>
      <Footer />
    </div>
  );
}


export default Profile;
