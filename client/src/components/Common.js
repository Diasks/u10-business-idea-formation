import styled from "styled-components/macro";
import TemplatePic from "../assets/template-pic.png";

export const colors = {
  Cerulean: "#00c0fd",
  DarkCerulean: "#001319",
  LividBrown: "#55273c",
  Tapestry: "#ae6488",
  Melanie: "#e4bdd0",
  LightLily: "rgb(246,236,241)",
  Lily: "#bf9ead",
  Gray: "#7e7e7e",
  LightGray: "#d3d3d3"
};

export const TemplatePicture = styled.div`
  height: 255px;
  width: 175px;
  z-index: 1000;
  margin: auto;
  background-image: url(${TemplatePic});
  border: 1px ${colors.Gray} solid;
  box-shadow: 8px 8px 0 0 ${colors.Lily};
`;
