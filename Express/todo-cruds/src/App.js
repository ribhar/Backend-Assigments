import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TODO from './components/TODO'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <TODO/>
    </div>
  )
}

export default App
