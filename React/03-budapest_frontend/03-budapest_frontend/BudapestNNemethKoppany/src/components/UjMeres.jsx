import { useEffectEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function UjMeres() {
  const navigate = useNavigate();
  const datum = new Date().toISOString().substring(0, 10);
 
  const [err, setErr] = useState(null);
 
  const evszamInput = useRef("");
  const magyarInput = useRef("");
  const nemetInput = useRef("");
  const szlovakInput = useRef("");
  const egyebInput = useRef("");
 
  const [isValid, setIsvalid] = useState({
    magyar: false,
    nemet: false,
    szlovak: false,
    datum: true
  })
 
  function validateDate(inputText){
    const evszam = inputText.substring(0,4)*1;
    setIsvalid((prev)=>({
      ...prev,
      ["datum"]:  1900 <= evszam  <= datum
    }))
  }
 
  const [isEdit, setIsEdit] = useState({
    magyar: false,
    nemet: false,
    szlovak: false,
    egyeb:false
  })
 
 
 
  function validateLakossag(inputText, inputName){
    setIsvalid((prev) =>({
      ...prev,
      [inputName]: Number(inputText) >= 0
    }))
 
    setIsEdit((prev) =>({
    ...prev,
    [inputName]: true,
  }))
  }
 
 
  async function onSave(event) {
    event.preventDefault();
 
 
    if(isValid.datum){
const ujMeres = {
      evszam: parseInt(evszamInput.current.value),
      magyar: Number(magyarInput.current.value),
      nemet: Number(nemetInput.current.value),
      szlovak: Number(szlovakInput.current.value),
      egyeb: Number(egyebInput.current.value),
    };
    console.log(ujMeres);
    try {
      const response = await fetch("http://localhost:5000/meresek", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ujMeres),
      });
      if (response.ok) {
        navigate("/adatok");
      } else {
        throw new Error(
          `Hibakód: ${response.status}, Hibaüzenet: ${response.statusText}`
        );
      }
    } catch (err) {
      setErr(`Hiba az új felmérés felvétele közben ${err.message}`);
    }
    }
    else{
      setErr("Minden mező helyes kitöltése kötelező!");
    }
  }
 
  return (
    <div className="container">
      <h2 className="my-4 text-center">Új mérés regisztrálása</h2>
      <div className="row">
        <div className="offset-lg-3 offset-md-2 col-lg-6 col-md-8 col-12">
          <form onSubmit={onSave}>
            <div className="mb-3">
 
 
              <div className="row">
                <div className="col-6">
                 <label htmlFor="nev"> Évszám </label>
                </div>
                <div className="col-6 text-end">
                  {!isValid.datum && (
                    <span className="text-danger">
                      1900-nál nagyobbnak és a mai dátumnál kisebbnek kell lennie a megadott évszámnak
                    </span>
                  )}
                </div>
              </div>
              <input
                ref={evszamInput}
                type="date"
                className="form-control"
                name="erkezes"
                defaultValue={datum}
                onChange={()=> validateDate(evszamInput.current.value)}
              />
            </div>
 
            <div className="mb-3">
 
                  <div className="row">
                <div className="col-6">
                  <label htmlFor="magyar"> Magyarok: </label>
                </div>
                <div className="col-6 text-end">
                  {isEdit.magyar && !isValid.magyar && (
                    <span className="text-danger">
                      A lakoksság nem lehet kisebb mint 0
                    </span>
                  )}
                </div>
              </div>
 
 
             
              <input
                ref={magyarInput}
                className="form-control"
                type="number"
                id="magyar"
                name="magyar"
                onChange={()=> validateLakossag(magyarInput.current.value, magyarInput.current.name)}
                onBlur={()=> validateLakossag(magyarInput.current.value, magyarInput.current.name)}
             
              />
            </div>
 
            <div className="mb-3">
               <div className="row">
                <div className="col-6">
                  <label htmlFor="nemet" className="form-label">
                Németek:
              </label>
                </div>
                <div className="col-6 text-end">
                  {isEdit.nemet && !isValid.nemet && (
                    <span className="text-danger">
                      A lakoksság nem lehet kisebb mint 0
                    </span>
                  )}
                </div>
              </div>
             
              <input
                ref={nemetInput}
                type="number"
                className="form-control"
                name="nemet"
                id="nemet"
                onChange={()=> validateLakossag(nemetInput.current.value, nemetInput.current.name)}
                onBlur={()=> validateLakossag(nemetInput.current.value, nemetInput.current.name)}
             
              />
            </div>
 
            <div className="mb-3">
 
              <div className="row">
                <div className="col-6">
                  <label htmlFor="szlovak"> Szlovákok </label>
                </div>
                <div className="col-6 text-end">
                  {isEdit.szlovak && !isValid.szlovak && (
                    <span className="text-danger">
                      A lakoksság nem lehet kisebb mint 0
                    </span>
                  )}
                </div>
              </div>
             
              <input
                ref={szlovakInput}
                className="form-control"
                type="number"
                id="szlovak"
                name="szlovak"
                onChange={()=> validateLakossag(szlovakInput.current.value, szlovakInput.current.name)}
                onBlur={()=> validateLakossag(szlovakInput.current.value, szlovakInput.current.name)}
             
              />
            </div>
 
            <div className="mb-3">
             
 
              <div className="row">
                <div className="col-6">
                   <label htmlFor="egyeb" className="form-label">
                Egyebek:
              </label>
                </div>
                <div className="col-6 text-end">
                  {isEdit.egyeb && !isValid.egyeb && (
                    <span className="text-danger">
                      A lakoksság nem lehet kisebb mint 0
                    </span>
                  )}
                </div>
              </div>
              <input
                ref={egyebInput}
                className="form-control"
                type="number"
                id="egyeb"
                name="egyeb"
                onChange={()=> validateLakossag(egyebInput.current.value, egyebInput.current.name)}
                onBlur={()=> validateLakossag(egyebInput.current.value, egyebInput.current.name)}
             
              />
            </div>
 
            <div className="mb-3 text-center">
              <button className="btn btn-primary px-5">
                Felvétel
              </button>
            </div>
 
            {err != null && (
              <div
                className="alert alert-danger alert-dismissible"
                role="alert"
              >
                <strong>{err}</strong>
                <button
                  onClick={() => {
                    setErr(null);
                  }}
                  type="button"
                  className="btn-close"
                ></button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}