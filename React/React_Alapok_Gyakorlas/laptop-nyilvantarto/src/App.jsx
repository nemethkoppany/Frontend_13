import { useState } from 'react'
import './App.css'
import Laptopok from './components/laptopok'
import UjLaptop from './components/uj-laptop'
import { listaz } from './data'

function App() {
  const [laptopok, setLaptopok] = useState(listaz())

  return (
    <main>
      
    <Laptopok laptopok={laptopok} setLaptopok={setLaptopok}></Laptopok>
    <UjLaptop setLaptopok={setLaptopok}></UjLaptop>
    </main>
  )
}

export default App;
