import { useState } from "react";
import "./App.css";
import { listaz } from "./data";
import Autok from "./components/autok";
import UjAuto from "./components/uj-auto";

function App() {
  const [autok, setAutok] = useState(listaz())

  return(
    <main>
      <Autok autok={autok} setAutok={setAutok} />
      <UjAuto autok={autok} setAutok={setAutok}/>
    </main>
  )
}

export default App;
