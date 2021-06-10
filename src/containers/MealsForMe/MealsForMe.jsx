import HowItWorks from "../../assets/images/Meals4Me/M4MHowItWorks.png";
import Meals4MeMainImage from "../../assets/images/Meals4Me/Meals4MeMainImage.png";
import Meals4MeIcon from "../../assets/images/Meals4Me/Meals4MeIcon.png";
import Meals4MeMarketing from "../../assets/images/Meals4Me/Meals4MeMarketing.png";
import Meals4MeInsta from "../../assets/images/Meals4Me/Meals4MeInsta.png";
import Meals4MeTagLine from "../../assets/images/Meals4Me/Meals4MeTagLine.png";
import Meals4MeSocial from "../../assets/images/Meals4Me/Meals4MeSocial.png";
import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="page-container" style={{ fontFamily: "AvenirHeavy" }}>
        <div className="content-wrap">
          <div>
            <div style={{ marginLeft: "10%", marginRight: "10%" }}>
              <img
                style={{ width: "30%" }}
                src={Meals4MeIcon}
                aria-label="Meals for me icon"
              ></img>
            </div>
            <div style={{ marginLeft: "10%", marginRight: "10%" }}>
              <img
                style={{ width: "100%" }}
                src={HowItWorks}
                aria-label="Diagram showing how Meals For Me works"
              ></img>
            </div>

            <div
              style={{
                marginLeft: "10%",
                marginRight: "10%",
                fontWeight: "bold",
                fontSize: "200%",
                color: "#52330D",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ width: "23%", textAlign: "left" }}>
                <p>Client</p>
              </div>
              <div style={{ width: "33%", textAlign: "left" }}>
                <p>Challenge / brief</p>
              </div>
              <div
                style={{ width: "33%", marginLeft: "10%", textAlign: "left" }}
              >
                <p>Services</p>
              </div>
            </div>

            <div
              style={{
                marginLeft: "10%",
                marginRight: "10%",
                display: "flex",
                flexDirection: "row",
                color: "#707070",
              }}
            >
              <div style={{ width: "23%", fontSize: "150%" }}>
                <p
                  style={{
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  MealsFor.Me
                </p>
              </div>
              <div style={{ width: "33%" }}>
                <p
                  style={{
                    fontSize: "75%",
                    textAlign: "left",
                  }}
                >
                  YOUR BUSINESS NAME helps all businesses not only reach, but
                  exceed their goals. Our experience helps us lay out a strategy
                  that perfectly fits our clients. This collaboration is
                  essential for the successful transition from strategy, to
                  plan, to action. Learn about some of our past projects below,
                  and get in touch to see what we can do for you.
                </p>
              </div>
              <div style={{ width: "33%", marginLeft: "10%" }}>
                <p
                  style={{
                    fontSize: "75%",
                    textAlign: "left",
                  }}
                >
                  App and web Design / Development<br></br> Branding<br></br>{" "}
                  Marketing
                </p>
              </div>
            </div>

            <div style={{ float: "left", width: "100%", color: "#52330D" }}>
              <div style={{ width: "100%", float: "left", fontSize: "100%" }}>
                <img
                  style={{ width: "100%" }}
                  src={Meals4MeMainImage}
                  aria-label="Meals for me assets"
                ></img>
              </div>
            </div>

            <div
              style={{
                marginLeft: "10%",
                marginRight: "10%",
                marginTop: "50px",
                float: "left",

                color: "#52330D",
              }}
            >
              <div style={{ float: "left", fontSize: "100%" }}>
                <p
                  style={{
                    float: "left",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Marketing Content
                </p>
              </div>
            </div>

            <div
              style={{
                float: "left",
                color: "#52330D",
                marginLeft: "10%",
                marginRight: "10%",
                marginTop: "2%",
              }}
            >
              <div style={{ width: "50%", float: "left" }}>
                <img
                  style={{ width: "70%" }}
                  src={Meals4MeMarketing}
                  aria-label="Meals for me marketing content"
                ></img>
              </div>
              <div
                style={{
                  width: "50%",
                  float: "left",
                  backgroundColor: "#F6A833",
                  opacity: "0.54",
                }}
              >
                <p style={{ textAlign: "center" }}>Video</p>
                <img
                  style={{ width: "70%", opacity: "0" }}
                  src={Meals4MeMarketing}
                  aria-label="Meals for me marketing content"
                ></img>
              </div>
            </div>
            <div
              style={{
                marginLeft: "10%",
                marginRight: "10%",
                marginBottom: "10%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  color: "#52330D",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div style={{ marginTop: "10%" }}>
                  <img
                    style={{ width: "90%", paddingLeft: "10%" }}
                    src={Meals4MeInsta}
                    aria-label="Meals for me instagram placeholder"
                  ></img>
                </div>
                <div style={{ marginTop: "10%" }}>
                  <img
                    style={{ width: "90%", paddingLeft: "10%" }}
                    src={Meals4MeTagLine}
                    aria-label="Meals for me tagline placeholder"
                  ></img>
                </div>
                <div style={{ marginTop: "10%" }}>
                  <img
                    style={{ width: "90%", paddingLeft: "10%" }}
                    src={Meals4MeSocial}
                    aria-label="meals for me social placeholder"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
