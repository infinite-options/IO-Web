import { Button, Box} from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import '../Teams/Teams.css'
import ScrollToTop from "../Contact/ScrollToTop";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function Teams(){

    const [firstName, setFristName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [teamsButton,  setTeamsButton] = useState(false)

    const myRef_teams = useRef(null)

    useEffect(()=>{
      myRef_teams.current.scrollIntoView({ behavior: 'smooth', block: 'start' })    
  },[teamsButton])

    function onHandleSubmit(){
        axios.post('https://3o9ul2w8a1.execute-api.us-west-1.amazonaws.com/dev/api/v2/addContact', {
            email: email,
            subject: message,
            first_name: firstName,
            last_name: lastName,
            phone: phone,
        })

        axios.post('https://3o9ul2w8a1.execute-api.us-west-1.amazonaws.com/dev/api/v2/sendEmail', { email: email })
        .then((res) => {
          console.log("response email", res)
          handleClickOpen()
        })


    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    useEffect(()=>{
      window.scrollTo(0, 0); 
  },[])
  
    return(
        <Box style={{ width: '100%',backgroundPosition:'center' ,backgroundImage: `url(${"./Navigation/Backdropv2.png"})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%, 100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ScrollToTop/>
             <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'2rem'}}>
                <div>
                <div  className="BoxContainer_6_Teams" style={{marginTop:'-1rem'}} >
                <div  className="BoxContainer_6_Text_Header_Teams" >
                    Teams
                </div>
                <div className="BoxContainer_6_Text_Body_Teams" >
                    <div>
                        <p>Front-End Development</p>
                        <p>Back-End Development</p>
                        <p>Mobile App Development</p>
                    </div>
                    <div className="BoxContainer_6_Text_Body_Margin_Teams">
                        <p>UI / UX Design</p>
                        <p>Marketing</p>
                        <p>Human Resources</p>
                    </div>
                   
                </div>
                <div  style={{display:'flex', justifyContent:'center'}}>
                    {/* <button className="BoxContainer_6_Text_Button" onClick={()=> history.push("/teams")}> */}
                    <button className="BoxContainer_6_Text_Button" onClick={()=> setTeamsButton(!teamsButton)}> 
                    Join the team
                    </button>
                </div>
               </div>
                </div>
                <div className="Container_Teams_Header" >
                We work with people who would benefit from real world experience. 
                We offer a safe, supportive environment where you’ll get a chance to learn and hone your skills.
                </div>
                <div className="Container_Teams_Box">
                    <div style={{marginTop:'5rem',fontSize:'32px', color:'#52330D',fontFamily:'Avenir LT Std 65 Medium', fontWeight:'bold'}}>Our Process </div>
                    <div className="Container_Teams_Box_Body" >We learn by doing. The best way to get good at something is to do it - preferably in a safe, supportive environment.</div>
                    <img src={'./Teams/flow.png'} className="Container_Teams_Box_Image" style={{ padding:'5rem'}} />
                </div>
                <div ref={myRef_teams} className="Container_Teams_Header" style={{marginTop:'5rem'}}>
                It’s an iterative process. Both success and failure teach us something and are key to Project Based learning.
                </div>
           
            </div>
            <div  style={{backgroundColor:'#F6A833', width:'100%', height:'auto',paddingBottom:'2rem', display:'flex', flexDirection:'column', marginTop:'5rem'}}>
                    <div className="QueryContainer_Header">
                    Lets have a chat!
                    </div>
                        <div className="QueryContainer_Body_Input" >
                            <input onChange={(e)=> setFristName(e.target.value) } placeholder='First Name*' className="QueryContainer_Body_Input_1">
                            </input>
                            <input onChange={(e)=> setLastName(e.target.value) } placeholder='Last Name*' className="QueryContainer_Body_Input_2" >
                            </input>

                        </div>
                        <div className="QueryContainer_Body_Input" >
                        <input onChange={(e)=> setEmail(e.target.value) } placeholder='Email address*'  className="QueryContainer_Body_Input_1">
                            </input >
                            <input onChange={(e)=> setPhone(e.target.value) } placeholder='phone Number' className="QueryContainer_Body_Input_2">
                            </input>

                        </div>
                    <div  style={{display:'flex',justifyContent:'flex-start', marginLeft:'30%', marginTop:'1rem',fontFamily:'Libre Baskerville', color:'white'}}>
                    What are you good at?
                    </div>
                    <div style={{display:'flex', justifyContent:'center',marginTop:'1rem'}}>

                      <textarea rows="5" cols="50" onChange={(e)=> setMessage(e.target.value) } className="QueryContainer_Body_TextArea">
                    </textarea>
                    </div>
                    <button className="QueryContainer_Body_Button" onClick={onHandleSubmit} >
                        Send a Message
                    </button>

                </div>

                <div>
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open alert dialog
        </Button> */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Message Recieved"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              We Got your Message!!! Please Check your email
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>

        </Box>
    )
}