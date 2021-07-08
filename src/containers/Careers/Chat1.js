import React, { useEffect, useState } from "react";
import axios from "axios"; //npm install axios
import { makeStyles } from "@material-ui/core/styles";
import SimpleForm from "./simpleForm";
import SimpleFormText from "./simpleFormText";

const useStyles = makeStyles((theme) => ({
  h1: {
    fontSize: "150%",
    padding: "5px 0",
    color: "White",
    fontFamily: "AvenirHeavy",
    textAlign: "left",
  },
  selectTime: {
    fontSize: "42px",
    color: "#52330D",
    fontFamily: "AvenirHeavy",
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
    padding: "15px 100px",
    textAlign: "center",
    textDecoration: "none",
    display: "block",
    fontSize: "20px",
    borderRadius: "50px",
    margin: "0 auto",
  },
  buttonDisable: {
    backgroundColor: "#F6A833",
    border: "none",
    color: "white",
    padding: "15px 100px",
    textAlign: "center",
    textDecoration: "none",
    display: "block",
    fontSize: "20px",
    borderRadius: "50px",
    margin: "0 auto",
    opacity: "50%",
  },
  inputRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  date: {
    fontSize: "64px",
    fontFamily: "AvenirHeavy",
  },
  center: {
    margin: "0 auto",
  },
}));

const Appointment = () => {
  //For Axios.Get
  const [date, setDate] = useState(new Date());
  const [dateString, setDateString] = useState(null);
  const [dateHasBeenChanged, setDateHasBeenChanged] = useState(false);
  const [apiDateString, setApiDateString] = useState(null);

  //For Axios.Post
  const [fName, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [notes, setNotes] = useState("");
  const [url, setUrl] = useState("");
  // for hide and show
  const [submitted, setSubmitted] = useState(false);

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

  const dateChange = (date) => {
    setDate(date);
    dateStringChange(date);
  };

  const doubleDigitMonth = (date) => {
    let str = "00" + (date.getMonth() + 1);
    return str.substring(str.length - 2);
  };

  const doubleDigitDay = (date) => {
    let str = "00" + date.getDate();
    return str.substring(str.length - 2);
  };

  const dateFormat1 = (date) => {
    return (
      date.getFullYear() +
      "-" +
      doubleDigitMonth(date) +
      "-" +
      doubleDigitDay(date)
    );
  };

  // This one is for doing the sendToDatabase Post Call
  const dateFormat3 = (date) => {
    return (
      date.getFullYear() +
      "-" +
      doubleDigitMonth(date) +
      "-" +
      doubleDigitDay(date)
    );
  };

  const dateStringChange = (date) => {
    setDateString(dateFormat1(date));
    setApiDateString(dateFormat3(date));
    setDateHasBeenChanged(true);
  };

  const classes = useStyles();

  function bookAppt() {
    console.log(fName, url, email, phoneNum);

    const postURL =
      " https://3o9ul2w8a1.execute-api.us-west-1.amazonaws.com/dev/api/v2/addContact";
    axios
      .post(postURL, {
        name: fName,
        url: url,
        email: email,
        subject: phoneNum,
        message: notes,
      })
      .then((res) => console.log(res));
    setSubmitted(true);
  }

  return (
    <section id="appointment" style={{ backgroundColor: "#F6A833" }}>
      <div className={classes.contaier}>
        <div hidden={submitted ? "hidden" : ""}>
          <h1 className={classes.h1}>Let's have a chat!</h1>
          <div>
            <SimpleForm
              field="Your Name"
              onHandleChange={handleFirstNameChange}
            />
            <SimpleForm field="Website URL" onHandleChange={handleUrlChange} />
          </div>
          <div>
            <SimpleForm field="Email" onHandleChange={handleEmailChange} />
            <SimpleForm field="Phone" onHandleChange={handlePhoneNumChange} />
          </div>
          <h1 className={classes.h1}>What are you good at?</h1>
          <div>
            <SimpleFormText
              field=" Tell us what you are good at and what you are passinate about.
              Anything lese you want to add?
              You can als or email us your resume and / or portfolio at info @infiniteoptions.com"
              onHandleChange={handleNotesChange}
            />
          </div>
          <div>
            <button className={classes.button} onClick={bookAppt}>
              Confirm
            </button>
          </div>
        </div>
        <div hidden={!submitted ? "hidden" : ""}>
          <h1 className={classes.h1}>
            Thank you for your message. <br />
            We will get back to you on the given email address shortly!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
