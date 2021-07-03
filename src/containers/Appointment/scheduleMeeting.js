import React, { useEffect, useState } from "react";
import logo from "../../assets/images/IOLogos/IOlogo.png";
import "./calendar.css";
import axios from "axios"; //npm install axios
import Calendar from "react-calendar"; // npm install react-calendar
import { makeStyles } from "@material-ui/core/styles";
import SimpleForm from "./simpleForm";
import SimpleForm2 from "./simpleForm2";
import SimpleFormText from "./simpleFormText";
import scrollToTop from "./ScrollToTop.js";
import moment from "moment";
const useStyles = makeStyles((theme) => ({
  h1: {
    fontSize: "150%",
    padding: "20px 0",
    color: "#52330D",
    fontFamily: "AvenirHeavy",
  },
  selectTime: {
    fontSize: "42px",
    color: "#52330D",
    fontFamily: "AvenirHeavy",
  },
  container: {
    margin: "auto",
    width: "980px",
  },
  button: {
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
    "&:hover": {
      background: "#52330D",
      fontColor: "#F6A833",
    },
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
  calendarTimeTable: {
    width: "90%",
    margin: "0 auto",
    border: "2px solid #F6A833 ",
  },
  calendarBox: {
    width: "40%",
    padding: "20px",
    backgroundColor: "#F6A833",
  },
  timeslotBox: {
    width: "60%",
    padding: "20px",
  },
  center: {
    margin: "0 auto",
  },
  timeslotButton: {
    backgroundColor: "#F6A833",
    border: "none",
    color: "white",
    padding: " 20px 80px 20px 80px ",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "20px",
    borderRadius: "50px",
    margin: "5px",
    "&:focus": {
      background: "#52330D",
      fontColor: "#F6A833",
    },
  },

  duritionInput: {
    backgroundColor: "#FAD399",
    width: "50%",
    height: "75px",
    border: "none",
    padding: "20px",
    boxSizing: "border-box",
    borderRadius: "50px",
    fontColor: "#52330D",
    fontSize: "25px",
    display: "inline-block",
    margin: "5px",
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "#52330D",
    },
    outline: "none",
  },

  timeslotButtonBox: {
    width: "100%",
    height: "500px",
    margin: "0 auto",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "10px",
      // border: "1px solid black",
      borderRadius: "20px",
      padding: "1px 0",
      backgroundColor: "white",
    },
    "&::-webkit-scrollbar-thumb": {
      border: "1px solid #000",
      borderRadius: "20px",
      padding: "1px 0",
      backgroundColor: "#52330D",
    },
  },
}));

