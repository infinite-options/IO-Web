import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  contaier: {
    margin: "auto",
    width: "50%",
    padding: "50px",
  },
  h1: {
    color: "White",
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
const ScheduleAMeeting = () => {
  const classes = useStyles();
  return (
    <section style={{ backgroundColor: "#F6A833" }}>
      <div className={classes.contaier}>
        <h1 className={classes.h1}>
          Let's chat about design and development solutions for your business
        </h1>
        <Link to="appointment">
          <button className={classes.button}>Schedule a meeting</button>
        </Link>
      </div>
    </section>
  );
};

export default ScheduleAMeeting;
