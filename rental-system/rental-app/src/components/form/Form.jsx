import React from 'react'
import './form.css'

function Form() {
  
  return (
    <div>
      <form action="">
        <h2 className='rtl'>RentalPay</h2>
        <h5 className='sign'>Sign Up</h5>
        <div className="input-container">
            <label>Username</label>
            <input type="text" className='input' placeholder='Enter your Username' />
        </div>
        <div className="input-container">
            <label>Email/CellPhone</label>
            <input type="text" className='input' placeholder='Enter your email' />
        </div>
        <div className="input-container">
            <label>Password</label>
            <input type="text" className='input' placeholder='Enter your Password' />
        </div>
        <button type='submit' className='form-btn'>Register</button>
        <div className="f-bottom">
        <span className="fbtm">Already have an account ? </span>{" "}
        <span className="log">Log In</span>
      </div>
      </form>
    </div>
  )
}

export default Form
