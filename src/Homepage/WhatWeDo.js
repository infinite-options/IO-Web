import React from "react";
import { Link } from "react-router-dom";
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
    marginBottom: "100px",
    fontFamily: "AvenirHeavy",
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
        <h1 className={classes.h1}>
          We are entrepreneurs on a mission to build cool products{" "}
          <span style={{ color: "#F6A833" }}>
            & help fellow entrepreneurs on their journey
          </span>
        </h1>
        <Link to="how_we_can_help" aria-label="Let's build something together. Click to see how we can help">
          <button className={classes.button} aria-hidden="true" tabindex="-1">
            Let’s build something together
          </button>
        </Link>
      </div>
    </section>
  );
};

export default WhatWeDo;
