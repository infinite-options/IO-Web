import Sf_Fb from "../../assets/images/ServingFresh/SF_fb.png";
import Before from "../../assets/images/ServingFresh/before.png";
import SFF from "../../assets/images/ServingFresh/SFF.png";
import Air1 from "../../assets/images/ServingFresh/SFMarketing.png";
import Air2 from "../../assets/images/ServingFresh/SFMarketing@2x.png";
import Insta from "../../assets/images/ServingFresh/SFInstagram.png";
import EggPlant from "../../assets/images/ServingFresh/eggplant.png";
import SFFicon from "../../assets/images/ServingFresh/SFicon.png";
import SFFAfter from "../../assets/images/ServingFresh/SFFAfter.png";
import Footer from "../../components/Footer";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="page-container" style={{ fontFamily: "AvenirHeavy" }}>
        <div className="content-wrap">
          <div>
            <div
              style={{ marginLeft: "10%", marginRight: "10%", height: "auto" }}
            >
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
              <div
                style={{ width: "33%", textAlign: "left", marginLeft: "10%" }}
              >
                <p style={{ float: "left" }}>Services</p>
              </div>
            </div>
            <div
              style={{
                color: "#707070",
                marginLeft: "10%",
                marginRight: "10%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ width: "23%", fontSize: "150%" }}>
                <p
                  style={{
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Serving Fresh, LLC
                </p>
              </div>
              <div style={{ width: "33%" }}>
                <p style={{ fontSize: "75%", textAlign: "left" }}>
                  YOUR BUSINESS NAME helps all businesses not only reach, but
                  exceed their goals. Our experience helps us lay out a strategy
                  that perfectly fits our clients. This collaboration is
                  essential for the successful transition from strategy, to
                  plan, to action. Learn about some of our past projects below,
                  and get in touch to see what we can do for you.
                </p>
              </div>
              <div style={{ width: "33%", marginLeft: "10%" }}>
                <p style={{ fontSize: "75%", textAlign: "left" }}>
                  App and web Design / Development<br></br> Branding<br></br>{" "}
                  Marketing
                </p>
              </div>
            </div>
            <div
              style={{
                marginLeft: "10%",
                marginRight: "10%",
                color: "#52330D",
                display: "flex",
                flexDirection: "row",
                float: "left",
                color: "#52330D",
                fontWeight: "bold",
                fontSize: "200%",
              }}
            >
              <div
                style={{ width: "25%", textAlign: "left", fontSize: "100%" }}
              >
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
                  style={{ width: "100%" }}
                  src={Before}
                  alt="Serving fresh before Infinite Options"
                ></img>
              </div>
            </div>
            <div
              style={{
                marginLeft: "10%",
                marginRight: "10%",
                color: "#52330D",
                display: "flex",
                flexDirection: "row",
                float: "left",
                color: "#52330D",
                float: "left",
                width: "100%",
                color: "#52330D",
                fontWeight: "bold",
                fontSize: "200%",
              }}
            >
              <div style={{ width: "100%", float: "left", fontSize: "100%" }}>
                <p
                  style={{
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  After
                </p>
              </div>
            </div>
            <div style={{ float: "left", width: "100%", color: "#52330D" }}>
              <div style={{ width: "100%", float: "left", fontSize: "100%" }}>
                <img
                  style={{ width: "100%", marginLeft: "0px" }}
                  src={SFFAfter}
                  alt="serving fresh after Infinite Options"
                ></img>
              </div>
            </div>
            <div
              style={{
                marginLeft: "10%",
                marginRight: "10%",
                color: "#52330D",
                float: "left",
                width: "100%",
                fontWeight: "bold",
                fontSize: "200%",
              }}
            >
              <div style={{ width: "100%", float: "left", fontSize: "100%" }}>
                <p
                  style={{
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
                  src={Air1}
                  alt="Serving Fresh ad 1"
                ></img>
              </div>
              <div style={{ width: "50%", float: "left" }}>
                <img
                  style={{ width: "70%" }}
                  src={Air2}
                  alt="The same serving fresh ad but a different source for some reason"
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
                <div style={{ marginTop: "10%", width: "30%", float: "left" }}>
                  <img
                    style={{ width: "70%" }}
                    src={SFFicon}
                    alt="Serving Fresh icon"
                  ></img>
                </div>
                <div style={{ marginTop: "10%", width: "30%", float: "left" }}>
                  <img
                    style={{ width: "70%" }}
                    src={EggPlant}
                    alt="Fun fact about eggplants, eggplants are berries, not vegetables"
                  ></img>
                </div>
                <div style={{ marginTop: "10%", width: "30%", float: "left" }}>
                  <img
                    style={{ width: "70%" }}
                    src={Insta}
                    alt="Serving fresh supports local farmers, local communities, and helps build local economies"
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
