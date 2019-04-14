import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer style={footerStyle}>
      <Container>
        <h5>
          <strong>Connect with us!</strong>
        </h5>

        <div className="text-center small copyright">© FORMATION 2018</div>
      </Container>
    </footer>
  );
}

const footerStyle = {
  background: "#55273c",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default Footer;
