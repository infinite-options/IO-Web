import React, { useEffect, useRef } from "react";
import {Box, Button} from '@material-ui/core';

import '../Home/Home.css';

import { useHistory, useLocation } from "react-router-dom";
import Vote from "../voteModal/vote"
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import ModalOverflow from '@mui/joy/ModalOverflow';
import ModalDialog from '@mui/joy/ModalDialog';


const Home =()=>{

    const [open, setOpen] = React.useState(false);

    const myRef = useRef(null)
    const myRef_home = useRef(null)

    const history = useHistory();
    const location = useLocation();


//     React.useEffect(()=>{
//         setTimeout(()=> setOpen(true), 1000)
//   },[])

    return(
        <div  >
            {/* Vote-page code start*/}

    <React.Fragment>
      {/* <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open modal
      </Button> */}
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        size="lg"
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width:"100%" }}
      >
                <ModalOverflow sx={(theme)=>({
                    padding:0
                })}>
                <ModalDialog  layout="center" size=""
                 sx={(theme) => ({
                    [theme.breakpoints.only('xs')]: {
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      // transform: 'none',
                      maxWidth: 'unset',
                    },
                  })} 
                >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 700,
            borderRadius: 'md',
            p: 1,
            boxShadow: 'lg',
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Vote />
        </Sheet>
        </ModalDialog>
        </ModalOverflow>

      </Modal>
    </React.Fragment>


            {/* Vote-page Code end */}

            <Box ref={myRef_home} style={{width:'100%', backgroundImage:`url(${"./Navigation/Backdropv2.png"})`,backgroundRepeat:'no-repeat', backgroundSize:'100%, 200vh'}}>
            <Box className="HomeContainer">
                <div  className="BoxContainer_1">
                    <div className="BoxContainer_1_Text_Header">
                            Tiny Homes Competition
                    </div>
                    <div className="BoxContainer_1_Text_and_Image" >     
                        <div className="BoxContainer_1_Text">
                            <div  className="BoxContainer_1_Text_Body" >

                            We’e glad you are here. We’d love for your to take a look at our tiny home and We’d love for you to vote for our competition designs in the City of Tucson Casita Competition  
                                
                            </div> 
                            
                        </div>

                        <div className="BoxContainer_1_Image" >
                        <button className="BoxContainer_1_Text_Button"  onClick={()=> window.open("https://casitas-in-tucson-cotgis.hub.arcgis.com/pages/casita-competition-public-voting#ember271","_blank")}>
                                Vote Now!
                        </button>
                        </div>

                    </div> 
                    <div>

<table class="table-home">
    <tr>
        <td className="tucson-div">
        <img alt="tucson" src="/artifacts/tucson.jpg" className="tucson-img-home" />
        <h3>Help us make these designs better</h3>
        </td>
        <td>
        <img className="image-dimesion-L-Casita-home" src='artifacts/lcasita.jpg' alt="L-Casita" />

        </td>
        <td>
        <img className="image-dimesion-I-casita-home" src="artifacts/icasita.jpg" alt="I-Casita" />
        </td>
    </tr>
    <tr>
        <td className="">
        {/* <div className="BoxContainer_1_Image" > */}
            <button className="BoxContainer_1_Text_Button"  onClick={()=> window.open("https://casitas-in-tucson-cotgis.hub.arcgis.com/pages/casita-competition-public-voting#ember271","_blank")}>
                    Feedback
            </button>
        {/* </div> */}
       
        </td>
        <td>
          L - Casita
        </td>
        <td>
            I - Casita
         </td>
    </tr>
</table>

