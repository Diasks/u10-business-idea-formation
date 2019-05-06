import React from "react";


const styleHeader = {
  textAlign: "center",
  position: "absolute",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};
const styleHeader1 = {
  color: "#55273c",
  fontSize: "46px"
};
const styleGraph = {
  color: "#55273c",
  fontSize: "14px"
};

const styleForm = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

const styleInput = {
  width: "100%",
  margin: "20px 0",
  background: "rgba(0,0,0,0)",
  border: "none",
  borderBottom: "1px solid #55273c",
  input: "focus",
  select: "focus",
  textArea: "focus",
  button: "focus",
  outline: "none"
};


function Contact() {
  return (
    <div class="header" style={styleHeader}>
      <h1 style={styleHeader1}>Contact Us</h1>
      <p style={styleGraph}>
        Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem
        ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare
      </p>

      <div class="form">
        <form>
          <input type="text" placeholder="Name" style={styleInput} />
          <input type="text" placeholder="E-Mail" style={styleInput} />
          <input type="text" placeholder="Message" style={styleInput} />
        </form>
      </div>
    </div>
  );
}
export default Contact;
