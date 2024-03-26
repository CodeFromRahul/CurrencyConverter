import { useState } from 'react'
import InputBox from './components/Inputbox'
import useCurrency from './hooks/createcurrency'


import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [from,setFrom] =useState("usd");
  const [to,setTo] = useState("inr")
  const [convertedAmount,setconvertedAmount] = useState(0);

  const currencyInfo = useCurrency(currency);

  const option = Object.keys(currencyInfo);


  return (
    <>
     <h1 className='w-100 text-orange-300'>Helllo</h1>
    </>
  )
}

export default App
