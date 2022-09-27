import React from 'react'
import FirstWc from '../../components/wc/firstwc'
import SecondWc from '../../components/wc/secondwc'
import './WelcomeScreen.css'
function WelcomeScreen() {
  return (
    <div className='wc'>
      <div className='first'>
        <FirstWc/>
      </div>
      <div className="second">
        <SecondWc/>
      </div>
    </div>
  )
}

export default WelcomeScreen
