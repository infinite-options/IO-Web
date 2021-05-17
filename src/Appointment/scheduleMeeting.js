import React, { useEffect, useState } from "react";
import logo from "../image/logo.png";
import calendarStyle from "./calendar.css";

import axios from "axios"; //npm install axios
import Calendar from "react-calendar"; // npm install react-calendar
// import { Button, Row, Col } from "reactstrap";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  h1: {
    fontSize: "150%",
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
  input: {
    // backgroundColor: "White",
    width: "50%",
    // border: "none",
    // color: "white",
    padding: "20px",
    boxSizing: "border-box",
    borderRadius: "20px",
    // resize: "none",
    fontColor: "#52330D",
    fontSize: "20px",
    display: "inline-block",
    margin: "5px",
    // alignContent: "left",
    borderColor: "#52330D",
    borderWidth: "2px",
  },
  textarea: {
    // backgroundColor: "White",
    width: "100%",
    // border: "none",
    // color: "white",
    padding: "20px",
    height: "150px",
    boxSizing: "border-box",
    borderRadius: "20px",
    // resize: "none",
    fontColor: "#52330D",
    fontSize: "20px",
    borderColor: "#52330D",
    borderWidth: "2px",
  },
  inputRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  date: {
    color: "#F6A833",
    fontSize: "200%",
  },
  calendarTimeTable: {
    width: "90%",
    height: "auto",
    border: "1px solid #F6A833 ",
    // display: "block",
  },
  calendarBox: {
    // display: "inline-block",
    width: "40%",
    height: "auto",
    padding: "20px",
    backgroundColor: "#F6A833",
  },
  timeslotBox: {
    // display: "inline-block",
    width: "60%",
    padding: "20px",
    margin: "auto",
  },
  center: {
    margin: "auto",
  },
  timeslotButton: {
    backgroundColor: "#F6A833",
    border: "none",
    color: "white",
    padding: " 15px 100px 15px 100px ",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "20px",
    borderRadius: "50px",
    margin: "10px",
  },

  duritionInput: {
    backgroundColor: "#FAD399",
    width: "50%",
    height: "75px",
    border: "none",
    // color: "white",
    padding: "20px",
    boxSizing: "border-box",
    borderRadius: "50px",
    // resize: "none",
    fontColor: "#52330D",
    fontSize: "25px",
    display: "inline-block",
    margin: "5px",
    // alignContent: "left",
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "#52330D",
    },
  },

  timeslotButtonBox: {
    width: "50%",
    margin: "auto",
  },
}));

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const [dateString, setDateString] = useState(null);
  const [dateHasBeenChanged, setDateHasBeenChanged] = useState(true);
  const [apiDateString, setApiDateString] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  const dateChange = (date) => {
    setDate(date);
    dateStringChange(date);
  };
  const dateStringChange = (date) => {
    setDateString(dateFormat1(date));

    setApiDateString(dateFormat2(date));

    //For some reason, I am unable to use the correct date immediately after calling setApiDateString

    setDateHasBeenChanged(true); //After the date String has been changed, modify the timeSlots Array

    //The axios call used to be here

    //According to the debugger, the state is holding the correct date, but somehow we are printing the wrong date.
    //Any ideas why?

    // console.log("datestring has been modified to " + dateString);
    // console.log("apidatestring has been modified to " + apiDateString);
  };

  const dateFormat1 = (date) => {
    return (
      doubleDigitMonth(date) +
      "/" +
      doubleDigitDay(date) +
      "/" +
      date.getFullYear()
    );
  };

  const dateFormat2 = (date) => {
    return (
      doubleDigitMonth(date) +
      "-" +
      doubleDigitDay(date) +
      "-" +
      date.getFullYear()
    );
  };

  const doubleDigitMonth = (date) => {
    let str = "00" + (date.getMonth() + 1);
    return str.substring(str.length - 2);
  };

  const doubleDigitDay = (date) => {
    let str = "00" + date.getDate();
    return str.substring(str.length - 2);
  };

  function renderAvailableApptsVertical() {
    return timeSlots.map((element) => (
      <div>
        <button onClick={() => selectApptTime(element)}>{element}</button>{" "}
      </div>
    ));
  }

  function selectApptTime(element) {
    setSelectedTime(element);
  }

  const classes = useStyles();
  return (
    <section id="appointment">
      <div className={classes.contaier}>
        <img src={logo} alt="logo" />
        <table className={classes.calendarTimeTable}>
          <tr style={{ borderBottom: "none" }}>
            <th className={classes.calendarBox}>
              <h1 style={{ textAlign: "left", color: "white" }}>
                Find a time to meet with us
              </h1>
            </th>
            <th className={classes.timeslotBox}>
              <div className={classes.inputRow}>
                <label className={classes.h1}>Meeting Duriation</label>
                <input
                  className={classes.duritionInput}
                  placeholder="30 mins"
                ></input>
              </div>
            </th>
          </tr>
          <tr>
            <th className={classes.calendarBox}>
              <Calendar
                onClickDay={dateChange}
                value={date}
                backgroundColor="#F6A833"
                calendarType="US"
                className={classes.center}
              />
            </th>
            <th className={classes.timeslotBox}>
              <h1 className={classes.h1} style={{ textAlign: "left" }}>
                What time is good for you?
              </h1>
              <p style={{ textAlign: "left", color: "#4E70FF" }}>
                UTC - 07:00 Pacific Time
              </p>
              <div className={classes.timeslotButtonBox}>
                <button className={classes.timeslotButton}>12:30 PM</button>
                <button className={classes.timeslotButton}>01:00 PM</button>
                <button className={classes.timeslotButton}>01:30 PM</button>
                <button className={classes.timeslotButton}>02:00 PM</button>
                <button className={classes.timeslotButton}>02:30 PM</button>
              </div>
            </th>
          </tr>
        </table>
        <form></form>
        <div></div>
        <div>
          <h1>Confirm Meeting</h1>
          <h1 className={classes.date}>
            May 12, 2021 <span style={{ Color: "#52330D" }}>at</span> 1:30 pm
          </h1>
          <form>
            <div className={classes.inputRow}>
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
            <div className={classes.inputRow}>
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
              <textarea
                className={classes.textarea}
                placeholder="Anything else you want to your note to us?"
              ></textarea>
            </div>
            <br />
            <button className={classes.button}>Confirm</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
