import logo from "../image/logo.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  h1: {
    fontSize: "400%",
    color: "#52330D",
  },
  contaier: {
    margin: "auto",
    width: "80%",
    padding: "50px",
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

const WhatWeDo = () => {
  const classes = useStyles();
  return (
    <section id="whatWeDo">
      <div className={classes.contaier}>
        <h1 className={classes.h1}>We fill the gaps around your skill set</h1>
        <div></div>
        <img src={logo} className="" alt="image" />
        <h1 className={classes.h1}>
          to help you succeed on your <br />
          entrepreneurial journey
        </h1>
        <button className={classes.button}>See how we can help</button>
      </div>
    </section>
  );
};
export default WhatWeDo;
