import React, { useState, useEffect } from 'react';
import styled from "styled-components/macro";
import client from '../../client';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const Body = styled.div`
 max-height: 900px;
 margin: 30px auto;
 padding: 30px;
 height: 100%;
 width: 100%;
`;

const FullName = styled.h1`
 color: red;
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
       <FullName>
         {user.first_name} {user.last_name}
       </FullName>
     </Body>
   </div>
 );
}

export default GenTemplate;