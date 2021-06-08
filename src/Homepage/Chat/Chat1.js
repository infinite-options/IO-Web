import Row from 'react-bootstrap/Row';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import axios from "axios"; //npm install axios
import React, { useEffect, useState } from "react";

import classes from './Chat.module.css'
const Chat1=()=>{
    //For Axios.Post
 
  const [fName, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [notes, setNotes] = useState("");
  const [url, setUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);


  const handleFirstNameChange = (newFName) => {
    setFName(newFName.target.value);
  };

  const handleUrlChange = (newUrl) => {
    setUrl(newUrl.target.value);
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail.target.value);
  };

  const handlePhoneNumChange = (newPhoneNum) => {
    setPhoneNum(newPhoneNum.target.value);
  };

  const handleNotesChange = (newNotes) => {
    setNotes(newNotes.target.value);
  };


function sendMessage() {
    console.log(fName, url, email, phoneNum,notes);
    setFName("");
    setUrl("");
    setEmail("");
    setPhoneNum("");
    setNotes("");

   const postURL =
   "https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/addcontact"  
 axios
      .post(postURL, {
        first_name: fName,
        last_name: "", //lName,
        email: email, 
        phone_no: phoneNum,
        appt_treatment_uid: url, //treatment_uid, //TREATMENT INFO #1
        notes: notes,
        
      })
      .then((res) => console.log(res));
    setSubmitted(true);
 }
    return (
      <>
        <div
          style={{
            width: "100%",
            height: "900px",
            backgroundColor: "#F6A833",
            fontWeight: "bold",
            paddingTop: "20px",
          }}
        >
          <div style={{ width: "100%" }}>
            <p
              style={{
                textAlign: "left",
                marginLeft: "202px",
                fontSize: "32px",
                color: "white",
                
              }}
            >
              Lets have a chat!
            </p>
          </div>
          <Row style={{ marginTop: "35px" }}>
            <input type = "text" value={fName}
             onChange={handleFirstNameChange}
              placeholder="Your Name"



              style={{
                width: "35vw",
                height: "8vh",
                borderRadius: "25px",
                marginLeft: "10vw",
                float: "left",
                fontSize: "150%",
                color:'#52330D',
                border:'1px solid #F6A833'
              }}
            ></input>
            <input type = "url" value={url}
            onChange={handleUrlChange}
            placeholder="Website URL"

              style={{
                width: "35vw",
                height: "8vh",
                borderRadius: "25px",
                marginLeft: "10vw",
                float: "left",
                fontSize: "150%",
                color:'#52330D',
                border:'1px solid #F6A833'
              }}
            ></input>
          </Row>
          <Row >
            <input type = "email" value={email}
            onChange={handleEmailChange}
              placeholder="Email"
              style={{
                width: "35vw",
                height: "8vh",
                borderRadius: "25px",
                marginLeft: "10vw",
                marginTop: "5vh",
                float: "left",
                fontSize: "150%",
                color:'#52330D',
                border:'1px solid #F6A833'
              }}
            
            ></input> 
            <input type = "tel" value={phoneNum}
            onChange={handlePhoneNumChange}
              style={{
                width: "35vw",
                height: "8vh",
                borderRadius: "25px",
                marginLeft: "10vw",
                marginTop: "5vh",
                float: "left",
                fontSize: "150%",
                color:'#52330D',
                border:'1px solid #F6A833'
              }}
              placeholder="Phone"
            ></input>
          </Row>

          <Row>
                          
          </Row>

          <Row>
            <input type ="text" value={notes}
            onChange={handleNotesChange}
              style={{
                width: "81vw",
                height: "16vh",
                borderRadius: "25px",
                marginLeft: "10vw",
                marginRight: "10vw",
                marginTop: "5vh",
                fontSize: "150%",
                float: "middle",
                color:'black',
                border:'1px solid #F6A833'
                
              }}
              placeholder="Anything else you want to add? You can also email us your resume and / or portfolio at info@infiniteoptions.com"
            ></input>
          </Row>
          <Row>
            <button onClick={sendMessage}
              style={{
                height: "8vh",
                width: "20vw",
                borderRadius: "50px",
                backgroundColor: "#52330D",
                color: "white",
                marginTop: "5vh",
                border: "1px #52330D",
              }}
            >
              Send a Message
            </button>
          </Row> 
        </div>
      </>
    );
};

export default Chat1;