import React from "react";

import { useHistory } from "react-router-dom";
import "../Footer/Footer.css";

export default function Footer() {
  const history = useHistory();
  function handleInstagram() {}
  return (
    <div>
      <div className="FooterTextWrapper">
        <div
          className="FooterText"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={"./Navigation/Footer.png"}
            style={{ height: "3rem", width: "8rem" }}
          />
          <div>Corporate Overview </div>
          <div onClick={() => history.push("/send-offer")}>
            © 2021 by Infinite Options LLC
          </div>
        </div>

        <div className="FooterText">
          <div>Tel: 925-400-7469</div>
          <div>San Jose, CA 95120</div>
        </div>

        <div className="FooterText">
          <div>Careers</div>
          <div>info@infiniteoptions.com</div>
        </div>
        <div className="FooterText">
          <div onClick={() => history.push("/privacy")}>Privacy Policy</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            height: "2rem",
          }}
        >
          <img
            src={"./Navigation/Instagram.png"}
            onClick={(handleInstagram) =>
              window.open(
                "https://www.instagram.com/nityaayurveda/",
                "_blank",
                "noopener,noreferrer"
              )
            }
            style={{ height: "1rem", marginRight: "1rem", cursor: "pointer" }}
          />
          <img
            src={"./Navigation/LinkedIn.png"}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/7264772/admin/",
                "_blank",
                "noopener,noreferrer"
              )
            }
            style={{ height: "1rem", marginRight: "1rem", cursor: "pointer" }}
          />
          <img
            src={"./Navigation/Facebook.png"}
            onClick={() =>
              window.open(
                "https://www.facebook.com/Infinite-Options-LLC-112016320222622",
                "_blank",
                "noopener,noreferrer"
              )
            }
            style={{ height: "1rem", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>

    // <div className="Contianer">
    //     {/* <div className="MobileContainer"> */}
    //     <div style={{marginTop:'3rem', marginLeft:'3rem'}}>
    //         <img src={'./Navigation/Footer.png'} style={{ height:'3rem', width:'8rem'}}/>
    //         <div>Corporate Overview </div>
    //         <div>© 2021 by Infinite Options LLC</div>
    //     </div>
    //     <div className="Mobile1">
    //         <div>Tel: 925-400-7469</div>
    //         <div>San Jose, CA 95120</div>
    //     </div>
    //     {/* </div> */}
    //      {/* <div className="MobileContainer" style={{justifyContent:'flex-start'}} > */}
    //     <div style={{marginTop:'3rem', marginLeft:'3rem'}}>
    //         <div>Careers</div>
    //         <div>info@infiniteoptions.com</div>
    //     </div >
    //     {/* <div className="Mobile1" style={{display:'flex', justifyContent:'space-evenly', width:'10%'}}> */}
    //     <div>
    //     <img src={'./Navigation/Instagram.png'} style={{ height:'1rem', paddingRight:'1rem'}}/>
    //     <img src={'./Navigation/LinkedIn.png'} style={{ height:'1rem', paddingRight:'1rem'}}/>
    //     <img src={'./Navigation/Facebook.png'} style={{ height:'1rem'}}/>
    //     </div>
    //     {/* </div> */}
    // </div>
  );
}
