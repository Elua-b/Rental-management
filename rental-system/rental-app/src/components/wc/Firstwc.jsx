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
            <img src="./images/imoji.jpg" className='img'  alt="" />
            <h5>I am  a Real-Estate Manager</h5>
        </div>
        <div className="f-word">
           
        </div>
        <div className="verify">
            <img src="./images/tick.png" className='tick' alt="" />
        </div>
      </div>
      <div className="f-middle">
        <div className="f-profile">
            <img src="./images/imoji.jpg" className='img' alt="" />
            <h5>I am  a Tenant/Rent Occupant</h5>
        </div>
        <div className="f-word">
           
        </div>
        <div className="verify">
            
        </div>
      </div>
      <div className="f-bottom">
        <span className='fbtm'>Already have an account ? </span> <span className='log'>Log In</span>
      </div>
    </div>
  )
}

export default FirstWc
