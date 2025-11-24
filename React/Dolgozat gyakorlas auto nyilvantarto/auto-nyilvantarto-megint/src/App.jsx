import { useState } from 'react'
import {listaz} from "./data"
import Autok from './components/autok';
import UjAutok from './components/uj-auto';
import './App.css'

function App() {
  const [autok, setAutok] = useState(listaz())

  return(
    <main>
      <Autok autok={autok} setAutok={setAutok}></Autok>
      <UjAutok autok={autok} setAutok={setAutok}></UjAutok>
    </main>
  )
}

export default App
