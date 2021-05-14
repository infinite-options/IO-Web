import logo from "../image/logo.png";
import how from "../image/How_we.png";
import how1 from "../image/how_we_3.png";
import Engage from "../image/Component_2.svg";

const How_we_can_help = () => {
  return (
    < div style={{marginLeft:'10%',marginRight:'10%'}}>

      <p
        style={{
          fontSize: "400%",
          textAlign: "center",
          fontWeight: "bold",
          color: "#52330D",
        }}
      >You bring the skills,
        <span style={{color:'#F6A833'}}>We fill the</span>{" "}
        <span style={{ color: "white", webkitTextStroke: "2px #F6A833" }}>
          gaps
        </span>{" "}
        <br></br>
        See how it all fits together
      </p>
      <div>
        <img src={how1} style={{ width: "100%" }}></img>
      </div>
      <div>
        <p
          style={{
            fontSize: "180%",
            marginLeft: "25px",
            marginRight: "auto",
            marginTop: "100px",
            marginBottom: "100px",
            textAlign: "left",
            fontWeight:'bold'
          }}
        >
          All journeys are different and unique. We understand that there might be things<br></br> that you and your team are already great at. We want to help you fill in the <br></br>necessary gaps so you have everything you need to be successful.
        </p>
      </div>
      <button
        style={{
          height: "100px",
          width: "500px",
          borderRadius: "50px",
          marginBottom: "300px",
          backgroundColor: "#F6A833",
          border: "1px solid #F6A833",
        }}
      >
        {" "}
        <p style={{ color: "white", fontSize: "30px" }}>Let's Engage</p>
      </button>
    </div>
  );
};

export default How_we_can_help;
