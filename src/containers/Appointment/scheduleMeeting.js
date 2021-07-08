import React, { useEffect, useState } from "react";
import logo from "../../assets/images/IOLogos/IOlogo.png";
import "./calendar.css";
import axios from "axios"; //npm install axios
import Calendar from "react-calendar"; // npm install react-calendar
import { makeStyles } from "@material-ui/core/styles";
import SimpleForm from "./simpleForm";
import SimpleFormText from "./simpleFormText";
import ScrollToTop from "./ScrollToTop.js";
import SimpleFormName from "./simpleFormName";


const useStyles = makeStyles((theme) => ({
  h1: {
    // fontSize: "150%",
    // padding: "20px 0",
    color: "#52330D",
    fontFamily: "AvenirHeavy",
    textAlign: "left",
    font: "normal normal 900 36px/49px Avenir",
    paddingLeft:"20px",
    // marginRight:"200px",
    // float:"left",
    
  },
  calanderHeader:{
    textAlign: "center",
    font: "normal normal 60px/82px AvenirMedium",
    // fontSize:"60px/82px",
    // font: "normal normal medium 54px/74px Avenir",
    color: "#52330D",
    padding: "20px 0",
  },
  leftTitle:{
    marginTop:"-80px",
  },
  selectTime: {
    paddingTop:"118px",
    fontSize: "42px",
    color: "#52330D",
    fontFamily: "AvenirHeavy",
  },
  container: {
    margin: "auto",
    width: "100%",
    
    // padding: "50px",
  },
  button: {
    // buttons for times
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
    // comfirm button
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
    // date and time under comfirm meeting
    fontSize: "64px",
    fontFamily: "AvenirHeavy",
  },
  calendarTimeTable: {
    width: "100%",
    marginTop: "-40px",
    // the margin used here is to 
    // margin: "0 auto",
    border: "2px solid #F6A833 ",
    
    

  },
  calendarBox: {
    width: "50%", // this makes the calander and timeslot take up half the box each
    // padding: "50px",
    // padding: "10px",
    backgroundColor: "#F6A833",
    height:"350px",
  },
  timeslotBox: {
    width: "50%",
    height:"350px",
    // padding: "20px",
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
    height: "400px",
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
  const treatment_uid = "330-000006"; // props.treatmentID;
  const duriation = "0:29:59";
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
  const [CompanyName, setCompanyName] = useState("");
  const [notes, setNotes] = useState("");
  const [url, setUrl] = useState("");
  // for hide and show
  const [timeSelected, setTimeSelected] = useState(false);
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

  const handleCompanyNameChange = (newCompanyName) => {
    setCompanyName(newCompanyName);
  };

  const handleNotesChange = (newNotes) => {
    setNotes(newNotes);
  };

  const dateChange = (date) => {
    setDate(date);
    dateStringChange(date);
    setSubmitted(false);
    // fName("");
    // setFName(fName);
    // setFName("");
    // setTimeSelected(true);
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
          "https://3o9ul2w8a1.execute-api.us-west-1.amazonaws.com/dev/api/v2/availableAppointments" +
          "/" +
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
          {element.start_time}
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
    console.log(fName, url, email, phoneNum);

    const postURL =
      " https://3o9ul2w8a1.execute-api.us-west-1.amazonaws.com/dev/api/v2/createAppointment";
    

    axios
      .post(postURL, {
        name: fName,
        // last_name: "", //lName,
        email: email,
        phone: phoneNum,
        // appt_treatment_uid: url, //treatment_uid, //TREATMENT INFO #1
        company: CompanyName,
        message: notes,
        url: url,
        appt_date: dateFormat1(date),
        appt_time: selectedTime,
        // purchase_price: "$100", //TREATMENT INFO #2
        // purchase_date: dateFormat1(purchaseDate),
      })
      .then((res) => console.log(res));


    setSubmitted(true);
    // window.location.reload()
    
    //We oughta figure out how to get those pieces of treatment info into our post call
  }

  return (
    <section id="appointment">
      <ScrollToTop />
      {/* <scrollToTop /> */}
      <div className={classes.container}>
        {/* <img
          src={logo}
          alt="logo"
          style={{ width: "25%", marginBottom: "50px" }}
        /> */}
        <p className={classes.calanderHeader}> Schedule a 30 min meeting</p>
        <table className={classes.calendarTimeTable}>
          <tr>
            <th className={classes.calendarBox}>
              <h1 className={classes.h1}
                style={{
                  // marginTop:"-20px",
                  // textAlign: "left",
                  color: "white",
                  // font: "normal normal medium 60px/82px Avenir",

                }}
              >
                Pick a date
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
              <div className={classes.leftTitle}>
              <h1 className={classes.h1} >
                Pick a time
                <span
                style={{
                  // textAlign: "left",
                  paddingLeft:"120px",
                  color: "#4E70FF",
                  // fontFamily: "AvenirHeavy",
                  font:"normal normal 900 14px/19px Avenir",
                  marginTop:"-20px",
                  // width:"130px",
                  // float:"right",
                }}
              >
                {/* UTC - 07:00 Pacific Time */}
                All times are in PST
              </span>
              </h1>
              </div>
              {/* <div className={classes.inputRow}>
                <label className={classes.h1}>Meeting Duriation</label>
                <input
                  className={classes.duritionInput}
                  placeholder="30 mins"
                ></input>
              </div> */}
              
              {/* <p
                style={{
                  // textAlign: "left",
                  color: "#4E70FF",
                  fontFamily: "AvenirHeavy",
                  width:"20px",
                }}
              >
                
                All times are in PST
              </p> */}
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
          <span style={{ color: "#F6A833" }}>{selectedTime}</span>
        </h1>
        <div hidden={submitted ? "hidden" : ""}>
          <div>
            <SimpleFormName
              field="Full Name*"
              onHandleChange={handleFirstNameChange}
            />
            {/* <SimpleForm field="Website URL" onHandleChange={handleUrlChange} /> */}
          </div>
          <div>
            <SimpleForm
              field="Phone Number"
              onHandleChange={handlePhoneNumChange}
            />
            <SimpleForm
              field="Email Address*"
              onHandleChange={handleEmailChange}
            />
          </div>
          <div>
            <SimpleForm
              field="Company Name"
              onHandleChange={handleCompanyNameChange}
            />
            <SimpleForm field="Website URL" onHandleChange={handleUrlChange} />
          </div>
          <div>
            <SimpleFormText
              field="Message"
              onHandleChange={handleNotesChange}
              style={{width:"150%"}}
            />
          </div>
          <div hidden={timeSelected ? "hidden" : ""}>
            <button className={classes.buttonDisable}>Confirm</button>
          </div>
          <div hidden={!timeSelected ? "hidden" : ""}>
            <button className={classes.button} onClick={() => bookAppt()}>
              Confirm
            </button>
          </div>
        </div>
        <div hidden={!submitted ? "hidden" : ""}>
          <h1 className={classes.h1}>
            Thank you for your message. <br />
            Your meeting has been confirmed with us for {dateString1} at{" "}
            {selectedTime}
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
