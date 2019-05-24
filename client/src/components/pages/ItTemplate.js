import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import client from "../../client";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Body = styled.div`
  max-height: 900px;
  max-width: 700px;
  margin: 30px auto;
  padding: 30px;
  height: 100%;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CvHeader = styled.h1`
  @import url(https://fonts.googleapis.com/css?family=Press+Start+2P);
  font-family: "Press Start 2P", sans-serif;
  display: flex;
  justify-content: center;
  padding: 40px 0 10px 0;
  font-size: 22px;
  background-color: #f5f5f5;
  margin: 0;
`;

const ObjectiveWrapper = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Rajdhani);
  display: flex;
  justify-content: center;
  font-family: "Rajdhani", sans-serif;
  font-size: 14px;
  padding: 10px 0;
  margin: 0;
  background-color: #f5f5f5;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
`;

const Place = styled.div`
  font-size: 10px;
`;

const Telephone = styled.div`
  font-size: 10px;
  margin-top: 10px;
`;

const Email = styled.div`
  font-size: 10px;
`;

const WorkExperienceWrapper = styled.div`
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
  margin: 40px 0 20px 0;
`;

const InfoHeader = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Rajdhani);
  font-family: "Rajdhani", sans-serif;
  border: 0.5px solid black;
  padding: 5px;
  display: flex;
  justify-content: center;
`;

const InfoHeaderTwo = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Rajdhani);
  font-family: "Rajdhani", sans-serif;
  border-bottom: 1px solid gray;
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
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
`;

const Other = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

const SkillsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 5px;
margin: 10px 0;
`;

const Skill = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Print = styled.button`
  display: inline-block;
   padding: 0.3em 1.2em;
   margin: 0 0.3em 0.3em 0;
   border-radius: 2em;
  border: none;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 300;
   color: #ffffff;
   background-color: #4eb5f1;
   text-align: center;
   transition: all 0.2s;

  :hover {
     background-color: #4095c6;
  }
`;

const Back = styled.button`
  display: inline-block;
   padding: 0.3em 1.2em;
   margin: 0 0.3em 0.3em 0;
   border-radius: 2em;
  border: none;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 300;
   color: #ffffff;
   background-color: #4eb5f1;
   text-align: center;
   transition: all 0.2s;

  :hover {
     background-color: #4095c6;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
   padding: 0.3em 1.2em;
   margin: 0 0.3em 0.3em 0;
   border-radius: 2em;
  border: none;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 300;
   color: #ffffff;
   background-color: #4eb5f1;
   text-align: center;
   transition: all 0.2s;

  :hover {
     background-color: #4095c6;
  }
`;

const Wrapper = styled.div`
  width: 70%;
  padding-left: 30px;
`;

const WrapperTwo = styled.div`
  width: 30%;
  padding: 20px;
  border-right: 1px gray solid;
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

function ItTemplate() {
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
      <Buttons>
        <Print onClick={e => handlePrint(user)}>Spara (PDF)</Print>
        <StyledLink to="/my-cv">Tillbaka</StyledLink>
        <StyledLink to="/coverletters">Add Coverletter</StyledLink>
      </Buttons>

      <Body id="body">
        <HeaderWrapper>
          <CvHeader>
            {user.first_name.toUpperCase()} {user.last_name.toUpperCase()}
          </CvHeader>

          <ObjectiveWrapper>
            <p>{user.objective.toUpperCase()}</p>
          </ObjectiveWrapper>
        </HeaderWrapper>
        <WrapWrapper>
          <WrapperTwo>
            <Contacts>
              <InfoHeader>
                <div>Contacts</div>
              </InfoHeader>
              <Telephone>☎ {user.telephone}</Telephone>
              <Email>✉ {user.email}</Email>
              <Place>☖ {user.place}</Place>
            </Contacts>

            <SkillsWrapper>
              <InfoHeader>
                <div>Skills</div>
              </InfoHeader>

              <Skill>{user.skills}</Skill>
            </SkillsWrapper>

            <OthersWrapper>
              <InfoHeader>
                <div>Other</div>
              </InfoHeader>
              <Other>{user.others}</Other>
            </OthersWrapper>
          </WrapperTwo>
          <Wrapper>
            <WorkExperienceWrapper>
              <InfoHeaderTwo>Work experience</InfoHeaderTwo>

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
              <InfoHeaderTwo>Education</InfoHeaderTwo>

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
        </WrapWrapper>
      </Body>
    </div>
  );
}

export default ItTemplate;
