import {lekerdez} from "./data"
import { useState } from 'react'
import './App.css'
import Allatok from './components/allatok'
import UjAllat from './components/uj-allat'

function App() {
  const [allatok, setAllatok] = useState(lekerdez())

  return(
    <main>
      <Allatok allatok={allatok} setAlltok={setAllatok}></Allatok>
      <UjAllat allatok={allatok} setAllatok={setAllatok}></UjAllat>
    </main>
    
  )
}

export default App
