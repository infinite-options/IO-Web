import { Button, Box} from "@material-ui/core";
import React from "react";

export default function Teams(){
    return(
        <Box style={{width:'100%', backgroundPosition:'center', backgroundImage:`url(${"./Navigation/Backdropv2.png"})`,backgroundRepeat:'no-repeat', backgroundSize:'100%, 200vh'}}>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'2rem'}}>
                <div>
                <img src="/Navigation/Logo.png"/>
                </div>
                <div style={{width:'40%', marginTop:'2rem',textAlign:'center',fontSize:'22px', color:'#52330D',fontFamily:'Avenir LT Std 65 Medium', fontWeight:'bold'}} >
                We work with people who would benefit from real world experience. 
                We offer a safe, supportive environment where you’ll get a chance to learn and hone your skills.
                </div>
                <div style={{width:'60%', height:'75rem',marginTop:'5rem',backgroundColor:'white', display:'flex',boxShadow:'0 0 18px #757575', display:'flex',flexDirection:'column', alignItems:'center' }}>
                    <div style={{marginTop:'5rem',fontSize:'32px', color:'#52330D',fontFamily:'Avenir LT Std 65 Medium', fontWeight:'bold'}}>Our Process </div>
                    <div style={{width:'70%', marginTop:'2rem',textAlign:'center',fontSize:'22px', color:'#52330D',fontFamily:'Avenir LT Std 65 Medium', fontWeight:'bold'}}>We learn by doing. The best way to get good at something is to do it - preferably in a safe, supportive environment.</div>
                    <img src={'./Teams/flow.png'} style={{ padding:'5rem'}} />
                </div>
                <div style={{width:'40%', textAlign:'center', marginTop:'5rem', color:'#52330D',fontFamily:'Avenir LT Std 65 Medium', fontWeight:'bold', fontSize:'22px'}}>
                It’s an iterative process. Both success and failure teach us something and are key to Project Based learning.
                </div>
           
            </div>
            <div style={{backgroundColor:'#F6A833', width:'100%', height:'24rem', display:'flex', flexDirection:'column', marginTop:'5rem'}}>
                    <div  style={{display:'flex',justifyContent:'flex-start', marginLeft:'30%', marginTop:'1rem',fontFamily:'Libre Baskerville', fontSize:'48px', color:'white'}}>
                    Lets have a chat!
                    </div>
                        <div style={{display:'flex',justifyContent:'center', marginTop:'1rem'}}>
                            <input placeholder='First Name*' style={{paddingLeft:'1rem',height:'2rem',width:'20%', border:'2px solid #52330D', borderRadius:'16px'}}>
                            </input>
                            <input placeholder='Last Name*' style={{paddingLeft:'1rem', height:'2rem',width:'20%', marginLeft:'1rem', border:'2px solid #52330D', borderRadius:'16px'}}>
                            </input>

                        </div>
                        <div style={{display:'flex', justifyContent:'center',marginTop:'1rem'}}>
                        <input placeholder='Email address*' style={{paddingLeft:'1rem',height:'2rem',width:'20%', border:'2px solid #52330D', borderRadius:'16px'}}>
                            </input >
                            <input placeholder='phone Number' style={{paddingLeft:'1rem' , height:'2rem',width:'20%', marginLeft:'1rem', border:'2px solid #52330D', borderRadius:'16px'}}>
                            </input>

                        </div>
                    <div  style={{display:'flex',justifyContent:'flex-start', marginLeft:'30%', marginTop:'1rem',fontFamily:'Libre Baskerville', color:'white'}}>
                    What are you good at?
                    </div>
                    <div style={{display:'flex', justifyContent:'center',marginTop:'1rem'}}>

                      <input style={{height:'4rem',width:'44%', border:'2px solid #52330D', borderRadius:'16px'}}>
                    </input>
                    </div>
                    <Button style={{backgroundColor:'#52330D',color:'#ffffff',textTransform:'none' , width:'10rem', borderRadius:'16px',marginLeft:'45%', marginTop:'1rem'}}>
                        Send a Message
                    </Button>

                </div>
        </Box>
    )
}