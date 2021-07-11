import React, { useEffect, useState } from "react";
import axios from "axios"; //npm install axios
import { makeStyles } from "@material-ui/core/styles";
import SimpleForm from "./simpleForm";
import SimpleFormText from "./simpleFormText";

import { Button, Form, FormGroup, Input } from "reactstrap";
import "./Chat1.css";

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
    // margin: "auto",
    // width: "80%",
    // padding: "50px",
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
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [notes, setNotes] = useState("");
  const [url, setUrl] = useState("");
  // for hide and show
  const [submitted, setSubmitted] = useState(false);

  const handleFirstNameChange = (newFName) => {
    setFName(newFName);
  };

  const handleLastNameChange = (newLName) => {
    setLName(newLName);
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
  const postURL =
      " https://3o9ul2w8a1.execute-api.us-west-1.amazonaws.com/dev/api/v2/addContact";
  const [data, setData] = useState({
      // not sure what variables the data wants... change it to the correct variable names once you find out
      name:'',
      lastname:'',
      email:'',
      phone:'',
      message:'',
    });
    function submit(e){
      e.preventDefault();
      axios.post(postURL, {
        name: data.name,
        lastname: data.lastname,
        phone: data.phone,
        email: data.email,
        message: data.message,
      })
        .catch((error) => {
          console.log(error.message);
        })
        .then((response) => {
          console.log(response);
        });
        setSubmitted(true);
          data.name='';
          data.lastname='';
          data.phone='';
          data.email='';
          data.message='';
    }
    function handle(e) {
      const newData = { ...data };
      newData[e.target.id] = e.target.value;
      console.log(newData)
      setData(newData);
    }
  // function bookAppt() {
  //   console.log(fName, url, email, phoneNum);

  //   const postURL =
  //     " https://3o9ul2w8a1.execute-api.us-west-1.amazonaws.com/dev/api/v2/addContact";
    
  //   axios
  //     .post(postURL, {
  //       name: fName,
  //       url: url,
  //       email: email,
  //       subject: phoneNum,
  //       message: notes,
  //     })
  //     .then((res) => console.log(res));
  //   setSubmitted(true);
  // }

  return (
    <section id="appointment" style={{ backgroundColor: "#F6A833" }}>
      <div className="contaier">
        <div hidden={submitted ? "hidden" : ""}>
          <h1 className="h1">Let's have a chat!</h1>
          {/* <div>
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
          <h1 className="h1">What are you good at?</h1>
          <div>
            <SimpleFormText
              field=" Tell us what you are good at and what you are passinate about.
              Anything else you want to add?
              You can also email us your resume and/or portfolio at info @infiniteoptions.com"
              onHandleChange={handleNotesChange}
            />
          </div>
          <div>
            <button className="button" onClick={bookAppt}>
              Confirm
            </button>
          </div> */}
          <div>
            <Form onSubmit={(e) => submit(e)}>
              <FormGroup>
                <FormGroup>
                <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="First Name*"
                    onChange={(e) => handle(e)}
                    value={data.name}
                    style={{
                      padding: "20px",
                      boxSizing: "border-box",
                      borderRadius: "20px",
                      fontColor: "#52330D",
                      fontSize: "20px",
                      margin: "5px 5px",
                      //borderColor: "#52330D",
                      //borderWidth: "2px",
                      border: "2px solid #52330D",
                      width: "40%",
                      fontFamily: "AvenirHeavy",
                      outline: "none",
                    }}
                  />
                  <Input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name*"
                    onChange={(e) => handle(e)}
                    value={data.company}
                    style={{
                      padding: "20px",
                      boxSizing: "border-box",
                      borderRadius: "20px",
                      fontColor: "#52330D",
                      fontSize: "20px",
                      margin: "5px 5px",
                      //borderColor: "#52330D",
                      //borderWidth: "2px",
                      border: "2px solid #52330D",
                      width: "40%",
                      fontFamily: "AvenirHeavy",
                      outline: "none",
                    }}
                  />
               
                  
                </FormGroup>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address*"
                    onChange={(e) => handle(e)}
                    value={data.company}
                    style={{
                      padding: "20px",
                      boxSizing: "border-box",
                      borderRadius: "20px",
                      fontColor: "#52330D",
                      fontSize: "20px",
                      margin: "5px 5px",
                      //borderColor: "#52330D",
                      //borderWidth: "2px",
                      border: "2px solid #52330D",
                      width: "40%",
                      fontFamily: "AvenirHeavy",
                      outline: "none",
                    }}
                  />
                
                  <Input
                    type="phone"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    onChange={(e) => handle(e)}
                    value={data.url}
                    style={{
                      padding: "20px",
                      boxSizing: "border-box",
                      borderRadius: "20px",
                      fontColor: "#52330D",
                      fontSize: "20px",
                      margin: "5px 5px",
                      //borderColor: "#52330D",
                      //borderWidth: "2px",
                      border: "2px solid #52330D",
                      width: "40%",
                      fontFamily: "AvenirHeavy",
                      outline: "none",
                    }}
                  />
                </FormGroup>
                
                <FormGroup>
                  <Input
                    type="textarea"
                    name="text"
                    id="message"
                    placeholder="Tell us what you’re good at and what you’re passionate about.&#10;Anything else you want to add?&#10;You can also email us your resume and/or portfolio at info@infiniteoptions.com"
                    onChange={(e) => handle(e)}
                    value={data.message}
                    style={{
                      padding: "20px",
                      boxSizing: "border-box",
                      borderRadius: "20px",
                      fontColor: "#52330D",
                      fontSize: "20px",
                      margin: "5px 5px",
                      //borderColor: "#52330D",
                      //borderWidth: "2px",
                      border: "2px solid #52330D",
                      // width: "80.5%",
                      width:"81%",
                      height: "150px",
                      fontFamily: "AvenirHeavy",
                      outline: "none",
                    }}
                  />
                </FormGroup>
              </FormGroup>
              <div>
            <button className="button">
              Confirm
            </button>
          </div>
            </Form>
          </div>
        </div>
        <div hidden={!submitted ? "hidden" : ""}>
          <h1 className="h1">
            Thank you for your message. <br />
            We will get back to you on the given email address shortly!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
