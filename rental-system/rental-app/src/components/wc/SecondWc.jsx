import React from "react";
import './second.css'
function SecondWc() {
  return (
    <div className="secondWc">
      <div className="s-top">
        <div className="stars">
            <img className="stars" src="./images/star.png"  alt="" />
            <img className="stars" src="./images/star.png"  alt="" />
            <img className="stars" src="./images/star.png"  alt="" />
            <img className="stars" src="./images/star.png"  alt="" />
            <img className="stars" src="./images/star.png"  alt="" />
        </div>
        <p>
          <span className="rtl">RentalPay</span>
          is a flexible and powerful application to tenant and property holders
          issues.We help to can cality and time ,every day!
        </p>
      </div>
      <div className="s-bottom">
        <div className="line">

        </div>
        <span className="name">Bugingo Eloi,</span>
        <span className="title">co-founder</span>
        <span className="title">@RentalPay</span>
      </div>
    </div>
  );
}

export default SecondWc;
