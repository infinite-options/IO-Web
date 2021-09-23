import React from "react";
import '../Footer/Footer.css'

export default function Footer(){
    return(
        <div className="Contianer">
            <div className="MobileContainer">
            <div style={{marginTop:'3rem', marginLeft:'3rem'}}>
                <img src={'./Navigation/Footer.png'} style={{ height:'3rem', width:'8rem'}}/>
                <div>Corporate Overview </div>
                <div>© 2021 by Infinite Options LLC</div>
            </div>
            <div className="Mobile1">
                <div>Tel: 925-400-7469</div>
                <div>San Jose, CA 95120</div>
            </div>
            </div>
            <div className="MobileContainer" style={{justifyContent:'flex-start'}} >
            <div style={{marginTop:'3rem', marginLeft:'3rem'}}>
                <div>Careers</div>
                <div>info@infiniteoptions.com</div>
            </div >
            <div className="Mobile1" style={{display:'flex', justifyContent:'space-evenly', width:'10%'}}>
            <img src={'./Navigation/Instagram.png'} style={{ height:'1rem', paddingRight:'1rem'}}/>
            <img src={'./Navigation/LinkedIn.png'} style={{ height:'1rem', paddingRight:'1rem'}}/>
            <img src={'./Navigation/Facebook.png'} style={{ height:'1rem'}}/>
            </div>
            </div>
        </div>
    )
}