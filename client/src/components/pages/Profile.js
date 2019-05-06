import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styled from "styled-components/macro";
import { colors } from "../Common";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "formol/lib/default.css";
import Formol, { Field } from "formol/lib/formol";

const Body = styled.div`
  max-width: 980px;
  min-height: 980px;
  margin: 30px auto;
  padding: 30px;
  height: 100%;
  width: 100%;
`;

const Circle = styled.div`
  position: absolute;
  z-index: 1000;
  right: 200px;
  top: 150px;
  border-radius: 50%;
  height: 400px;
  width: 400px;
  background: ${colors.LightLily};
  background-position: 50% 50%;
  background-size: cover;
`;

function Profile() {
  return (
    <div>
      <Header />

      <Body>
        <Formol onSubmit={e => console.log("submitted!", e)}>
          <Field type="text">Full name</Field>
          <Field type="text">Place (City, Country)</Field>
          <Field type="tel">Telephone (XXX-XXX-XXXX)</Field>
          <Field type="email">Email</Field>
        </Formol>
        <Circle />

        <Tabs>
          <TabList>
            <Tab>Objective</Tab>
            <Tab>Work experience</Tab>
            <Tab>Education</Tab>
            <Tab>Skills</Tab>
            <Tab>Others</Tab>
          </TabList>

          <TabPanel>
            <h2>Objective</h2>
            <p>
              Please think of the main objective you want to reach with you CV
            </p>
            <Formol onSubmit={e => console.log("submitted!", e)}>
              <Field type="area">Objective</Field>
            </Formol>
          </TabPanel>
          <TabPanel>
            <h2>Work experience</h2>
            <p>Please list all your jobs in reverse order</p>
            <Formol onSubmit={e => console.log("submitted!", e)}>
              <Field type="date">Date job started</Field>
              <Field type="date">Date job finished</Field>
              <Field type="area">Role, Company, Place</Field>
            </Formol>
          </TabPanel>
          <TabPanel>
            <h2>Education</h2>
            <p>Please list your education in reverse order</p>
            <Formol onSubmit={e => console.log("submitted!", e)}>
              <Field type="date">Date education started</Field>
              <Field type="date">Date education finished</Field>
              <Field type="area">Program, Institution, Place</Field>
            </Formol>
          </TabPanel>
          <TabPanel>
            <h2>Skills</h2>
            <p>
              Please list all your skills relevant to the job you want to get
            </p>
            <Formol onSubmit={e => console.log("submitted!", e)}>
              <Field type="area">Skills</Field>
            </Formol>
          </TabPanel>
          <TabPanel>
            <h2>Others</h2>
            <p>
              Please list other important things you want your future employer
              to know
            </p>
            <Formol onSubmit={e => console.log("submitted!", e)}>
              <Field type="area">Others</Field>
            </Formol>
          </TabPanel>
        </Tabs>
      </Body>
      <Footer />
    </div>
  );
}

export default Profile;
