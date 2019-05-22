import React, { useState, useEffect } from "react";
import Formol, { Field } from "formol/lib/formol";
import styled from "styled-components/macro";
import  Header  from "../layout/Header";
import  Footer  from "../layout/Footer";
import client from "../../client";

const Body = styled.div`
  max-width: 980px;
  min-height: 80vh;
  margin: 30px auto;
  height: 100%;
  width: 100%;
`;

// const FlexContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
// `;

// const FlexItem1 = styled.div`
//   border: 2px solid lightgrey;
//   width: 40%;
//   min-height: 80vh;
//   margin: 5px;
//   border: 1px solid;
//   padding: 10px;
//   box-shadow: 5px 10px 18px #888888;
// `;

// const FlexItem2 = styled.div`
//   border: 2px solid lightgrey;
//   width: 40%;
//   min-height: 80vh;
//   margin: 5px;
//   border: 1px solid;
//   padding: 10px;
//   box-shadow: 5px 10px 18px #888888;
// `;

// const Header1 = styled.h1`
//  color: #55273c;
//  font-size: 46px;
//  `;

//  const Paragraph = styled.p`
//  color: #55273c;
//  font-size: 14px;
//  `;


  
  function Coverletter() {

    const [user, setUser] = useState({ loading: true });

    useEffect(() => {
      async function fetchData() {
        const result = await client.get("/users/me");

        setUser({ coverletters: [], ...result.data, loading: false });
      }

      fetchData();
    }, []);

  
    async function addCoverletter(item) {
      setUser({ loading: true });

      const result = await client.post("/coverletters/save", item);

      setUser({ coverletters: [], ...result.data, loading: false });
    }

    console.log(user);

    // async function addCoverletter(item) { //item = formdatan
    //   await client.patch("/coverletters/save", item);
    // }
  
    return (
      <div>
        <Header />
        <Body>
          <Formol item={user} onSubmit={addCoverletter}>
            <Field name="company">Company</Field>
            <Field name="title">Title</Field>
            <Field name="location">Location</Field>
            <Field name="coverletter">Coverletter</Field>
          </Formol>
        </Body>
        <Footer />
      </div>
    );
  }

  export default Coverletter;










// ***** IGONORE THIS FOR NOW ******

// class Coverletter extends Component {
//     constructor(props) {
//         super(props);
    
//         this.state = {
//           coverletter: ''
//         };
    
//         this.handleChange = this.handleChange.bind(this);
//     }
    
//     handleChange(e) {
//         console.log('blomma');
//         // this.setState({
//         //   value: e.target.value
//         // });

//         //skriver till databasen för varje typad bokstav
//         //renderar ut i preview template direkt
//     }

// render() {
// 	return (
//         <div> 
//             <Header/>
//             <Body>
//             <FlexContainer>
//                 <Header1>Create a smashing coverletter</Header1>
//                     <Paragraph>Here you can create a coverletter to add to your application if needed. Some tips: <br>
//                         </br>
//                         1. hwjkh skjdhk ksjdhf <br />
//                         2. saa asfjla alsjdl <br />
//                         3. asjd asdj laksdjl <br />

//                         Happy job hunting! <br />
//                     </Paragraph>
//                 </FlexContainer>

//                 <FlexContainer>
//                     <FlexItem1>
//                         {/* <Formol item={coverletter} onSubmit={e => console.log("submitted!", e)}> */}
//                         <Formol onSubmit={e => console.log("submitted!", e)}>
//                             <Field name="company" type="text">Company</Field>
//                             <Field name="location" type="text">Location</Field>
//                             <Field name="coverletter" type="text">Coverletter</Field>
//                         </Formol>
//                     </FlexItem1>

//                     {/* <FlexItem2>
//                         Later on, this will be a template that belongs to CV <br />
//                         {this.state.value} <br />
//                     </FlexItem2> */}
//                 </FlexContainer>
//             </Body>
//             <Footer/>
//         </div>      
//     )}
            
// }
            
            
        