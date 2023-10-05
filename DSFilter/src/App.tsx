import { useState } from 'react'
import './App.css'
import Home from './routes/Home'
import { ValueContext } from './utils/ValueContext'


function App() {
  
  const [productQuant, setProductQuant] = useState(0) 

  return (
    <>
    <ValueContext.Provider value={{productQuant, setProductQuant}}>
     <Home></Home>
     </ValueContext.Provider>
    </>
  )
}

export default App