</div>     

                </div>
                <div className="BoxContainer_2">
                <div  className="BoxContainer_1_Text_Header" >
                    Turning Ideas into reality
                </div>
                <table class="box2">
                    <tr>
                        <td className="box2_text">
                        We love taking ideas from zero to one whether they are our own creations or yours as an entrepreneur

                        </td>
                        <td className="box2_text2">
                        <button className="BoxContainer_1_Text_Button"  onClick={()=> window.open("https://casitas-in-tucson-cotgis.hub.arcgis.com/pages/casita-competition-public-voting#ember271","_blank")}>
                   See how we can help
            </button>

                        </td>
                    </tr>
                    </table>
                    <table class="box2">
                    <tr>
                        <td className="cards">
                            <div className="box3_text">
                                <h2>About Us</h2>
                                <button className="BoxContainer_1_Text_Button"  onClick={()=> window.open("https://casitas-in-tucson-cotgis.hub.arcgis.com/pages/casita-competition-public-voting#ember271","_blank")}>
                   <span className="box-text-2">Learn More</span>
            </button>
                            </div>
                        </td>
                        <td className="cards">
                            <div className="box3_text">
                            <h2>Internships</h2>
                                <button className="BoxContainer_1_Text_Button"  onClick={()=> window.open("https://casitas-in-tucson-cotgis.hub.arcgis.com/pages/casita-competition-public-voting#ember271","_blank")}>
                                <span className="box-text-2">Learn More</span>
            </button>
                            </div>
                        </td>
                    </tr>
                </table>
                <div className="box2">
                <div>
                </div>
                </div>
                </div>

                <div  className="BoxContainer_3" >
                    <div className="BoxContainer_3_Text">
                        <div className="BoxContainer_3_Text_Header">
                        Projects we’ve built
                        </div>
                        {/* <div className="BoxContainer_3_Text_Body">
                        We are entrepreneurs solving problems that we encounter in new and creative ways. Here are some examples.
                        </div> */}
                    </div>
                    <div className="in_box">
                        <div className="BoxContainer_3_Text_Image" >
                        <div >
                        {/* <div className="BoxContainer_3_Text_Header">
                    Projects we’ve helped build
                    </div> */}
                            <div >
                            <img src={"./Home/M4Me.png"} className="BoxContainer_3_Text_ImageSize_1" />
                            </div>
                            <div style={{marginTop:'-0.3rem'}} >
                            <img src={"./Home/project_map.png"} className="BoxContainer_3_Text_ImageSize_1"/>
                            </div>
                        </div>
                        <div>
                            <img src={"./Home/Fun_Fact.png"}  className="BoxContainer_3_Text_ImageSize_2"/>
                        </div>
                        </div>
                        <div  className="box_3_text">
                        
We are entrepreneurs solving problems that we encounter in new and creative ways. Here are some examples.
                        <button  className="BoxContainer_3_Text_Button" onClick={()=> history.push("/projects")}>
                                View all Projects
                        </button>
                        </div>
                    </div>
                </div>


                
            <div className="BoxContainer_4" >
                <div className="BoxContainer_4_Text">
                    <div className="BoxContainer_3_Text_Header">
                    Projects we’ve helped build
                    </div>
                </div>
                <div className="in_box">
                <div className="BoxContainer_4_Text_Image" >
                    <div>
                        <div style={{backgroundColor:'white'}}>
                        <img src={"./Home/NityaAyurvedaLogo.png"} className="BoxContainer_3_Text_ImageSize_1"/>
                        </div>
                        <div style={{marginTop:'-0.3rem'}}>
                        <img src={"./Home/Walk_with_pop.png"} className="BoxContainer_3_Text_ImageSize_1"/>
                        </div>
                    </div>
                    <div>
                        <img src={"./Home/Manifest.png"} className="BoxContainer_3_Text_ImageSize_2"/>
                    </div>
                </div>
                <div>
                <div className="box_4_text  margin-top20">
                    We work with companies, non-profits, Universities and entrepreneurs to help them innovate and solve problems. Here are a few examples.<br/>
                    <button  className="BoxContainer_3_Text_Button" onClick={()=> history.push("/projects")}>
                                View all Projects
                        </button>
            
                    </div>


                </div>
                </div>
                {/* <div style={{display:'flex', justifyContent:'center'}}>
                    <button className="BoxContainer_4_Text_Button"  onClick={()=> history.push("/contact")}>
                    Schedule a free consultation
                    </button>
                </div> */}
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

            {/* <div  className="BoxContainer_6" style={{marginTop:'-1rem'}} >
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
            </div> */}
        
           
            {/* <div  className="BoxContainer_5">
                <div className="BoxContainer_5_Text">
                    <div  className="BoxContainer_5_Text_Header" >
                    About Us
                    </div>
                    <div  className="BoxContainer_5_Text_Body" >
                    Infinite Options was started in 2019 primarily to help college students gain real work experience along with their coursework.
                    Prashant Marathay, the Founder and CEO, has 25+ years of experience as a project manager in Silicon Valley at companies 
                    like Apple, Intel, Alphabet.
               
                   </div>
                   <div  className="BoxContainer_5_Text_Body" >
                        
                    We’ve since built multiple businesses in-house, we offer business-in-a-box to people who want to be self-employed and
                    we also work with clients to design and develop their business ideas.
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <button style={{fontSize:'20px' , marginTop:'2rem', border:'3px solid #52330D',color:'#52330D', borderRadius:'42px',fontFamily:'Avenir LT Std 45 Book',fontWeight:'600',padding:'1rem',paddingLeft:'2rem',paddingRight:'2rem',textTransform:'none', backgroundColor:"white"}}>
                    Learn More
                    </button>
                </div>
                </div>
            </div> */}
            </Box>
            </Box>


        </div>
            )
}

export default Home;