import Row from "react-bootstrap/Row";
import TextField from "@material-ui/core/TextField";
import flow from "../../assets/images/flow.png";
import gi from "../../assets/images/gi.png";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import classes from "./Chat.module.css";

const Chat = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "900px",
          backgroundColor: "#F6A833",
          fontWeight: "bold",
          paddingTop: "20px",
        }}
      >
        <div style={{ width: "100%" }}>
          <p
            style={{
              textAlign: "left",
              marginLeft: "202px",
              fontSize: "32px",
              color: "white",
            }}
          >
            Lets have a chat!
          </p>
        </div>
        <Row style={{ marginTop: "35px" }}>
          <input
            style={{
              width: "35vw",
              height: "8vh",
              borderRadius: "25px",
              marginLeft: "10vw",
              float: "left",
              fontSize: "150%",
              color: "#52330D",
              border: "1px solid #F6A833",
            }}
            placeholder="Your Name"
            aria-label="Enter your name"
          ></input>
          <input
            style={{
              width: "35vw",
              height: "8vh",
              borderRadius: "25px",
              marginLeft: "10vw",
              float: "left",
              fontSize: "150%",
              color: "#52330D",
              border: "1px solid #F6A833",
            }}
            placeholder="Website URL"
            aria-label="Enter your URL"
          ></input>
        </Row>
        <Row>
          <input
            style={{
              width: "35vw",
              height: "8vh",
              borderRadius: "25px",
              marginLeft: "10vw",
              marginTop: "5vh",
              float: "left",
              fontSize: "150%",
              color: "#52330D",
              border: "1px solid #F6A833",
            }}
            placeholder="Email"
            aria-label="Enter your e-mail"
          ></input>
          <input
            style={{
              width: "35vw",
              height: "8vh",
              borderRadius: "25px",
              marginLeft: "10vw",
              marginTop: "5vh",
              float: "left",
              fontSize: "150%",
              color: "#52330D",
              border: "1px solid #F6A833",
            }}
            placeholder="Phone"
            aria-label="Enter your phone number"
          ></input>
        </Row>

        <Row>
          <div>
            <img style={{ marginTop: "5vh", width: "75%" }} src={gi}></img>
          </div>
        </Row>

        <Row>
          <input
            style={{
              width: "75vw",
              height: "16vh",
              borderRadius: "25px",
              marginLeft: "10vw",
              marginRight: "10vw",
              marginTop: "5vh",
              fontSize: "150%",
              color: "black",
              border: "1px solid #F6A833",
            }}
            placeholder="Anything else you want to add? You can also email us your resume and / or portfolio at info@infiniteoptions.com"
            aria-label="Enter any questions you have for us"
          ></input>
        </Row>
        <Row>
          <button
            style={{
              height: "8vh",
              width: "20vw",
              borderRadius: "50px",
              backgroundColor: "#52330D",
              color: "white",
              marginTop: "5vh",
              border: "1px #52330D",
            }}
          >
            Send a Message
          </button>
        </Row>
      </div>
    </>
  );
};
export default Chat;
