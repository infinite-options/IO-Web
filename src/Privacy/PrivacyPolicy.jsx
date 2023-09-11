import React, { useEffect } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Box, TextField, Button } from "@material-ui/core";
import PrivacyPic from "../Assets/images/Privacy.png";

const BASE_URL = process.env.REACT_APP_SERVER_BASE_URI;

/* Custom Hook to make styles */
const useStyles = makeStyles({
  title: {
    font: "normal normal 600 38px Quicksand-Book",
    color: "#000000",
    textAlign: "center",
    marginTop: "1rem",
  },

  header: { font: "normal normal bold 20px Quicksand-Bold" },
  body: {
    font: "normal normal 300 16px Quicksand-Regular",
  },
});

/* Navigation Bar component function */
export default function PrivacyPolicy() {
  console.log("in login page");
  const classes = useStyles();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        // backgroundColor: "#F2F7FC",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "left",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "left",
          width: "50rem",
          overflow: "scroll",
        }}
      >
        <div className={classes.title}>Infinite Options Privacy Policy</div>
        <br />
        <div className={classes.body}>Last updated: September 6, 2023 </div>
        <br />
        <div className={classes.body}>
          This Privacy Policy outlines how Infinite Options, LLC ("we," "us," or
          "our") collects, uses, stores, and protects user data. We are
          committed to respecting your privacy and ensuring the security of your
          personal information. By using our services, you consent to the
          practices described in this policy.
        </div>
        <br />
        <div>
          <div className={classes.header}>Information We Collect</div>
          <div className={classes.body}>
            We may collect the following types of information:
            <ul>
              Personal Information:
              <li>Name</li>
              <li>Email address</li> <li>Phone number</li>{" "}
              <li>Postal address</li>
            </ul>
            <ul>
              Non-Personal Information
              <li>Device information (e.g., IP address, browser type)</li>
              <li>
                Usage data (e.g., pages visited, interactions with our services)
              </li>{" "}
              <li>Cookies and similar technologies</li>{" "}
            </ul>
          </div>
        </div>
        <br />
        <div>
          <div className={classes.header}> How We Use Your Information </div>
          <div className={classes.body}>
            We use your information for the following purposes:
            <ul>
              Providing Services: To deliver the products or services you
              request and ensure they meet your needs.
            </ul>
            <ul>
              Communication: To respond to your inquiries, send updates, and
              provide important information about our services.
            </ul>
            <ul>
              Analytics: To analyze usage patterns and improve our services,
              making them more user-friendly and efficient.
            </ul>
            <ul>
              Marketing: To inform you about promotions, updates, and new
              features, with the option to opt out at any time.
            </ul>
          </div>
        </div>
        <br />
        <div>
          <div className={classes.header}>Data Security</div>
          <div className={classes.body}>
            We take data security seriously and employ reasonable measures to
            protect your information from unauthorized access, disclosure,
            alteration, and destruction. This includes encryption, access
            controls, and regular security assessments.
          </div>
        </div>
        <br />
        <div>
          <div className={classes.header}>Sharing Your Information</div>
          <div className={classes.body}>
            We do not sell, rent, or trade your personal information to third
            parties. However, we may share your information with trusted service
            providers who help us operate our services, subject to
            confidentiality agreements.
          </div>
        </div>
        <br />
        <div>
          <div className={classes.header}>Legal Requirements</div>
          <div className={classes.body}>
            We may disclose your information if required by law or when we
            believe it is necessary to protect our rights, privacy, safety, or
            property.
          </div>
        </div>
        <br />
        <div>
          <div className={classes.header}>Your choices</div>
          <div className={classes.body}>
            You have the following rights regarding your data:
            <ul>
              Access and Correction: You can request access to your personal
              information and request corrections if necessary.
            </ul>
            <ul>
              Data Deletion: You can request the deletion of your personal
              information, subject to legal limitations.
            </ul>
            <ul>
              Opt-Out: You can opt out of marketing communications by following
              the instructions provided in the messages.
            </ul>
          </div>
        </div>
        <br />
        <div>
          <div className={classes.header}>Children's Privacy</div>
          <div className={classes.body}>
            Our services are not intended for individuals under the age of 13.
            We do not knowingly collect personal information from children
            without parental consent.
          </div>
        </div>
        <br />
        <div>
          <div className={classes.header}>Changes To This Privacy Policy</div>
          <div className={classes.body}>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. Any updates will be
            posted on our website, and the date of the last revision will be
            indicated.
          </div>
        </div>
        <br />
        <div>
          <div className={classes.header}>Contact Us</div>
          <div className={classes.body}>
            If you have any questions or concerns about this Privacy Policy or
            how we handle your data, please contact us at
            <br /> info@infiniteoptions.com <br />
            <br />
            By using our services, you acknowledge that you have read and agree
            to this Privacy Policy.
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={PrivacyPic} style={{ width: "50%" }} />
        </div>
      </div>
    </div>
  );
}
