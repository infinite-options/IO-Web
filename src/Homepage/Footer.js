import logo from "../image/InfiniteOptionsLogoLight.png";
import TwitterLogo from "../assets/Icon ionic-logo-twitter.svg";
import LinkedInLogo from "../assets/Icon awesome-linkedin-in.svg";
import FacebookLogo from "../assets/Icon awesome-facebook-f.svg";

const Footer = () => {
  return (
    <section id="footer" style={{ backgroundColor: "#52330D" }}>
      <div style={{ flex: 1 }}>
        <img src={logo} className="" alt="image" />
        <p>Corporate Overview</p>
        <p>copyright by Infinite Options LLC</p>
      </div>
      <div style={{ flex: 1 }}>
        <p>info@infiniteoptions.com</p>
        <p>Tel: 925-400-7469</p>
        <p>San Jose, CA 95120</p>
      </div>
      <div style={{ flex: 1 }}>
        <img src={TwitterLogo} className="" alt="TwitterLogo" />
        <img src={LinkedInLogo} className="" alt="InstagramLogo" />
        <img src={FacebookLogo} className="" alt="FacebookLogo" />
      </div>
    </section>
  );
};

export default Footer;
