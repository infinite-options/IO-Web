import logo from "../image/IO_white.png";
import li from "../image/li.svg";
import fb from "../image/fb.svg";
import twitter from "../image/twitter.svg";


const Footeer=()=>{

    return(
        <div style={{height:'250px',backgroundColor:'#52330D',width:'100%'}}>
            <div style={{height:'250px',float:'left',width:'33%'}}>
                <div style={{height:'30%'}}>
                    <img src={logo} style={{marginBottom:'100px'}}></img>
                </div>
                <div style={{height:'30%',textAlign:'center'}}><p style={{color:'white',marginTop:'30px'}}>Corporate Overview</p></div>
                <div style={{height:'30%'}}><p style={{color:'white',marginTop:'30px'}}>© 2019 by Infinite Options LLC</p></div>
            </div>
            <div style={{height:'250px',float:'left',width:'33%'}}>
            <div style={{height:'30%'}}>
                    <p style={{color:'white',marginTop:'30px'}}>info@infiniteoptions.com</p>
                </div>
                <div style={{height:'30%',textAlign:'center'}}><p style={{color:'white',marginTop:'0px'}}>Tel: 925-400-7469</p></div>
                <div style={{height:'30%'}}><p style={{color:'white',marginTop:'30px'}}>San Jose, CA 95120</p></div>
            </div>
            <div style={{height:'250px',float:'left',width:'33%'}}>
                <div style={{float:'left', width:'33%',marginTop:'20%'}}><img style={{height:'51px',width:'51px'}} src={twitter}></img></div>
                <div style={{float:'left',width:'33%',marginTop:'20%'}}><img style={{height:'51px',width:'51px'}} src={fb}></img></div>
                <div style={{float:'left',width:'33%',marginTop:'20%'}}><img style={{height:'51px',width:'51px'}} src={li}></img></div>
            </div>
        </div>
    )
}
export default Footeer;