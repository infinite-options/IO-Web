import React, { useEffect, useState } from "react";
import logo from "../image/logo.png";
import "./calendar.css";
import axios from "axios"; //npm install axios
import Calendar from "react-calendar"; // npm install react-calendar
import { makeStyles } from "@material-ui/core/styles";
import SimpleForm from "./simpleForm";

const useStyles = makeStyles((theme) => ({
  h1: {
    fontSize: "150%",
    padding: "20px 0",
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
    width: "50%",
    padding: "20px",
    boxSizing: "border-box",
    borderRadius: "20px",
    // resize: "none",
    fontColor: "#52330D",
    fontSize: "20px",
    // fontFamily: "AvenirHeavy",
    // fontWight: "700",
    display: "inline-block",
    margin: "5px",
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
    margin: "0 auto",
    // height: "auto",
    border: "2px solid #F6A833 ",
    // display: "block",
  },
  calendarBox: {
    // display: "inline-block",
    width: "40%",
    // height: "auto",
    padding: "50px",
    backgroundColor: "#F6A833",
  },
  timeslotBox: {
    width: "60%",
    padding: "20px",
    // margin: "0 auto",
  },
  center: {
    margin: "0 auto",
  },
  timeslotButton: {
    backgroundColor: "#F6A833",
    border: "none",
    color: "white",
    padding: " 20px 100px 20px 100px ",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "20px",
    borderRadius: "50px",
    margin: "5px",
    "&:hover": {
      background: "#52330D",
      fontColor: "#F6A833",
    },
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
    width: "100%",
    height: "500px",
    margin: "0 auto",
    overflowY: "scroll",
    "&::-webkit-scrollbar-track": {
      border: "1px solid #000",
      padding: "2px 0",
      backgroundColor: "#404040",
    },
  },
}));

const Appointment = () => {
  const treatment_uid = "330-000006"; // props.treatmentID;

  //For Axios.Get
  const [date, setDate] = useState(new Date());
  const [dateString, setDateString] = useState(null);
  const [dateString1, setDateString1] = useState(null);
  const [dateHasBeenChanged, setDateHasBeenChanged] = useState(false);

  const [apiDateString, setApiDateString] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);

  //For Axios.Post
  const [purchaseDate, setPurchaseDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
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

  const dateFormat3 = (date) => {
    var months = {
      "01": "Jan",
      "02": "Feb",
      "03": "Mar",
      "04": "Apr",
      "05": "May",
      "06": "Jun",
      "07": "Jul",
      "08": "Aug",
      "09": "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec",
      "": "",
    };
    return (
      months[doubleDigitMonth(date)] +
      " " +
      doubleDigitDay(date) +
      ", " +
      date.getFullYear() +
      " "
    );
  };

  const dateStringChange = (date) => {
    setDateString(dateFormat1(date));
    setApiDateString(dateFormat2(date));
    setDateString1(dateFormat3(date));
    setDateHasBeenChanged(true);
  };

  useEffect(() => {
    if (dateHasBeenChanged) {
      axios
        .get(
          "https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/calendar/" +
            treatment_uid +
            "/" +
            apiDateString
        )
        .then((res) => {
          console.log(res.data.result.available_timeslots);
          console.log("get time slots");
          setTimeSlots(res.data.result.available_timeslots);
        });
    }

    setDateHasBeenChanged(false);
  });

  function renderAvailableAppts() {
    return timeSlots.map((element) => (
      <button
        className={classes.timeslotButton}
        onClick={() => selectApptTime(element)}
      >
        {element}
      </button>
    ));
  }
  function renderAvailableApptsVertical() {
    return timeSlots.map((element) => (
      <div>
        <button
          className={classes.timeslotButton}
          onClick={() => selectApptTime(element)}
        >
          {element}
        </button>{" "}
      </div>
    ));
  }

  function selectApptTime(element) {
    setSelectedTime(element);
  }

  const classes = useStyles();

  function bookAppt() {
    console.log(fName, url, email, phoneNum);

    const postURL =
      "https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/createAppointment";
    axios
      .post(postURL, {
        first_name: fName,
        last_name: "", //lName,
        email: email,
        phone_no: phoneNum,
        appt_treatment_uid: url, //treatment_uid, //TREATMENT INFO #1
        notes: notes,
        appt_date: dateFormat1(date),
        appt_time: selectedTime,
        purchase_price: "$100", //TREATMENT INFO #2
        purchase_date: dateFormat1(purchaseDate),
      })
      .then((res) => console.log(res));
    //We oughta figure out how to get those pieces of treatment info into our post call
    return (
      <div>
        <h1 className={classes.h1}>
          Thank you for your message. <br />
          Your meeting has been confirmed with us for {dateString1} at{" "}
          {selectedTime}
          . <br />
          Please check your email for the meeting link.
        </h1>
      </div>
    );
  }

  return (
    <section id="appointment">
      <div className={classes.contaier}>
        <img src={logo} alt="logo" />
        <table className={classes.calendarTimeTable}>
          <tr>
            <th className={classes.calendarBox}>
              <h1 style={{ textAlign: "left", color: "white" }}>
                Find a time to meet with us
              </h1>
              <Calendar
                onClickDay={dateChange}
                value={date}
                backgroundColor="#F6A833"
                calendarType="US"
                className={classes.center}
              />
            </th>
            <th className={classes.timeslotBox}>
              <div className={classes.inputRow}>
                <label className={classes.h1}>Meeting Duriation</label>
                <input
                  className={classes.duritionInput}
                  placeholder="30 mins"
                ></input>
              </div>
              <h1 className={classes.h1} style={{ textAlign: "left" }}>
                What time is good for you?
              </h1>
              <p style={{ textAlign: "left", color: "#4E70FF" }}>
                UTC - 07:00 Pacific Time
              </p>
              <div className={classes.timeslotButtonBox}>
                {renderAvailableApptsVertical()}
              </div>
            </th>
          </tr>
        </table>
      </div>

      <div>
        <h1>Confirm Meeting</h1>
        <h1 className={classes.date}>
          {dateString1}
          <span style={{ Color: "#52330D" }}>at</span> {selectedTime}
        </h1>
        <div>
          <SimpleForm field="Name" onHandleChange={handleFirstNameChange} />
          <SimpleForm field="Website URL" onHandleChange={handleUrlChange} />
        </div>
        <div>
          <SimpleForm field="Email" onHandleChange={handleEmailChange} />
          <SimpleForm
            field="Phone Number"
            onHandleChange={handlePhoneNumChange}
          />
        </div>
        <div>
          <SimpleForm field="Notes" onHandleChange={handleNotesChange} />
        </div>
        <button className={classes.button} onClick={bookAppt}>
          Confirm
        </button>
      </div>
    </section>
  );
};

export default Appointment;
