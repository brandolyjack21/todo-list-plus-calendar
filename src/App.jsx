import { useEffect } from 'react'
import './index.css'
import Calendar from './components/Calendar'
import { createYearsArray } from './utils/createYearsArray'

function App() {

  useEffect(() => {

    createYearsArray()
  },[])

  return (
    <>
      <Calendar/>
    </>
  )
}

export default App
