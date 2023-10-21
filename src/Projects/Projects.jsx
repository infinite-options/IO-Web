import { Button, Box } from "@material-ui/core";
import React from "react";
import '../Projects/Projects.css'
import Nitya from '../Assets/Projects/Nitya.png'
import SF from '../Assets/Projects/SF.png'
import ScrollToTop from "../Contact/ScrollToTop";
import { useHistory } from "react-router";


export default function Projects(){

    const history = useHistory()

    return(
        <Box  className="Container">
            <ScrollToTop/>
            <div >
                <p className="Title"> Projects</p>
            </div>

            <div className="BoxContainer_5">
                <div className="BoxContainer_5_Text">
                    <div  className="BoxContainer_5_Text_Header" >
                    What our clients say
                    </div>
                    <div  className="BoxContainer_5_Text_Body" >
                    “Choosing Infinite Options to create a wireframe for the early phase of my startup was the best decision I have made! 
                    From the introduction, to development, to completion, the IO team was warm, consistent, and competent in their expertise.
                     As someone without a technical background, the IO team made the process understandable and seamless. 
                     I am obsessed with the final product and am looking forward to working with them again in the future!”
                   </div>
                   <p  className="BoxContainer_5_Text_Tail">
                   -Mercedes Fernandez,
                    </p>
                    <div className="BoxContainer_5_Text_Tail">
                    Founder, Walk with Pop
                    </div>
                </div>
            </div>

                <div className="Container_1" >
                    <div className="in_box">
                    <div className="image-wrapper">
                    <img src={'./Home/M4Me.png'} className="Container_1_Image"/>
                    </div>
                    {/* <div className = "Container_1_Text"> */}
                    <div className = "container_1_text">
                            <div className = "Container_1_Text_Body" >
                            An in-house product, Meals For Me was born out of the need to help people eat healthy even when they don’t
                            have time to cook. We designed and developed the website and app for this ourselves. Creating a strong brand 
                            identity and a simple user flow for the meal subscription platform was key to the project.
                            </div>
                            <div className = "Container_1_Text_Button" >
                            <Button  onClick={()=>{history.push("./mealsForMe")}} style={{backgroundColor: "white",
                            border: "2px solid black",
                            borderRadius:'8px',textTransform:'none',color:'black', marginLeft:'1rem',height:'2.5rem',width:'10rem'}}> View Project</Button>

                                <Button href =" https://mealsfor.me/" target="_blank" style={{backgroundColor:'#F6A833', borderRadius:'8px',textTransform:'none',color:'white', marginLeft:'1rem',height:'2.5rem',width:'10rem'}}> View Website </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Container_2">
                   <div class="in_box">
                   <div className="container-2-image-wrapper">
                    <img src={SF}className="Container_2_Image"/>
                    </div>
                    <div  className = "Container_2_Text">
                        <div  className = "Container_2_Text_Body">
                        We designed and developed the brand identity, logo, mobile app as well as the website for Serving Fresh. 
                        It continues to be one of our favorite in-house products where we are now focusing on creating marketing and advertising.
                        </div>
                        <div className = "Container_1_Text_Button" >
                            <Button  onClick={()=>{history.push("./mealsForMe")}} style={{backgroundColor: "white",
                            border: "2px solid black",
                            borderRadius:'8px',textTransform:'none',color:'black', marginLeft:'1rem',height:'2.5rem',width:'10rem'}}> View Project</Button>

                                <Button href =" https://mealsfor.me/" target="_blank" style={{backgroundColor:'#F6A833', borderRadius:'8px',textTransform:'none',color:'white', marginLeft:'1rem',height:'2.5rem',width:'10rem'}}> View Website </Button>
                            </div>
                    </div>
                    </div>
                </div>

                <div className="Container_3" >
                <div className="in_box">
                    <div className="image-wrapper">
                    <img src={Nitya} style={{backgroundColor:'white'}} className="Container_1_Image"/>
                    </div>
                    <div className = "container_1_text">
                        <div className = "Container_1_Text_Body" >
                        We redesigned the website for an Ayurvedic practitioner to make it pop and convey their messaging around Ayurveda. 
                        We also simplified the user flow to make it easier for people to understand the services and book appointments.
                        </div>
                        <div  className = "Container_1_Text_Button" >
                        <Button  onClick={()=>{history.push("./mealsForMe")}} style={{backgroundColor: "white",
                            border: "2px solid black",
                            borderRadius:'8px',textTransform:'none',color:'black', marginLeft:'1rem',height:'2.5rem',width:'10rem'}}> View Project</Button>

                                <Button href =" https://mealsfor.me/" target="_blank" style={{backgroundColor:'#F6A833', borderRadius:'8px',textTransform:'none',color:'white', marginLeft:'1rem',height:'2.5rem',width:'10rem'}}> View Website </Button>
                        </div>
                    </div>
                    </div>
                </div>

                {/* <div className="Container_2">
                   
                <div  className = "Container_2_Text">
                        <div  className = "Container_2_Text_Header">
                       Manifest
                       </div>
                       <div className = "Container_2_Text_Body" >
                       We designed and developed a productivity to help people with short-term memory loss gain control 
                       of their lives without the app dominating it - in collaboration with Tulane University.
                       </div>
                       <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'2rem',fontFamily:'Avenir LT Std 65 Medium', fontWeight:'600'}}>
                           Coming Soon
                       </div>
                   </div>
                   <div>
                   <img src={"./Home/Manifest.png"} className="Container_2_Image"/>

                   </div>
               </div>

               <div className="Container_1" style={{marginBottom:'5rem'}} >
                    <div>
                    <img src={"./Home/Walk_with_pop.png"} className="Container_1_Image"/>
                    </div>
                    <div className = "Container_1_Text">
                        <div  className = "Container_1_Text_Header">
                        Walk with Pop
                        </div>
                        <div className = "Container_1_Text_Body" >
                        We designed an initial wireframe to bring the idea for this start-up in a tangible form to be shared with potential users and stakeholders.
                        </div>
                        <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'2rem',fontFamily:'Avenir LT Std 65 Medium', fontWeight:'600'}}>
                        Coming Soon
                        </div>
                    </div>
                </div> */}
        </Box>
    )
}