import Row from 'react-bootstrap/Row';
import TextField from '@material-ui/core/TextField';
import flow from "../image/flow.png";





const Chat=()=>{
    return(
        <>
        <img src={flow}></img>
        <div style={{width:'100%',height:'1136px',backgroundColor:'#F6A833'}}>
                <div style={{width:'100%',border:'1px solid black'}}>
                    <p style={{textAlign:'left',marginLeft:'202px',fontSize:'32px',color:'white'}}>Lets have a chat!</p>
                </div>
                <Row style={{marginTop:'35px'}}>
                    <input style={{width:'800px',height:'100px',borderRadius:'25px',marginLeft:'160px',marginRight:'26px'}}></input>
                    <input style={{width:'800px',height:'100px',borderRadius:'25px',marginLeft:'26px',marginRight:'160px'}}></input>
                </Row>
                <Row>
                <input style={{width:'800px',height:'100px',borderRadius:'25px',marginLeft:'160px',marginRight:'26px',marginTop:'23px'}}></input>
                    <input style={{width:'800px',height:'100px',borderRadius:'25px',marginLeft:'26px',marginRight:'160px',marginTop:'23px'}}></input>
                </Row>
                <Row>1</Row>
                <Row>1</Row>
                <Row>
                    <input style={{width:'1626px',height:'231px',borderRadius:'25px',marginLeft:'150px',marginRight:'160px',marginTop:'23px'}}></input>
                </Row>
                <Row>
                    <button style={{height:'100px',width:'500px',borderRadius:'50px',backgroundColor:'#52330D',color:'white',marginTop:'60px',border:'1px #52330D'}}>Send a Message</button>
                </Row>
        </div>
        </>
    )
}
export default Chat;