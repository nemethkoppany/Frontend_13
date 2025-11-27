
import {useRef, useState } from 'react'
import './App.css'

function App() {
  //Ha a UI-on akarunk valamit csinálni: useState
    const [inputUsername, setInputUsername] = useState('');
    const [isSaved, setIsSaved] = useState(false);

  function onChangeUsername(event){
    setIsSaved(false)
    setInputUsername( event.target.value);
  }

  function onSave(){
    setIsSaved(true)
  }

  //Ha a háttérben akarunk dolgozni. pl.: Javascriptben: Useref
  const inputNameRef = useRef();
  const [inputName, setInputName] = useState(null);

  function onSave2(){
    setInputName(inputNameRef.current.value)
    console.log(inputNameRef.current.value)
  }

  const inputEmailRef = useRef();
  function onClickLabel(){
    inputEmailRef.current.focus();
  }


  return(
    <>
    <div>
      <h2>Üdvözöllek {isSaved && inputUsername}</h2>
      <strong>Felhasználónév: </strong> <br />
      <input type="text" onChange={onChangeUsername} value={inputUsername} name="" id="" /> <br />
      <button onClick={onSave}>Felvétel</button>
    </div>
    <hr />
    <div>
      <h2>Üdvözöllek {inputName}</h2>
      <strong>Név</strong>  <br />
      <input ref={inputNameRef} type="text" /> <br />
      <button onClick={onSave2}>Mentés</button>
    </div>
    <section>
    <h2>Feliratkozás a hírlevélre</h2>
    <div className='email' onClick={onClickLabel}>
      <strong>E-mail cím</strong> <br /> <br />
      <input ref={inputEmailRef} type="email" name="" id="" /> <br /> <br />
      <button>Feliratkozom</button>
    </div>
    </section>
    </>
  )
}
//useRef, useEffect react.dev-en
export default App

