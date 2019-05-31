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
  faFileDownload,
  faMobileAlt,
  faEnvelope,
  faHome
} from "@fortawesome/free-solid-svg-icons";

const MediaTemplateAll = styled.div`
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
  flex-direction: column;
  justify-content: center;
  background-color: #ffc886;
`;

const ObjectiveWrapper = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Rajdhani);
  display: flex;
  justify-content: center;
  font-family: "Rajdhani", sans-serif;
  font-size: 18px;
  padding-top: 5px;
`;

const CvHeader = styled.h1`
  @import url(https://fonts.googleapis.com/css?family=Poiret+One);
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-family: "Poiret One", cursive;
  padding: 20px 0 10px 0;
  border-bottom: thin solid black;
  margin: 0 50px 0 50px;
`;

const Contacts = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Julius+Sans+One);
  font-family: "Julius Sans One", sans-serif;
`;

const Place = styled.div`
  font-size: 8px;
`;

const Telephone = styled.div`
  font-size: 8px;
`;

const Email = styled.div`
  font-size: 8px;
`;

const WorkExperienceWrapper = styled.div`
  @import url(https://fonts.googleapis.com/css?family=JuliusSans+One);
  font-family: "Julius Sans One", "sans-serif";
  margin: 40px 0 20px 0;
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
  @import url(https://fonts.googleapis.com/css?family=Julius+Sans+One);
  font-family: "Julius Sans One", "sans-serif";
  margin: 40px 0 20px 0;
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
  @import url(https://fonts.googleapis.com/css?family=Julius+Sans+One);
  font-family: "Julius Sans One", "sans-serif";
  margin: 35px 0 20px 0;
`;

const Other = styled.div`
  font-size: 12px;
`;

const SkillsWrapper = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Julius+Sans+One);
  font-family: "Julius Sans One", "sans-serif";
  margin: 35px 0 20px 0;
`;

const Skill = styled.div`
  font-size: 12px;
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

const Wrapper = styled.div`
  width: 70%;
  margin-left: 20px;
`;

const WrapperTwo = styled.div`
  width: 30%;
  padding-left: 30px;
  border-left: 1px #ffc886 dotted;
  margin-top: 35px;
`;

const WrapWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
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

function MediaTemplate() {
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
      <MediaTemplateAll>
        <Buttons>
          <Print onClick={e => handlePrint(user)}>
            <FontAwesomeIcon icon={faFileDownload} /> PDF
          </Print>
          <StyledLink to="/my-cv">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} /> My CV
          </StyledLink>
          <StyledLink to="/my-templates">
            <FontAwesomeIcon icon={faPlusCircle} /> Cover letter
          </StyledLink>
        </Buttons>

        <Body id="body">
          <HeaderWrapper>
            <CvHeader>
              {user.first_name} {user.last_name}
            </CvHeader>

            <ObjectiveWrapper>
              <p>{user.objective}</p>
            </ObjectiveWrapper>
          </HeaderWrapper>

          <WrapWrapper>
            <Wrapper>
              <WorkExperienceWrapper>
                <h6>WORK EXPERIENCE</h6>
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
                <h6>EDUCATION</h6>

                {user.schools.map(school => (
                  <Education key={school.id}>
                    <Program>{school.program}</Program>
                    <EdDate>
                      {school.start_date} - {school.end_date}
                    </EdDate>
                  </Education>
                ))}
              </AllEducationWrapper>
            </Wrapper>

            <WrapperTwo>
              <Contacts>
                <h6>CONTACTS</h6>
                <Telephone>
                  <FontAwesomeIcon icon={faMobileAlt} /> {user.telephone}
                </Telephone>
                <Email>
                  <FontAwesomeIcon icon={faEnvelope} /> {user.email}
                </Email>
                <Place>
                  <FontAwesomeIcon icon={faHome} /> {user.place}
                </Place>
              </Contacts>
              <SkillsWrapper>
                <h6>SKILLS</h6>
                <Skill>{user.skills}</Skill>
              </SkillsWrapper>

              <OthersWrapper>
                <h6>OTHER</h6>
                <Other>{user.others}</Other>
              </OthersWrapper>
            </WrapperTwo>
          </WrapWrapper>
        </Body>
      </MediaTemplateAll>
    </div>
  );
}

export default MediaTemplate;
