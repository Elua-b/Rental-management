import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FirstWc from './components/wc/firstwc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <FirstWc/>
    </div>
  )
}

export default App
