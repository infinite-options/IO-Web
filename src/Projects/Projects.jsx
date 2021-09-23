import { Button, Box } from "@material-ui/core";
import React from "react";
import '../Projects/Projects.css'
import Nitya from '../Assets/Projects/Nitya.png'
import SF from '../Assets/Projects/SF.png'


export default function Projects(){
    return(
        <Box  className="Container">
            <div >
                <p className="Title"> Projects</p>
            </div>
                <div className="Conatiner" style={{width:'50%', height:'28rem',marginTop:'3rem', display:'flex' }}>
                    <div>
                    <img src={'./Home/M4Me.png'} style={{width:'25rem', height:'25rem'}}/>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', paddingLeft:'2rem'}}>
                        <div style={{fontSize:'42px', fontFamily:'normal normal 900 42px/57px Avenir'}}>
                        Meals for Me
                        </div>
                        <div style={{ fontSize:'18px', marginTop:'2rem',fontFamily:'Avenir LT Std 65 Medium', fontWeight:'600'}}>
                        An in-house product, Meals For Me was born out of the need to help people eat healthy even when they don’t
                        have time to cook. We designed and developed the website and app for this ourselves. Creating a strong brand 
                        identity and a simple user flow for the meal subscription platform was key to the project.
                        </div>
                        <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'4rem'}}>
                            <Button style={{color:'white',textTransform:'none'}}> View Project</Button>
                            <Button style={{backgroundColor:'#F6A833', borderRadius:'16px',textTransform:'none',color:'white', marginLeft:'1rem',height:'3rem',width:'10rem'}}> View Website </Button>
                        </div>
                    </div>
                </div>

                <div style={{width:'50%', height:'26rem',marginTop:'2rem', display:'flex' }}>
                   
                    <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', paddingRight:'2rem'}}>
                        <div style={{fontSize:'42px',fontFamily:'Avenir LT Std 65 Medium', fontWeight:'600'}}>
                        Serving Fresh
                        </div>
                        <div style={{ fontSize:'18px', marginTop:'2rem',fontFamily:'Avenir LT Std 65 Medium', fontWeight:'600'}}>
                        We designed and developed the brand identity, logo, mobile app as well as the website for Serving Fresh. 
                        It continues to be one of our favorite in-house products where we are now focusing on creating marketing and advertising.
                        </div>
                        <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'4rem'}}>
                        <Button style={{color:'white',textTransform:'none'}}> View Project</Button>
                            <Button style={{backgroundColor:'#F6A833', borderRadius:'16px',textTransform:'none',color:'white', marginLeft:'1rem',height:'3rem',width:'10rem'}}> View Website </Button>
                        </div>
                    </div>
                    <div>
                    <img src={SF} style={{width:'25rem', height:'25rem'}}/>
                    </div>
                </div>

                <div style={{width:'50%', height:'26rem',marginTop:'2rem', display:'flex' }}>
                    <div>
                    <img src={Nitya} style={{width:'25rem', height:'25rem'}}/>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', paddingLeft:'2rem'}}>
                        <div style={{fontSize:'42px', marginTop:'3rem',fontFamily:'Avenir LT Std 65 Medium', fontWeight:'600'}}>
                        Nitya Ayurveda
                        </div>
                        <div style={{ fontSize:'18px', marginTop:'2rem',fontFamily:'Avenir LT Std 65 Medium', fontWeight:'600'}}>
                        We redesigned the website for an Ayurvedic practitioner to make it pop and convey their messaging around Ayurveda. 
                        We also simplified the user flow to make it easier for people to understand the services and book appointments.
                        </div>
                        <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'2rem'}}>
                        <Button style={{color:'white',textTransform:'none'}}> View Project</Button>
                            <Button style={{backgroundColor:'#F6A833', borderRadius:'16px',textTransform:'none',color:'white', marginLeft:'1rem',height:'3rem',width:'10rem'}}> View Website </Button>
                        </div>
                    </div>
                </div>

                <div style={{width:'50%', height:'28rem',marginTop:'2rem', display:'flex' }}>
                   
                   <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', paddingRight:'2rem'}}>
                       <div style={{fontSize:'42px', marginTop:'2rem',fontFamily:'Avenir LT Std 65 Medium', fontWeight:'600'}}>
                       Manifest
                       </div>
                       <div style={{ fontSize:'18px', marginTop:'2rem',fontFamily:'Avenir LT Std 65 Medium', fontWeight:'600'}}>
                       We designed and developed a productivity to help people with short-term memory loss gain control 
                       of their lives without the app dominating it - in collaboration with Tulane University.
                       </div>
                       <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'4rem',fontFamily:'Avenir LT Std 65 Medium', fontWeight:'600'}}>
                           Coming Soon
                       </div>
                   </div>
                   <div>
                   <img src={"./Home/Manifest.png"} style={{width:'25rem', height:'25rem'}}/>

                   </div>
               </div>

               <div style={{width:'50%', height:'28rem',marginTop:'2rem', display:'flex' }}>
                    <div>
                    <img src={"./Home/Walk_with_pop.png"} style={{width:'25rem', height:'25rem'}}/>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', paddingLeft:'2rem'}}>
                        <div style={{fontSize:'42px', marginTop:'3rem',fontFamily:'Avenir LT Std 65 Medium', fontWeight:'600'}}>
                        Walk with Pop
                        </div>
                        <div style={{ fontSize:'18px', marginTop:'2rem',fontFamily:'Avenir LT Std 65 Medium', fontWeight:'600'}}>
                        We designed an initial wireframe to bring the idea for this start-up in a tangible form to be shared with potential users and stakeholders.
                        </div>
                        <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'2rem',fontFamily:'Avenir LT Std 65 Medium', fontWeight:'600'}}>
                        Coming Soon
                        </div>
                    </div>
                </div>
        </Box>
    )
}