import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Ujallat() {
  const navigate = useNavigate();

  const [gondozok, setGondozok] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    async function getGondozok() {
      try {
        const response = await fetch("http://localhost:5000/gondozok");
        const resData = await response.json();
        
        if (response.ok) {
          console.log("ok");
          setGondozok(resData);
        } else {
          throw new Error(
            `Hibakód: ${response.status}, Hibaüzenet: ${response.statusText}`
          );
        }
      } catch (err) {
        setErr(`Hiba a gondozók lekérése közben ${err.message}`);
      }
    }
    getGondozok();
  }, []);

  const datum = new Date().toISOString().substring(0, 10);
  //console.log(datum);

  const nevInput = useRef("");
  const fajInput = useRef("");
  const erkezesInput = useRef("");
  const helyeInput = useRef("");
  const gondozoInput = useRef("");

  async function onSave() {
    const ujAllat = {
      nev: nevInput.current.value,
      faj: fajInput.current.value,
      erkezes: erkezesInput.current.value,
      helye: helyeInput.current.value,
      gondozo: gondozoInput.current.value,
    };

    try {
      const response = await fetch("http://localhost:5000/ujallat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ujAllat),
      });

      if (response.ok) {
        navigate("/allataink");
      } else {
        throw new Error(
          `Hibakód: ${response.status}, Hibaüzenet: ${response.statusText}`
        );
      }
      //console.log(response);
    } catch (err) {
      setErr(`Hiba az új állat felvétele közben ${err.message}`);
    }
  }

  return (
    <div className="container">
      <h2 className="my-4 text-center">Új állat regisztrálása</h2>
      <div className="row">
        <div className="offset-lg-3 offset-md-2 col-lg-6 col-md-8 col-12">
          <div className="mb-3">
            <label htmlFor="nev"> Új állat neve </label>
            <input
              ref={nevInput}
              className="form-control"
              type="text"
              id="nev"
              name="nev"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="faj"> Faja az állatnak </label>
            <input
              ref={fajInput}
              className="form-control"
              type="text"
              id="faj"
              name="faj"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Érkezés dátuma
            </label>
            <input
              ref={erkezesInput}
              type="date"
              className="form-control"
              name="erkezes"
              defaultValue={datum}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="helye"> Helye az állatkertben </label>
            <input
              ref={helyeInput}
              className="form-control"
              type="text"
              id="helye"
              name="helye"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="gondozo" className="form-label">
              Gondozója
            </label>
            <select
              ref={gondozoInput}
              className="form-control"
              name="gondozo"
              id="gondozo"
            >
              <option disabled>Kérem válasszon</option>
              {gondozok.map((gondozo) => (
                <option key={gondozo.nev}>{gondozo.nev}</option>
              ))}
            </select>
          </div>

          <div className="mb-3 text-center">
            <button onClick={onSave} className="btn btn-primary px-5">
              Felvétel
            </button>
          </div>

          {err != null && (
            <div className="alert alert-danger alert-dismissible" role="alert">
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
        </div>
      </div>
    </div>
  );
}
