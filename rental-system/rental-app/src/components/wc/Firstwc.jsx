import React, { useState } from "react";
import "./firstwc.css";

function FirstWc() {
  const [tickedSection, setTickedSection] = useState(null);
  const toggleTick = (index) => {
    if (index === 1 && tickedSection === 1) {
      setTickedSection(null);
    } else if (index === 2 && tickedSection === 2) {
      setTickedSection(null);
    } else {
      setTickedSection(index);
    }
  };
  return (
    <div className="firstWc">
      <div className="f-top">
        <h3 className="f-head">
          <span className="wlk">Welcome to</span>

          <span className="rtl">RentalPay</span>
        </h3>
        <h5 className="wrd">
          Are you a Real-estate owner or Property Tenant ?
        </h5>
      </div>
      <div className="f-middle">
        <div className="f-profile">
          <img src="./images/imoji.jpg" className="img" alt="" />
          <h5>I am a Real-Estate Manager</h5>
        </div>
        <div className="f-word"></div>
        <div
          className="verify"
          onClick={() => {
            toggleTick(1);
          }}
        >
          {tickedSection === 1 && (
            <img src="./images/tick.png" className="tick" alt="" />
          )}
        </div>
      </div>
      <div className="f-middle">
        <div className="f-profile">
          <img src="./images/imoji.jpg" className="img" alt="" />
          <h5>I am a Tenant/Rent Occupant</h5>
        </div>
        <div className="f-word"></div>
        <div
          className="verify"
          onClick={() => {
            toggleTick(2);
          }}
        >
          {tickedSection === 2 && (
            <img src="./images/tick.png" className="tick" alt="" />
          )}
        </div>
      </div>
      <div className="f-bottom">
        <span className="fbtm">Already have an account ? </span>{" "}
        <span className="log">Log In</span>
      </div>
    </div>
  );
}

export default FirstWc;
