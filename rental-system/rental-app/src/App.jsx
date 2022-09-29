import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


import WelcomeScreen from './screens/welcome/WelcomeScreen'
import SignupScreen from './screens/form/SignupScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     {/* <FirstWc/> */}
     {/* <SecondWc/> */}
     {/* <WelcomeScreen/> */}
     <SignupScreen/>
    </div>
  )
}

export default App
