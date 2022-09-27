import React from 'react'
import './firstwc.css'
function FirstWc() {
  return (
    <div className='firstWc'>
      <div className="f-top">
        <h3 className='f-head'>
            <span className='wlk'>Welcome to</span>
            <span className='rtl'>RentalPay</span>
        </h3>
        <h5 className='wrd'>Are you a Real-estate owner or Property Tenant ?</h5>
      </div>
      <div className="f-middle">
        <div className="f-profile">
            <img src="./images/imoji.jpg" alt="" />
        </div>
        <div className="f-word">
            <h5>I am  a Real-Estate Manager</h5>
        </div>
        <div className="verify">
            
        </div>
      </div>
      <div className="f-middle">
        <div className="f-profile">
            <img src="./images/imoji.jpg" alt="" />
        </div>
        <div className="f-word">
            <h5>I am  a Real-Estate Manager</h5>
        </div>
        <div className="verify">
            
        </div>
      </div>
      <div className="f-bottom">
        <span>Already have an account ? </span> <span>Log In</span>
      </div>
    </div>
  )
}

export default FirstWc
