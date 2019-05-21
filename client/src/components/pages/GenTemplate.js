import React, { useState, useEffect } from 'react';
import styled from "styled-components/macro";
import client from '../../client';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


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
  justify-content: space-between;
  
`;

const CvHeader = styled.h1`
  
`; 

const Contacts = styled.div`
  
`;

const FirstName = styled.div`
  
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

const EducationWrapper = styled.div`
  margin: 35px 0 20px 0;
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

const Back = styled.button`
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

function goBack() {
  window.history.back();
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
        <Back onClick={e => goBack()}>Tillbaka</Back>
     </Buttons>

     <Body id="body">

       <HeaderWrapper>
          <CvHeader>
            <FirstName>{user.first_name.toUpperCase()}</FirstName>
            <LastName>{user.last_name.toUpperCase()}</LastName>
          </CvHeader>
          <Contacts>
            
            <Place>{user.place}</Place>
            <Telephone>{user.telephone}</Telephone>
            <Email>{user.email}</Email>
          </Contacts>
       </HeaderWrapper>

       <ObjectiveWrapper>
         <p>{user.objective}</p>
       </ObjectiveWrapper>

       <WorkExperienceWrapper>
          <h6>Arbetslivserfarenhet</h6>
          <hr />
          <WorkWrapper>
            {user.jobs.map(job =>
            <Work key={job.id}>
              <Role>{job.role}</Role>
              <Date>{job.start_date} - {job.end_date}</Date>
            </Work>
            )}
          </WorkWrapper>

       </WorkExperienceWrapper>

       <EducationWrapper>
          <h6>Utbildning</h6>
          <hr />
          
          {/* Tillfälligt med fake-data*/}
          <Program>Företagsekonomi, Stockholms Universitet, Stockholm</Program>
          <EdDate>2013-08-01 - 2016-06-01</EdDate>
          <Program>Samhällsvetenskapliga programmet, Fyrisskolan, Uppsala</Program>
          <EdDate>2010-08-01 - 2013-06-01</EdDate>

          <ul>
            {user.schools.map(school =>
            <Education key={school.id}>
              {/* <p>{school.program}</p> */}
            </Education>
            )}
          </ul>

       </EducationWrapper>

       <SkillsWrapper>
          <h6>Kompetens</h6>
          <hr />

          <Skill>{user.skills}</Skill>

       </SkillsWrapper>

       <OthersWrapper>
          <h6>Övriga meriter</h6>
          <hr />

          <Other>{user.others}</Other>

       </OthersWrapper>

       <ReferencesWrapper>
          <h6>Referenser</h6>
          <hr />
          <Reference>Lämnas på begäran</Reference>
       </ReferencesWrapper>
       
     </Body>
   </div>
 );
}

export default GenTemplate;