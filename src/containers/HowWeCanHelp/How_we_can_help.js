import how1 from "../../assets/images/HowWeCanHelp.svg";
import How_We_Can_Help_Portfolio from "./How_we_can_help_Portfolio.js";

const How_we_can_help = () => {
  return (
    <div>
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <p
          style={{
            fontSize: "84px",
            textAlign: "center",
            fontWeight: "bold",
            color: "#52330D",
            fontFamily: "AvenirHeavy",
          }}
        >
          You bring the skills,{" "}
          <span style={{ color: "#F6A833" }}>We fill the</span>{" "}
          <span style={{ color: "white", webkitTextStroke: "2px #F6A833" }}>
            gaps
          </span>
          <br />
          See how it all fits together
        </p>
        <div>
          <img src={how1} style={{ width: "100%" }} aria-label="Infinite Options diagram"></img>
        </div>
        <div>
          <p
            style={{
              fontSize: "42px",
              // fontSize: "180%",
              marginLeft: "25px",
              marginRight: "auto",
              marginTop: "100px",
              marginBottom: "100px",
              textAlign: "left",
              color: "#52330D",
              fontFamily: "AvenirHeavy",
            }}
          >
            All journeys are different and unique. We understand that there
            might be things that you and your team are already great at. We want
            to help you fill in the necessary gaps.
          </p>
        </div>
        <button
          style={{
            height: "100px",
            width: "500px",
            borderRadius: "50px",
            marginBottom: "200px",
            backgroundColor: "#F6A833",
            border: "1px solid #F6A833",
          }}
        >
          {" "}
          <p style={{ color: "white", fontSize: "30px" }} aria-label="This button does nothing">Let's Engage</p>
        </button>
      </div>

      <How_We_Can_Help_Portfolio />
    </div>
  );
};

export default How_we_can_help;
