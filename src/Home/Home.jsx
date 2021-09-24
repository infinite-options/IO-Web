import React, { useEffect, useRef } from "react";
import {Box, Button} from '@material-ui/core';
import '../Home/Home.css'
import { useHistory, useLocation } from "react-router-dom";

//import Backdrop from "../Assets/Backdrop.png"

export default function Home(){

    const myRef = useRef(null)
    const myRef_project = useRef(null)
    const myRef_teams = useRef(null)


    const history = useHistory();
    const location = useLocation();

    useEffect(()=>{
         myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })    
    },[location.state])

    useEffect(()=>{
        myRef_project.current.scrollIntoView({ behavior: 'smooth', block: 'start' })    
   },[location.state_project])

   useEffect(()=>{
    myRef_teams.current.scrollIntoView({ behavior: 'smooth', block: 'start' })    
    },[location.state_teams])


    return(
        <div>

            <Box  style={{width:'100%', backgroundImage:`url(${"./Navigation/Backdropv2.png"})`,backgroundRepeat:'no-repeat', backgroundSize:'100%, 200vh'}}>
            <Box className="HomeContainer">
            <div  className="BoxContainer_1">
                <div className="BoxContainer_1_Text" >
                    <div className="BoxContainer_1_Text_Header">
                        Turning ideas into reality 
                    </div>
                    <div  className="BoxContainer_1_Text_Body" >
                        We love taking ideas from zero  to one whether they are  our own creations or yours as an entrepreneur
                     </div>   
                     <button className="BoxContainer_1_Text_Button"  onClick={()=> history.push("/contact")}>
                         Schedule a free consultation
                     </button>
                </div>
                <div className="BoxContainer_1_Image" >
                    <img src={"./Navigation/Logo.png"}  style={{width:'100%'}}/>
                </div>      
            </div>

            <div  className="BoxContainer_2" >
           There are infinite ways to take an idea and turn into a business.
            </div>

            <div  ref={myRef_project} className="BoxContainer_3" >
                <div className="BoxContainer_3_Text">
                    <div className="BoxContainer_3_Text_Header">
                    Projects we’ve built
                    </div>
                    <div className="BoxContainer_3_Text_Body">
                    We are entrepreneurs solving problems that we encounter in new and creative ways. Here are some examples.
                     </div>
                </div>
                <div className="BoxContainer_3_Text_Image" >
                    <div>
                        <div>
                        <img src={"./Home/M4Me.png"} className="BoxContainer_3_Text_ImageSize_1" />
                        </div>
                        <div style={{marginTop:'-0.3rem'}}>
                        <img src={"./Home/project_map.png"} className="BoxContainer_3_Text_ImageSize_1"/>
                        </div>
                    </div>
                    <div>
                        <img src={"./Home/Fun_Fact.png"}  className="BoxContainer_3_Text_ImageSize_2"/>
                    </div>
                </div>
                <div  style={{display:'flex', justifyContent:'center'}}>
                    <button  className="BoxContainer_3_Text_Button" onClick={()=> history.push("/projects")}>
                            View all Projects
                    </button>
                </div>
            </div>


                
            <div className="BoxContainer_4" >
                <div className="BoxContainer_4_Text">
                    <div className="BoxContainer_3_Text_Header">
                    Projects we’ve helped build
                    </div>
                    <div className="BoxContainer_3_Text_Body">
                    We work with companies, non-profits, Universities and entrepreneurs to help them innovate and solve problems. Here are a few examples.            </div>
                </div>
                <div className="BoxContainer_3_Text_Image" >
                    <div>
                        <div>
                        <img src={"./Home/M4Me.png"} className="BoxContainer_3_Text_ImageSize_1"/>
                        </div>
                        <div style={{marginTop:'-0.3rem'}}>
                        <img src={"./Home/Walk_with_pop.png"} className="BoxContainer_3_Text_ImageSize_1"/>
                        </div>
                    </div>
                    <div>
                        <img src={"./Home/Manifest.png"} className="BoxContainer_3_Text_ImageSize_2"/>
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <button className="BoxContainer_4_Text_Button"  onClick={()=> history.push("/contact")}>
                    Schedule a free consultation
                    </button>
                </div>
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
                    <div ref={myRef_teams} className="BoxContainer_5_Text_Tail">
                    Founder, Walk with Pop
                    </div>
                </div>
            </div>

            <div  className="BoxContainer_6" >
                <div  className="BoxContainer_6_Text_Header" >
                    Teams
                </div>
                <div className="BoxContainer_6_Text_Body" >
                    <div>
                        <p>Front-End Development</p>
                        <p>Back-End Development</p>
                        <p>Mobile App Development</p>
                    </div>
                    <div className="BoxContainer_6_Text_Body_Margin">
                        <p>UI / UX Design</p>
                        <p>Marketing</p>
                        <p>Human Resources</p>
                    </div>
                </div>
                <div  style={{display:'flex', justifyContent:'center'}}>
                    <button  ref={myRef} className="BoxContainer_6_Text_Button" onClick={()=> history.push("/teams")}>
                    Join the team
                    </button>
                </div>
            </div>
        
           
            <div  className="BoxContainer_5">
                <div className="BoxContainer_5_Text">
                    <div  className="BoxContainer_5_Text_Header" >
                    About Us
                    </div>
                    <div  className="BoxContainer_7_Text_Body" >
                    Infinite Options was primarily started in 2019 to help college students gain real work experience along with their coursework.
                    Prashant Marathay, the Founder and CEO, has 25+ years of experience as a project manager in Silicon Valley at companies 
                    like Apple, Intel, Alphabet.
               
                   </div>
                   <div  className="BoxContainer_7_Text_Body" >
                        
                    We’ve since built multiple businesses in-house, we offer business-in-a-box to people who want to be self-employed and
                    we also work with clients to design and develop their business ideas.
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <button style={{fontSize:'18px' , marginTop:'2rem', border:'3px solid #52330D',color:'#52330D', borderRadius:'24px',fontFamily:'Avenir LT Std 45 Book',fontWeight:'bold',textTransform:'none'}}>
                    Learn More
                    </button>
                </div>
                </div>
            </div>
            </Box>
            </Box>
        </div>
    )
}