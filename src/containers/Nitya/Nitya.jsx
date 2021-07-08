import Sf_Fb from "../../assets/images/Nitya/NityaFB.png";
import Before1 from "../../assets/images/Nitya/NityaBefore1.png";
import Before2 from "../../assets/images/Nitya/NityaBefore2.png";
import background1 from "../../assets/images/Nitya/Rectangle 163.svg";
import After1 from "../../assets/images/Nitya/Mobile home@2x.png";
import After2 from "../../assets/images/Nitya/Home main@2x.png";
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div style={{ fontFamily: "AvenirHeavy" }}>
        <div style={{ marginLeft: "10%", marginRight: "10%", height: "auto" }}>
          <img
            style={{ width: "100%" }}
            src={Sf_Fb}
            alt="serving fresh diagram"
          ></img>
        </div>
        <div
          style={{
            fontWeight: "bold",
            color: "#52330D",
            marginLeft: "10%",
            marginRight: "10%",
            fontSize: "200%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ width: "23%", textAlign: "left" }}>
            <p style={{ float: "left" }}>Client</p>
          </div>
          <div style={{ width: "33%", textAlign: "left" }}>
            <p style={{ float: "left" }}>Challenge / brief</p>
          </div>
          <div style={{ width: "33%", textAlign: "left", marginLeft: "10%" }}>
            <p style={{ float: "left" }}>Services</p>
          </div>
        </div>
        <div
          style={{
            color: "#000000",
            marginLeft: "10%",
            marginRight: "10%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ width: "23%", fontSize: "150%" }}>
            <a
              style={{
                textAlign: "left",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
              href="https://www.nityaayurveda.com/"
            >
              Nitya Ayurveda
            </a>
          </div>
          <div style={{ width: "33%" }}>
            <p style={{ fontSize: "90%", textAlign: "left" }}>
              We redesigned the website for an Ayurvedic practitioner to make it
              pop and convey their messaging around Ayurveda. We also simplified
              the user flow to make it easier for people to understand the
              services and book appointments.
            </p>
          </div>
          <div style={{ width: "33%", marginLeft: "10%" }}>
            <p style={{ fontSize: "90%", textAlign: "left" }}>
              Website redesign and development
            </p>
          </div>
        </div>
        <div
          style={{
            marginLeft: "10%",
            marginRight: "10%",
            marginBottom: "5%",
            color: "#52330D",
            display: "flex",
            flexDirection: "row",
            color: "#52330D",
            fontWeight: "bold",
            fontSize: "200%",
          }}
        >
          <div style={{ width: "25%", textAlign: "left", fontSize: "100%" }}>
            <p
              style={{
                fontWeight: "bold",
              }}
            >
              Before
            </p>
          </div>
          <div style={{ width: "100%", float: "left" }}>
            <img
              style={{ width: "45%", padding: "0 10px" }}
              src={Before1}
              alt="Nitya Ayurveda before Infinite Options"
            ></img>
            <img
              style={{ width: "45%", padding: "0 10px" }}
              src={Before2}
              alt="Nitya Ayurveda before Infinite Options"
            ></img>
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url(${background1})",
          }}
        >
          <div
            style={{
              marginLeft: "10%",
              marginRight: "10%",
              // background: "#AE822E",
            }}
          >
            <Row
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                color: "#52330D",
                fontWeight: "bold",
                fontSize: "200%",
              }}
            >
              <Col style={{ width: "33%" }}>
                <div style={{ width: "75%", fontSize: "32px" }}>
                  <p
                    style={{
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    After
                  </p>
                </div>
                <div style={{ width: "75%", fontSize: "24px" }}>
                  <p
                    style={{
                      textAlign: "left",
                    }}
                  >
                    Consistent Design (same brand language) Responsive design
                    for a mobile phone
                  </p>
                </div>
                <div style={{ float: "left" }}>
                  <img
                    src={After1}
                    alt="Nitya Ayurveda after Infinite Options"
                  ></img>
                </div>
              </Col>
              <Col style={{ width: "66%" }}>
                <div style={{ float: "left" }}>
                  <img
                    src={After2}
                    alt="Nitya Ayurveda after Infinite Options"
                  ></img>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
