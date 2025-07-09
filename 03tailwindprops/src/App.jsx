import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx' // <-- corrected here

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-blue-500 text-white text-3xl font-bold p-4 rounded-lg shadow-lg mb-4">
        Hello Rex!!!
      </h1>
      <Card username= "Rexcy" desc="The founder and CEO of CodexRex" />
    </>
  )
}

export default App
