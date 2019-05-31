import React, { Component } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import BuilderImg from "../../assets/build.png";
import ItImg from "../../assets/IT.png";
import MediaImg from "../../assets/media.png";
import GeneralImg from "../../assets/general.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

const Button = styled.button`
  @import url(https://fonts.googleapis.com/css?family=BenchNine:700);

  display: inline-block;
  padding: 20px 60px 20px 60px;
  margin: 20px;
  color: #bb8fa9 !important;
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
    border-color: #d8c1cf !important;
    transition: all 0.3s ease 0s;
    background-color: #d8c1cf;
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
    flex-flow: wrap;
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
  color: #bb8fa9;
  font-size: 4em;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 3em;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 8em;
    margin: 110px 10px 40px 10px;
  }
`;

const ProfessionParagraph = styled.p`
  @import url(https://fonts.googleapis.com/css?family=BenchNine:700);
  font-family: "BenchNine";
  font-size: 1.9em;
  text-align: center;
  margin: 0 30px;
  color: lightgray;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  padding: 1em 2em;
  margin-bottom: 4em;
   border-radius: 2em;
  border: none;
   box-sizing: border-box;
   text-decoration: none;
   font-weight: 300;
   color: #ffffff;
   background-color: #bb8fa9;
   text-align: center;
   transition: all 0.2s;

  :hover {
    background-color: #d8c1cf;
    text-decoration: none;
    color: #ffffff;
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

export default class Profession extends Component {
  constructor() {
    super();
    this.routeChange = this.routeChange.bind(this);
    this.itRouteChange = this.itRouteChange.bind(this);
    this.builderRouteChange = this.builderRouteChange.bind(this);
    this.mediaRouteChange = this.mediaRouteChange.bind(this);
  }

  routeChange() {
    const path = `general-template`;
    this.props.history.push(path);
  }

  itRouteChange() {
    const path = `it-template`;
    this.props.history.push(path);
  }

  builderRouteChange() {
    const path = `builder-template`;
    this.props.history.push(path);
  }

  mediaRouteChange() {
    const path = `media-template`;
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <Header />
        <ProfessionHeader>My CV Templates</ProfessionHeader>
        <ProfessionParagraph>
          Click on the template you would like to use for your resume.
        </ProfessionParagraph>

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
              <Button onClick={this.builderRouteChange}>
                Construction Business
              </Button>
            </CardBody>
          </Card>

          <Card className="card">
            <img src={MediaImg} className="card-img-top" alt="..." />
            <CardBody className="card-body">
              <Button onClick={this.mediaRouteChange}>Art/Culture</Button>
            </CardBody>
          </Card>
        </Professions>
        <Buttons>
          <StyledLink to="/profile">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Profile
          </StyledLink>
        </Buttons>
        <Footer />
      </div>
    );
  }
}
