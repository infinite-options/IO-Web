import "../About/About.css";

const About =()=>{

    return (
            <div className="about-wrapper center-align">

                <h2>About Us</h2>
                <div className="about-us-intro center-align">
                Infinite Options was started in 2019 primarily to help college students gain real work experience along with their coursework. Prashant Marathay, the Founder and CEO, has 25+ years of experience as a project manager in Silicon Valley at companies like Apple, Intel, Alphabet.
                </div>
                {/* div for about us paragraph */}
                <h2>Our Process</h2>
                <div>

                </div>

                {/* div for our provcess */}

                {/* <div> */}
                    <div className="case-study-intro">
                    It’s an iterative process. Both success and failure teach us something and are key to Project Based learning.

                    </div>
                    <div className="about-us-image">
                        <img src="Teams/flow.png" className="case-study-image"/>
                    </div>
                {/* </div> */}
            </div>
    );

}

export default About;
