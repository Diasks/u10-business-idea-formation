import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";


let styleHeader = {
  backgroundColor: "#ffffff",
  textAlign: "center",
  //fontFamily: "palatino"
};
let styleHeader1 = {
  textTransform: "uppercase",
  marginBottom: "60px",
  height: "300px",
  color: "#55273c",
  fontSize: "40px",
  textAlign: "center"
};
let styleParagraph = {
  fontSize: "20px",
  color: "#55273c",
  textAlign: "center",
  //fontFamily: "palatino"
};

function About() {
  return (
    <div class="bgSection" style={styleHeader}>
      <Header />
      <h1 style={styleHeader1}>- Our Mission - </h1>
      <div class="aboutParagraph" style={styleParagraph}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          commodo odio aenean sed adipiscing diam donec adipiscing. Fusce id
          velit ut tortor pretium. Accumsan sit amet nulla facilisi morbi
          tempus. Nunc consequat interdum varius sit. Netus et malesuada fames
          ac turpis egestas sed tempus. Ullamcorper a lacus vestibulum sed. Ut
          morbi tincidunt augue interdum velit euismod in pellentesque. Facilisi
          morbi tempus iaculis urna. Gravida cum sociis natoque penatibus et.
          Arcu ac tortor dignissim convallis aenean et tortor at. Diam quis enim
          lobortis scelerisque fermentum dui faucibus. Platea dictumst
          vestibulum rhoncus est pellentesque elit. Mi ipsum faucibus vitae
          aliquet nec. Vehicula ipsum a arcu cursus. Cras sed felis eget velit
          aliquet sagittis id. Euismod quis viverra nibh cras pulvinar mattis
          nunc sed blandit. Placerat duis ultricies lacus sed turpis tincidunt
          id aliquet risus.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
