import { useState } from 'react'
import './App.css'
import Barra from './Barra.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Barra></Barra>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
