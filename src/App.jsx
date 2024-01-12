import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PublicRoutes from './Routes/PublicRoutes'
import { BrowserRouter } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <BrowserRouter>
    <PublicRoutes />
    </BrowserRouter>
  </>
  )
}

export default App
