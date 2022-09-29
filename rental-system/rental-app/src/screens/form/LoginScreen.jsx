import React from 'react'
import Login from '../../components/login/Login'
import SecondWc from '../../components/wc/secondwc'

function LoginScreen() {
  return (
    <div className='wc'>
    <div className="first">
      <Login/>

    </div>
    <div className="second">
      <SecondWc/>
    </div>
  </div>
  )
}

export default LoginScreen
