import { useState } from 'react'
import './App.css'
import Home from './routes/Home'
import { ValueContext } from './utils/minValueContext'


function App() {
  
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(Number.MAX_VALUE)
  const [productQuant, setProductQuant] = useState(0) 

  return (
    <>
    <ValueContext.Provider value={{minValue, maxValue, setMinValue, setMaxValue, productQuant, setProductQuant}}>
     <Home></Home>
     </ValueContext.Provider>
    </>
  )
}

export default App
