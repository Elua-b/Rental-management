import React from 'react'
import Form from '../../components/form/Form'
import SecondWc from '../../components/wc/secondwc'

function SignupScreen() {
  return (
    <div className='wc'>
      <div className="first">
        <Form/>

      </div>
      <div className="second">
        <SecondWc/>
      </div>
    </div>
  )
}

export default SignupScreen
