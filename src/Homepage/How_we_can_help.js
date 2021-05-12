import logo from "../image/logo.png";
import how from "../image/How_we.png";
import how1 from "../image/how_we_3.png";
import Engage from "../image/Component_2.svg";

const How_we_can_help = () => {
  return (
    <>
      <p style={{ fontSize: "84px", textAlign: "center", fontWeight: "bold", color: "#52330D" }}>
        We fill the <span style={{ color: "blue" }}>gaps</span> around your skill set to help you succeed on your entrepreneurial journey
      </p>
      <div>
        <img src={how1} style={{ width: "100%" }}></img>
      </div>
      <div>
        <p style={{ fontSize: "42px", marginLeft: "25px", marginRight: "auto", marginTop: "100px", marginBottom: "100px", textAlign: "left" }}>
          All journeys are different and unique. We understand that there might be things that you and your team are already great at. We want to help you fill in the necessary
          gaps.
        </p>
      </div>
      <button style={{ height: "100px", width: "500px", borderRadius: "50px", marginBottom: "300px", backgroundColor: "#F6A833", border: "1px solid #F6A833" }}>
        {" "}
        <p style={{ color: "white", fontSize: "30px" }}>Let's Engage</p>
      </button>
    </>
  );
};

export default How_we_can_help;
