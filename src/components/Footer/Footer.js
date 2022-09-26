import React from "react";
import { ModalFooter } from "react-bootstrap";
// import Footer from 'react-bootstrap/Footer';
// import IoLogoTiktok from '@react-icons/all-files/io/IoLogoTiktok'
import f1 from "../../assets/images/f1.svg";
import Vector1 from "../../assets/images/Vector1.svg";
import f3 from "../../assets/images/f3.svg";

const Footer = () => {
  return (
    <ModalFooter
      className="d-flex justify-content-between align-items-flex-start footer-sec "
      style={{ backgroundColor: "black", padding: "100px 100px 30px 100px" }}
    >
      <div
        className="d-flex justify-content-row align-items-flex-start "
        style={{ color: "white" }}
      >
        <p style={{ padding: 0, margin: 0 }}>Feedback</p>
        <p style={{ paddingLeft: 10, margin: 0 }}>Contact</p>
      </div>
      <div style={{ color: "white" }}>
        <p className="copyright"> © 2022 archiv333. All Rights Reserved.</p>
        {/* <p><IoLogoTiktok /></p> */}
        <div className="d-flex flex-row m-4">
          <p>
            <img src={f1} />
          </p>
          <p>
            <img src={Vector1} />
          </p>
          <p>
            <img src={f3} />
          </p>
        </div>
      </div>
    </ModalFooter>

    // <Footer style={{backgroundColor:'black',marginBottom:0}}>

    // </Footer>
  );
};
export default Footer;
