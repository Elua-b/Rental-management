import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FirstWc from './components/wc/firstwc'
import SecondWc from './components/wc/secondwc'
import WelcomeScreen from './screens/welcome/WelcomeScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     {/* <FirstWc/> */}
     {/* <SecondWc/> */}
     <WelcomeScreen/>
    </div>
  )
}

export default App
