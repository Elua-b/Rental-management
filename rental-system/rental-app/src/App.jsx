import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


import WelcomeScreen from './screens/welcome/WelcomeScreen'
import SignupScreen from './screens/form/SignupScreen'
import Login from './components/login/Login'
import LoginScreen from './screens/form/LoginScreen'
import SideBar from './components/sideBar/SideBar'
import Statistics from './components/Dashbord/statistics/Statistics'
import Tenants from './components/Dashbord/tenants/Tenants'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     {/* <FirstWc/> */}
     {/* <SecondWc/> */}
     {/* <WelcomeScreen/> */}
     {/* <SignupScreen/> */}
     {/* <Login/> */}
     {/* <LoginScreen/> */}
     {/* <SideBar/> */}
     <Statistics/>
     <Tenants/>
     
    </div>
  )
}

export default App
