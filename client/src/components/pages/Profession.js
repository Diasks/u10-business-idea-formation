import React, { Component } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import BuilderImg from "../../assets/build.png";
import ItImg from "../../assets/IT.png";
import MediaImg from "../../assets/media.png";
import GeneralImg from "../../assets/general.png";

const Button = styled.button`
  @import url(https://fonts.googleapis.com/css?family=BenchNine:700);

  display: inline-block;
  padding: 20px 60px 20px 60px;
  margin: 20px;
  color: rgb(219, 171, 213) !important;
  text-transform: uppercase;
  background: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 30px;
  display: inline-block;
  font-family: "BenchNine";
  font-size: 26px;

  :hover {
    color: #fff !important;
    border-radius: 50px;
    border-color: #4eb5f1 !important;
    transition: all 0.3s ease 0s;
    background: rgb(219, 171, 213);
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 30px;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 32px;
  }


`;

const Professions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0 50px 0;

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    margin: 60px 0 40px 0;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin: 60px 40px 40px 40px;
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-flow: wrap
  }

  
`;

const ProfessionHeader = styled.h1`
  @import url(https://fonts.googleapis.com/css?family=BenchNine:700);
  display: flex;
  justify-content: center;
  margin: 100px 10px 40px 10px;
  text-align: justify;
  font-family: "BenchNine";
  line-height: 0.8;
  text-transform: uppercase;
  letter-spacing: 0px;
  color: rgb(219, 171, 213);
  font-size: 4em;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 3em;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 8em;
    margin: 110px 10px 40px 10px;
  }
`;

const StyledLink = styled(Link)`
   @import url(https://fonts.googleapis.com/css?family=Didact+Gothic);
   display: flex;
   align-item: center;
   justify-content: center;
   padding: 1em 1.2em;
   margin: 0 35em 5em 35em;
   border-radius: 2em;
   border: none;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Didact Gothic", sans-serif;
   font-weight: 300;
   color: #ffffff;
   background-color: rgb(219, 171, 213);
   text-align: center;
   transition: all 0.2s;

  :hover {
    background-color: rgb(202, 161, 197);
    text-decoration: none;
    color: #ffffff;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 0 5.5em 5em 5.5em;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin: 0 10.6em 5em 10.6em;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 30px;
    margin: 0 9.5em 5em 9.5em;
    padding: 20px;
  }

`;

const Card = styled.div`
  border: none;
  display: flex;
  align-items: center;
  margin: 40px;

  :hover {
    box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.125);
    border-radius: 5px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 10px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin: 0;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 270px;
  }
  
  
`;

const CardBody = styled.div``;

class Profession extends Component {
  constructor() {
    super();
    this.routeChange = this.routeChange.bind(this);
    this.itRouteChange = this.itRouteChange.bind(this);
    this.builderRouteChange = this.builderRouteChange.bind(this);
    this.mediaRouteChange = this.mediaRouteChange.bind(this);
  }

  routeChange() {
    const path = `GenTemplate`;
    this.props.history.push(path);
  }

  itRouteChange() {
    const path = `ItTemplate`;
    this.props.history.push(path);
  }

  builderRouteChange() {
    const path = `BuilderTemplate`;
    this.props.history.push(path);
  }

  mediaRouteChange() {
    const path = `MediaTemplate`;
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <Header />
        <ProfessionHeader>My CV Templates</ProfessionHeader>

        <Professions>
          
          <Card className="card">
            <img src={GeneralImg} className="card-img-top" alt="..." />
            <CardBody className="card-body">
              <Button onClick={this.routeChange}>General</Button>
            </CardBody>
          </Card>

          <Card className="card">
            <img src={ItImg} className="card-img-top" alt="..." />
            <CardBody className="card-body">
              <Button onClick={this.itRouteChange}>IT</Button>
            </CardBody>
          </Card>
          

         
          <Card className="card">
            <img src={BuilderImg} className="card-img-top" alt="..." />
            <CardBody className="card-body">
              <Button onClick={this.builderRouteChange}>Construction Business</Button>
            </CardBody>
          </Card>

          <Card className="card">
            <img src={MediaImg} className="card-img-top" alt="..." />
            <CardBody className="card-body">
              <Button onClick={this.mediaRouteChange}>Art/Culture</Button>
            </CardBody>
          </Card>
          
        </Professions>

        <StyledLink to="/profile">Back to profile</StyledLink>

        <Footer />
      </div>
    );
  }
}

export default Profession;
