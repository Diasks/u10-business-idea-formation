import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import client from "../../client";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faPlusCircle,
  faFileDownload
} from "@fortawesome/free-solid-svg-icons";

const GenTemplateAll = styled.div`
  height: 1000px;
  width: 700px;
  padding: 30px;
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0;
    width: 595px;
    height: 842px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 30px 0 30px 50px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px 0 30px 50px;
  }
`;

const Body = styled.div`
  height: 842px;
  width: 595px;
  border: 1px gray dotted;
  padding: 30px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LastName = styled.div`
  font-weight: bold;
`;

const Place = styled.div`
  font-size: 10px;
`;

const Telephone = styled.div`
  font-size: 10px;
`;

const Email = styled.div`
  font-size: 10px;
`;

const ObjectiveWrapper = styled.div`
  font-size: 10px;
  width: 70%;
`;

const WorkExperienceWrapper = styled.div`
  margin: 28px 0 20px 0;
`;

const WorkWrapper = styled.ul`
  padding: 0;
  margin-top: 20px;
`;

const Work = styled.li`
  list-style: none;
  margin-top: 10px;
`;

const Role = styled.div`
  font-size: 12px;
`;

const Date = styled.div`
  font-size: 12px;
  font-style: italic;
`;

const AllEducationWrapper = styled.div`
  margin: 35px 0 20px 0;
`;

const EducationWrapper = styled.ul`
  padding: 0;
  margin: 20px 0 20px 0;
`;

const Education = styled.li`
  list-style: none;
  margin-top: 10px;
`;

const Program = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

const EdDate = styled.div`
  font-size: 12px;
  font-style: italic;
`;

const OthersWrapper = styled.div`
  margin: 35px 0 20px 0;
`;

const Other = styled.div`
  font-size: 12px;
`;

const SkillsWrapper = styled.div`
  margin: 35px 0 20px 0;
`;

const Skill = styled.div`
  font-size: 12px;
`;

const ReferencesWrapper = styled.div`
  margin: 35px 0 20px 0;
`;

const Reference = styled.div`
  font-size: 12px;
  font-style: italic;
`;

const Buttons = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Didact+Gothic);
  font-family: "Didact Gothic", sans-serif;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 10px 15px 10px;

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    justify-content: flex-start;
    margin: 10px 0 10px 15px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    justify-content: flex-start;
    margin: 10px 0 10px 15px;
  }
`;

const Print = styled.button`
  cursor: pointer;
  font: inherit;
  padding: 1em 2em;
  margin: 0 0.3em 0.3em 0;
  border-radius: 2em;
  text-decoration: none;
  font-weight: 300;
  background-color: #bb8fa9;
  color: #fafafa;
  text-align: center;
  transition: all 0.2s;
  border: none;

  :hover {
    background-color: #d8c1cf;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0.5em 1em;
    font-size: 12px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 0.5em 1em;
    font-size: 12px;
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  font: inherit;
  padding: 1em 2em;
  margin: 0 0.3em 0.3em 0;
  border-radius: 2em;
  text-decoration: none;
  font-weight: 300;
  background-color: #bb8fa9;
  color: #fafafa;
  text-align: center;
  transition: all 0.2s;
  border: none;

  :hover {
    background-color: #d8c1cf;
    text-decoration: none;
    color: white;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0.5em 1em;
    font-size: 12px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 0.5em 1em;
    font-size: 12px;
  }
`;

function handlePrint(user, quality = 1) {
  const filename = `${user.first_name}_${user.last_name}_CV.pdf`;

  html2canvas(document.querySelector("#body"), { scale: quality }).then(
    canvas => {
      let pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
      pdf.save(filename);
    }
  );
}

function GenTemplate() {
  const [user, setUser] = useState({ loading: true });
  useEffect(() => {
    async function fetchData() {
      const result = await client.get("/users/me");

      setUser({ jobs: [], ...result.data, loading: false });
    }

    fetchData();
  }, []);

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

  return (
    <div>
      <GenTemplateAll>
        <Buttons>
          <Print onClick={e => handlePrint(user)}>
            <FontAwesomeIcon icon={faFileDownload} /> PDF
          </Print>
          <StyledLink to="/my-cv">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} /> My CV
          </StyledLink>
          <StyledLink to="/coverletters">
            <FontAwesomeIcon icon={faPlusCircle} /> Cover letter
          </StyledLink>
        </Buttons>

        <Body id="body">
          <HeaderWrapper>
            <h3>
              <div>{user.first_name.toUpperCase()}</div>
              <LastName>{user.last_name.toUpperCase()}</LastName>
            </h3>
            <div>
              <Place>{user.place}</Place>
              <Telephone>{user.telephone}</Telephone>
              <Email>{user.email}</Email>
            </div>
          </HeaderWrapper>

          <ObjectiveWrapper>
            <p>{user.objective}</p>
          </ObjectiveWrapper>

          <WorkExperienceWrapper>
            <h6>Work Experience</h6>
            <hr />
            <WorkWrapper>
              {user.jobs.map(job => (
                <Work key={job.id}>
                  <Role>{job.role}</Role>
                  <Date>
                    {job.start_date} - {job.end_date}
                  </Date>
                </Work>
              ))}
            </WorkWrapper>
          </WorkExperienceWrapper>

          <AllEducationWrapper>
            <h6>Education</h6>
            <hr />

            <EducationWrapper>
              {user.schools.map(school => (
                <Education key={school.id}>
                  <Program>{school.program}</Program>
                  <EdDate>
                    {school.start_date} - {school.end_date}
                  </EdDate>
                </Education>
              ))}
            </EducationWrapper>
          </AllEducationWrapper>

          <SkillsWrapper>
            <h6>Skills</h6>
            <hr />

            <Skill>{user.skills}</Skill>
          </SkillsWrapper>

          <OthersWrapper>
            <h6>Qualifications</h6>
            <hr />

            <Other>{user.others}</Other>
          </OthersWrapper>

          <ReferencesWrapper>
            <h6>References</h6>
            <hr />
            <Reference>References available upon request</Reference>
          </ReferencesWrapper>
        </Body>
      </GenTemplateAll>
    </div>
  );
}

export default GenTemplate;