const Appointment = () => {
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState("");
  // for hide and show
  const [timeSelected, setTimeSelected] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (newname) => {
    setName(newname);
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

  const handleMessageChange = (newMessage) => {
    setMessage(newMessage);
  };

  const handleCompanyChange = (newCompany) => {
    setCompany(newCompany);
  };

  const dateChange = (date) => {
    setDate(date);
    dateStringChange(date);
    setTimeSelected(true);
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

  const dateFormat2 = (date) => {
    return (
      doubleDigitMonth(date) +
      "-" +
      doubleDigitDay(date) +
      "-" +
      date.getFullYear()
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

  const dateFormat4 = (date) => {
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

  function formatTime(date, time) {
    if (time == null) {
      return "?";
    } else {
      var newDate = new Date(date + " " + time);
      var hours = newDate.getHours();
      var minutes = newDate.getMinutes();
      var ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime = hours + ":" + minutes + " " + ampm;
      return strTime;
    }
  }

  const dateStringChange = (date) => {
    setDateString(dateFormat1(date));
    setApiDateString(dateFormat3(date));
    setDateString1(dateFormat4(date));
    setDateHasBeenChanged(true);
  };

  useEffect(() => {
    if (dateHasBeenChanged) {
      axios
        .get(
          "https://3o9ul2w8a1.execute-api.us-west-1.amazonaws.com/dev/api/v2/availableAppointments/" +
            apiDateString
        )
        .then((res) => {
          console.log(res);
          console.log(res.data.result);
          setTimeSlots(res.data.result);
          console.log("Timeslots Array " + timeSlots);
        });
    }
    setDateHasBeenChanged(false);
  });

  function renderAvailableApptsVertical() {
    return timeSlots.map((element) => (
      <div>
        <button
          className={classes.timeslotButton}
          onClick={() => selectApptTime(element.start_time)}
        >
          {formatTime(apiDateString, element.start_time)}
        </button>
      </div>
    ));
  }

  function selectApptTime(element) {
    setSelectedTime(element);
    setTimeSelected(true);
  }

  const classes = useStyles();

  function bookAppt() {
    console.log(name, url, email, phoneNum);

    const postURL =
      "https://3o9ul2w8a1.execute-api.us-west-1.amazonaws.com/dev/api/v2/createAppointment";
    axios
      .post(postURL, {
        name: name,
        phone: phoneNum,
        appt_date: dateFormat1(date),
        appt_time: selectedTime,
        email: email,
        company: company,
        url: url, //treatment_uid, //TREATMENT INFO #1
        message: message,
      })
      .then((res) => console.log(res));
    setSubmitted(true);
    //We oughta figure out how to get those pieces of treatment info into our post call
  }

  return (
    <section id="appointment">
      <scrollToTop />
      <div className={classes.container}>
        <img
          src={logo}
          alt="logo"
          style={{ width: "25%", marginBottom: "50px" }}
        />
        <table className={classes.calendarTimeTable}>
          <tr>
            <th className={classes.calendarBox}>
              <h1
                style={{
                  textAlign: "left",
                  color: "white",
                  fontFamily: "AvenirHeavy",
                }}
              >
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
              <p
                style={{
                  textAlign: "left",
                  color: "#4E70FF",
                  fontFamily: "AvenirHeavy",
                }}
              >
                UTC - 07:00 Pacific Time
              </p>
              <div className={classes.timeslotButtonBox}>
                {renderAvailableApptsVertical()}
              </div>
            </th>
          </tr>
        </table>
      </div>

      <div className={classes.container}>
        <h1 className={classes.selectTime}>Confirm Meeting</h1>
        <h1
          style={{ fontSize: "64px", fontFamily: "AvenirHeavy" }}
          hidden={timeSelected ? "hidden" : ""}
        >
          Please pick a day and time to meet
        </h1>
        <h1 className={classes.date} hidden={!timeSelected ? "hidden" : ""}>
          <span style={{ color: "#F6A833" }}>{dateString1}</span> at{" "}
          <span style={{ color: "#F6A833" }}>
            {formatTime(apiDateString, selectedTime)}
          </span>
        </h1>
        <div hidden={submitted ? "hidden" : ""}>
          <div>
            <SimpleForm2 field="Full Name*" onHandleChange={handleNameChange} />
          </div>
          <div>
            <SimpleForm
              field="Email Address*"
              onHandleChange={handleEmailChange}
            />
            <SimpleForm
              field="Phone Number"
              onHandleChange={handlePhoneNumChange}
            />
          </div>
          <div>
            <SimpleForm
              field="Company Name"
              onHandleChange={handleCompanyChange}
            />
            <SimpleForm field="Website URL" onHandleChange={handleUrlChange} />
          </div>
          <div>
            <SimpleFormText
              field="Message"
              onHandleChange={handleMessageChange}
            />
          </div>
          <div hidden={timeSelected ? "hidden" : ""}>
            <button className={classes.buttonDisable}>Confirm</button>
          </div>
          <div hidden={!timeSelected ? "hidden" : ""}>
            <button className={classes.button} onClick={bookAppt}>
              Confirm
            </button>
          </div>
        </div>
        <div hidden={!submitted ? "hidden" : ""}>
          <h1 className={classes.h1}>
            Thank you for your message. <br />
            Your meeting has been confirmed with us for {dateString1} at{" "}
            {formatTime(apiDateString, selectedTime)}
            . <br />
            Please check your email for the meeting link.
          </h1>
        </div>
      </div>
      <br />
    </section>
  );
};

export default Appointment;
