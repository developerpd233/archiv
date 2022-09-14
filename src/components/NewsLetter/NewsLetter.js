import React from "react";
import "./NewsLetter.css";
import { HiOutlineArrowRight } from "@react-icons/all-files/hi/HiOutlineArrowRight";
const NewsLetter = () => {
  return (
    <div className="newsletter-sec">
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ padding: '150px 0px'}}
      >
        <h2 style={{paddingBottom:9}}>Join the News Letter</h2>
        <h3  style={{paddingBottom:25,textAlign:'center'}}>Get curated essentials and updates to your inbox</h3>
        <div
        className="inputdiv"
          // style={{
          //   border: "solid",
          //   borderRadius: "30px",
          //   borderWidth: 1,
          //   borderColor: "#C6C6C6",
          // }}
        >
          <input
            type="text"
            placeholder="Type Email here......"
            className="test"
            style={{ border: 0 }}
          />
          <span>
            <HiOutlineArrowRight size={30} />
            &nbsp; &nbsp; &nbsp;
          </span>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;
