import { makeStyles } from "@material-ui/core/styles";
import MobileAppsWhite from "../assets/MobileWhite.svg";
import MarketingNBrandingWhite from "../assets/MarketingWhite.svg";
import BusinessStrategyWhite from "../assets/BusinessWhite.svg";
import HardwareEngineeringWhite from "../assets/HardwareWhite.svg";
import UIUXDesignWhite from "../assets/UIUXDesignWhite.svg";
import WebSoftwareDevWhite from "../assets/WebWhite.svg";

const useStyles = makeStyles((theme) => ({
  contaier: {
    margin: "auto",
    width: "50%",
    padding: "50px",
  },
  h1: {
    color: "White",
    textAlign: "left",
  },
  input: {
    backgroundColor: "White",
    width: "45%",
    border: "none",
    color: "white",
    padding: "20px",
    boxSizing: "border-box",
    borderRadius: "20px",
    resize: "none",
    fontColor: "#52330D",
    fontSize: "20px",
    display: "inline-block",
    margin: "5px",
    alignContent: "left",
  },
  textarea: {
    backgroundColor: "White",
    width: "100%",
    border: "none",
    color: "white",
    padding: "20px",
    height: "150px",
    boxSizing: "border-box",
    borderRadius: "20px",
    resize: "none",
    fontColor: "#52330D",
    fontSize: "20px",
  },
  button: {
    backgroundColor: "#52330D",
    border: "none",
    color: "white",
    padding: "15px 30px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "20px",
    borderRadius: "50px",
  },
  img: {
    width: "100px",
  },
  checkbox: {},
  logoContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));


}


const Contact = () => {
  const classes = useStyles();

  //For Axios.Post

  const [fName, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [notes, setNotes] = useState("");
  const [url, setUrl] = useState("");

  const handleFirstNameChange = (newFName) => {
    setFName(newFName);
  };

  const handleUrlChange = (newUrl) => {
    setUrl(newUrl);
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const handlePhoneNumChange = (newPhoneNum) => {
    setPhoneNum(newPhoneNum);
  };

  const handleNotesChange = (newNotes) => {
    setNotes(newNotes);
  };

   function sendMessage() {
    console.log(fName, url, email, phoneNum);
  const postURL =
      "https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/addContact";
       axios
      .post(postURL, {
        first_name: fName,
        last_name: "", //lName,
        email: email,
        phone_no: phoneNum,
        notes: notes,
     
      })
      .then((res) => console.log(res));

  return (
    <section id="contact" style={{ backgroundColor: "#F6A833" }}>
      <div className={classes.contaier}>
        <h1 className={classes.h1}>Let's have a chat</h1>
        <form>
          <div>
            <input
              className={classes.input}
              type="text"
              name="name"
              placeholder="Name"
            ></input>
            <input
              className={classes.input}
              type="url"
              name="websiteURL"
              placeholder="Website URL"
            ></input>
          </div>
          <div>
            <input
              className={classes.input}
              type="email"
              name="url"
              placeholder="Email"
            ></input>
            <input
              className={classes.input}
              type="text"
              name="text"
              placeholder="Phone"
            ></input>
          </div>
          <div>
            <h1 className={classes.h1}>Pick the pieces where we can help</h1>
            <div className={classes.logoContainer}>
              <label for="BusinessStrategy">
                <input
                  type="checkbox"
                  style={{ backgroundImage: BusinessStrategyWhite }}
                >
                  {/*  */}
                </input>
                <img
                  src={BusinessStrategyWhite}
                  alt="BusinessStrategyWhite"
                  className={classes.img}
                />
                {/* Business Strategy */}
              </label>

              <label for="UIUXDesign">
                {/* UI/UX Design */}
                <input type="checkbox">{/*  */}</input>
                <img
                  src={UIUXDesignWhite}
                  alt="UIUXDesignWhite"
                  className={classes.img}
                />
              </label>

              <label for="MarketingNBranding">
                <input type="checkbox">{/*  */}</input>
                {/* Marketing & Branding */}
                <img
                  src={MarketingNBrandingWhite}
                  alt="MarketingNBrandingWhite"
                  className={classes.img}
                />
              </label>

              <label for="MobileApps">
                <input type="checkbox">{/*  */}</input>
                <img
                  className={classes.img}
                  src={MobileAppsWhite}
                  alt="MobileAppsWhite"
                />
              </label>

              <label for="HardwareEngineering">
                <input type="checkbox">{/*  */}</input>
                <img
                  src={HardwareEngineeringWhite}
                  alt="HardwareEngineeringWhite"
                  className={classes.img}
                />
                {/* Hardware Engineering */}
              </label>

              <label for="WebSoftwareDev">
                <input type="checkbox">{/*  */}</input>
                <img
                  src={WebSoftwareDevWhite}
                  alt="WebSoftwareDevWhite"
                  className={classes.img}
                />
                {/* Web/Software Development */}
              </label>
            </div>
          </div>
          <div>
            <textarea
              className={classes.textarea}
              placeholder="Anything else you want to your note to us?"
            ></textarea>
          </div>
          <br />
          <button className={classes.button}>Send a Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
