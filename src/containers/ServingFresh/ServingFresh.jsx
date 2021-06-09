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

const ServingFresh = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div>
          <div
            style={{ marginLeft: "10%", marginRight: "10%", height: "auto" }}
          >
            <img style={{ width: "100%" }} src={Sf_Fb} aria-label="serving fresh diagram"></img>
          </div>
          <div
            style={{
              float: "left",
              fontWeight: "bold",
              width: "100%",
              color: "#52330D",
              marginLeft: "10%",
              marginRight: "10%",
              fontWeight: "bold",
              fontSize: "200%",
              color: "#52330D",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ width: "33%", float: "left" }}>
              <p style={{ float: "left" }}>Client</p>
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <p style={{ float: "left" }}>Challenge / brief</p>
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <p style={{ float: "left" }}>Services</p>
            </div>
          </div>

          <div
            style={{
              float: "left",
              width: "100%",
              color: "#707070",
              marginLeft: "10%",
              marginRight: "10%",
              display: "flex",
              flexDirection: "row",
              color: "#707070",
            }}
          >
            <div style={{ width: "33%", float: "left", fontSize: "150%" }}>
              <p
                style={{
                  float: "left",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
              >
                Serving Fresh, LLC
              </p>
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <p style={{ float: "left", fontSize: "75%", textAlign: "left" }}>
                YOUR BUSINESS NAME helps all businesses not only reach, but
                exceed their goals. Our experience helps us lay out a strategy
                that perfectly fits our clients. This collaboration is essential
                for the successful transition from strategy, to plan, to action.
                Learn about some of our past projects below, and get in touch to
                see what we can do for you.
              </p>
            </div>
            <div style={{ width: "33%", float: "left" }}>
              <p style={{ float: "left", fontSize: "75%", textAlign: "left" }}>
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
              <img style={{ width: "100%" }} src={Before} aria-label="Serving fresh before Infinite Options"></img>
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
                aria-label="serving fresh after Infinite Options"
              ></img>
            </div>
          </div>

          <div
            style={{ marginLeft: "10%", marginRight: "10%", height: "2900px" }}
          >
            <div style={{ float: "left", width: "100%", color: "#52330D" }}>
              <div style={{ width: "100%", float: "left", fontSize: "100%" }}>
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
            <div style={{ float: "left", width: "100%", color: "#52330D" }}>
              <div style={{ width: "50%", float: "left" }}>
                <img style={{ width: "70%" }} src={Air1} aria-label="Serving Fresh ad 1"></img>
              </div>
              <div style={{ width: "50%", float: "left" }}>
                <img style={{ width: "70%" }} src={Air2} aria-label="The same serving fresh ad but a different source for some reason"></img>
              </div>
            </div>
            <div
              style={{
                float: "left",
                width: "100%",
                color: "#52330D",
                marginTop: "75px",
              }}
            >
              <div style={{ width: "30%", float: "left" }}>
                <img style={{ width: "70%" }} src={SFFicon} aria-label="Serving Fresh icon"></img>
              </div>
              <div style={{ width: "30%", float: "left" }}>
                <img style={{ width: "70%" }} src={EggPlant} aria-label="Fun fact about eggplants, eggplants are berries, not vegetables"></img>
              </div>
              <div style={{ width: "30%", float: "left" }}>
                <img style={{ width: "70%" }} src={Insta} aria-label="Serving fresh supports local farmers, local communities, and helps build local economies"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServingFresh;
