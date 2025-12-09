import { useState } from 'react'
import './App.css'
import { listaz } from './data'
import Kartyak from './components/kartyak'
import UjKartya from './components/uj-kartya'


function App() {
  const [kartya, setKartya] = useState(listaz())

  return (
    <main>
      <Kartyak kartya={kartya} setKartyak={setKartya}></Kartyak>
      <UjKartya setKartyak={setKartya}></UjKartya>
    </main>
  )
}

export default App
