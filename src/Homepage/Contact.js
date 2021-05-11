import logo from "../image/logo.png";
import { makeStyles } from "@material-ui/core/styles";

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
    width: "40%",
    border: "none",
    color: "white",
    padding: "20px",
    boxSizing: "border-box",
    borderRadius: "20px",
    resize: "none",
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
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <section id="contact" style={{ backgroundColor: "#F6A833" }}>
      <div className={classes.contaier}>
        <h1 className={classes.h1}>Let's have a chat</h1>
        <form>
          <div style={{ padding: 10 }}>
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
            <input type="checkbox" id="" />
            <label for="">Business Strategy</label>
            <input type="checkbox" />
            <label for="">UI/UX Design</label>
            <input type="checkbox" />
            <label for="">Marketing & Branding</label>
            <input type="checkbox" />
            <label for="">Mobile Apps</label>
            <input type="checkbox" />
            <label for="">Web/Software Development</label>
          </div>
          <div>
            <textarea
              className={classes.textarea}
              placeholder="Anything else you want to your note to us?"
            ></textarea>
          </div>
          <button className={classes.button}>Send a Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
