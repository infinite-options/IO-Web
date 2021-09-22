import React from "react";

export default function Footer(){
    return(
        <div style={{display:'flex',marginTop:'5rem', justifyContent:'space-evenly',fontFamily:'Avenir LT Std 45 Book',fontSize:'12px' , color:'#E0E0E0',alignItems:'center',width:'100%',backgroundColor:'#52330D', position:'relative', bottom:'0'}}>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center',padding:'2rem'}}>
                <img src={'./Navigation/Footer.png'} style={{ height:'3rem', width:'8rem'}}/>
                <div>Corporate Overview </div>
                <div>© 2021 by Infinite Options LLC</div>
            </div>
            <div>
                <div>Tel: 925-400-7469</div>
                <div>San Jose, CA 95120</div>
            </div>
            <div>
                <div>Careers</div>
                <div>info@infiniteoptions.com</div>
            </div>
            <div style={{display:'flex', justifyContent:'space-evenly', width:'5%'}}>
            <img src={'./Navigation/Instagram.png'} style={{ height:'1rem'}}/>
            <img src={'./Navigation/LinkedIn.png'} style={{ height:'1rem'}}/>
            <img src={'./Navigation/Facebook.png'} style={{ height:'1rem'}}/>
            </div>
        </div>
    )
}