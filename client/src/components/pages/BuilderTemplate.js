import React, { useState, useEffect } from 'react';
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import client from '../../client';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const Body = styled.div`
 max-height: 800px;
 max-width: 700px;
 margin: 30px auto;
 padding: 30px;
 height: 100%;
 width: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CvHeader = styled.h1`
  padding: 0 0 10px 20px;
  border-bottom: 0.5px dotted gray;
`; 

const Contacts = styled.div`
  color: gray;
  font-size: 8px;
  display: flex;
  flex-direction: column;
`;

const FullName = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Place = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Telephone = styled.div`
display: flex;
justify-content: flex-end;
`;

const Email = styled.div`
display: flex;
justify-content: flex-end;
`;

const Headers = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Audiowide);
  display: flex;
  justify-content: center;
  font-family: 'Audiowide';
`;

const WorkExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 35px 0 20px 0;
`;

const WorkWrapper = styled.ul`
display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  margin-top: 5px;
`;

const Work = styled.li`

  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  margin-top: 10px;

`;

const Role = styled.div`
@import url(https://fonts.googleapis.com/css?family=Didact+Gothic);
font-family: 'Didact Gothic';
display: flex;
  justify-content: center;
  font-size: 12px;
`;

const Date = styled.div`
@import url(https://fonts.googleapis.com/css?family=Didact+Gothic);
font-family: 'Didact Gothic';
display: flex;
  justify-content: center;
  font-size: 12px;
  font-style: italic;
`;

const AllEducationWrapper = styled.div`
  margin: 0px 0 20px 0;
`;

const Education = styled.li`
  list-style: none;
  margin-top: 10px;
  
`;

const Program = styled.div`
@import url(https://fonts.googleapis.com/css?family=Didact+Gothic);
font-family: 'Didact Gothic';
  font-size: 12px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const EdDate = styled.div`
@import url(https://fonts.googleapis.com/css?family=Didact+Gothic);
font-family: 'Didact Gothic';
  font-size: 12px;
  font-style: italic;
  display: flex;
  justify-content: center;
`;

const SkillsWrapper = styled.div`
  margin: 35px 0 20px 0;
`;

const Skill = styled.div`
@import url(https://fonts.googleapis.com/css?family=Didact+Gothic);
font-family: 'Didact Gothic';
  font-size: 12px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;


const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Print = styled.button`
 display:inline-block;
 padding:0.3em 1.2em;
 margin:0 0.3em 0.3em 0;
 border-radius:2em;
 border: none;
 box-sizing: border-box;
 text-decoration:none;
 font-family:'Roboto',sans-serif;
 font-weight:300;
 color:#FFFFFF;
 background-color:#4eb5f1;
 text-align:center;
 transition: all 0.2s;


:hover {
   background-color:#4095c6;
  }

`;

const StyledLink = styled(Link)`
 display:inline-block;
 padding:0.3em 1.2em;
 margin:0 0.3em 0.3em 0;
 border-radius:2em;
 border: none;
 box-sizing: border-box;
 text-decoration:none;
 font-family:'Roboto',sans-serif;
 font-weight:300;
 color:#FFFFFF;
 background-color:#4eb5f1;
 text-align:center;
 transition: all 0.2s;

:hover {
   background-color:#4095c6;
  }

`;

const Wrapper = styled.div`
  width: 50%;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  
`;

const WrapperTwo = styled.div`
  width: 50%;
  padding-left: 20px;
  border-left: 0.5px gray dotted;
  margin-top: 35px;
`;

const WrapWrapper = styled.div`
  display: flex;
  
`;



function handlePrint(user, quality = 1) {
 const filename = `${user.first_name}_${user.last_name}_CV.pdf`;

 html2canvas(document.querySelector("#body"), { scale: quality }).then(
   canvas => {
     let pdf = new jsPDF("p", "mm", "a4");
     pdf.addImage(canvas.toDataURL("image/jpg"), "jpg", 0, 0, 211, 298);
     pdf.save(filename);
   }
 );
}

function BuilderTemplate() {
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
       <div className="spinner-grow" style={{width: '3rem', height: '3rem',}} role="status">
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
       <Contacts>
            <FullName>{user.first_name} {user.last_name}</FullName>
            <Telephone>{user.telephone}</Telephone>
            <Email>{user.email}</Email>
            <Place>{user.place}</Place>
          </Contacts>
          <CvHeader>CV</CvHeader>
       </HeaderWrapper>
<WrapWrapper>
<Wrapper>
       <WorkExperienceWrapper>
          <Headers>WORK EXPERIENCE</Headers>

          <WorkWrapper>
            {user.jobs.map(job =>
            <Work key={job.id}>
              <Role>{job.role}</Role>
              <Date>{job.start_date} - {job.end_date}</Date>
            </Work>
            )}
          </WorkWrapper>

       </WorkExperienceWrapper>

      

       </Wrapper>

<WrapperTwo>

<AllEducationWrapper>
          <Headers>EDUCATION</Headers>
            {user.schools.map(school =>
            <Education key={school.id}>
              <Program>{school.program}</Program>
              <EdDate>{school.start_date} - {school.end_date}</EdDate>
            </Education>
            )}
       </AllEducationWrapper>

       <SkillsWrapper>
          <Headers>SKILLS</Headers>
          <Skill>{user.skills}</Skill>
       </SkillsWrapper>


</WrapperTwo>
</WrapWrapper>

       
     </Body>
   </div>
 );
}

export default BuilderTemplate;