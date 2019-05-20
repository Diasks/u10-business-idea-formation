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

const FullName = styled.div`
 font-size: 10px;
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

const CvHeader = styled.h1`

`; 

const Contacts = styled.div`
  
`;

const WorkExperienceWrapper = styled.div`
  margin: 40px 0 20px 0;
`;

const EducationWrapper = styled.div`
  margin: 20px 0 20px 0;
`;

const OthersWrapper = styled.div`
  margin: 20px 0 20px 0;
`;

const SkillsWrapper = styled.div`
  margin: 20px 0 20px 0;
`;

const ReferencesWrapper = styled.div`
 margin: 20px 0 20px 0;
`;

const Reference = styled.div`
  font-size: 12px;
`;

const Print = styled.button``;

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
       <h1>Loading...</h1>
     </div>
   );
 }

 return (
   <div>
     <Print onClick={e => handlePrint(user)}>Print</Print>
     <Body id="body">

       <HeaderWrapper>
          <CvHeader>CV</CvHeader>
          <Contacts>
            <FullName>{user.first_name} {user.last_name}</FullName>
            <Place>{user.place}</Place>
            <Telephone>{user.telephone}</Telephone>
            <Email>{user.email}</Email>
          </Contacts>
       </HeaderWrapper>

       <WorkExperienceWrapper>
          <h6>Arbetslivserfarenhet</h6>

       </WorkExperienceWrapper>

       <EducationWrapper>
          <h6>Utbildning</h6>

       </EducationWrapper>

       <SkillsWrapper>
          <h6>Kompetens</h6>

       </SkillsWrapper>

       <OthersWrapper>
          <h6>Övriga meriter</h6>

       </OthersWrapper>

       <ReferencesWrapper>
          <h6>Referenser</h6>
          <Reference>Lämnas på begäran</Reference>
       </ReferencesWrapper>
       
     </Body>
   </div>
 );
}

export default GenTemplate;