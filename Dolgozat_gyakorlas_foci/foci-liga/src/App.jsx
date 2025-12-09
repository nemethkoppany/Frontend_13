import { useState } from 'react'
import './App.css'
import { listaz } from './data'
import Csapatok from './assets/components/csapatok'
import UjCsapat from './assets/components/uj-csapat'

function App() {
  const [csapatok, setCsapatok] = useState(listaz())

  return (
    <main>
      <Csapatok csapatok={csapatok} setCsapatok={setCsapatok}></Csapatok>
      <UjCsapat setCsapatok={setCsapatok}></UjCsapat>
    </main>
  )
}

export default App
