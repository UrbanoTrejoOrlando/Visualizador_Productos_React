import { useState } from 'react'

import './App.css'
import Formulario from './Formulario/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <Formulario/>
    </div>
  )
}

export default App
