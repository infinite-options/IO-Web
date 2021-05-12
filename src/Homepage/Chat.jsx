import Row from 'react-bootstrap/Row';
import TextField from '@material-ui/core/TextField';
import flow from "../image/flow.png";
import gi from '../image/gi.png'

const Chat=()=>{
    return(
        <>
        
        <div style={{width:'100%',height:'1136px',backgroundColor:'#F6A833'}}>
                <div style={{width:'100%'}}>
                    <p style={{textAlign:'left',marginLeft:'202px',fontSize:'32px',color:'white'}}>Lets have a chat!</p>
                </div>
                <Row style={{marginTop:'35px'}}>
                    
                    <input style={{width:'35vw',height:'8vh',borderRadius:'25px',marginLeft:'10vw',float:'left'}} placeholder="Your Name"></input>
                    <input style={{width:'35vw',height:'8vh',borderRadius:'25px',marginLeft:'10vw',float:'left'}} placeholder="Website URL"></input>
                </Row>
                <Row>
                <input style={{width:'35vw',height:'8vh',borderRadius:'25px',marginLeft:'10vw',marginTop:'5vh',float:'left'}} placeholder="Email"></input>
                    <input style={{width:'35vw',height:'8vh',borderRadius:'25px',marginLeft:'10vw',marginTop:'5vh',float:'left'}} placeholder="Phone"></input>
                </Row>
                
                <Row><img  style={{marginTop:'5vh',width:'75%'}}src={gi}></img></Row>
                
                <Row>
                    <input style={{width:'75vw',height:'16vh',borderRadius:'25px',marginLeft:'10vw',marginRight:'10vw',marginTop:'5vh'}} placeholder='Anything else you want to add? You can also email us your resume and / or portfolio at info@infiniteoptions.com'></input>
                </Row>
                <Row>
                    <button style={{height:'8vh',width:'20vw',borderRadius:'50px',backgroundColor:'#52330D',color:'white',marginTop:'5vh',border:'1px #52330D'}}>Send a Message</button>
                </Row>
        </div>
        </>
    )
}
export default Chat;