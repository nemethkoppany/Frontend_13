import { useRef, useState } from "react";
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

  async function onSave() {
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

  return (
    <div className="container">
      <h2 className="my-4 text-center">Új mérés regisztrálása</h2>
      <div className="row">
        <div className="offset-lg-3 offset-md-2 col-lg-6 col-md-8 col-12">
          <div className="mb-3">
            <label htmlFor="nev"> Évszám </label>
            <input
              ref={evszamInput}
              type="date"
              className="form-control"
              name="erkezes"
              defaultValue={datum}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="nemet"> Magyarok: </label>
            <input
              ref={magyarInput}
              className="form-control"
              type="text"
              id="magyar"
              name="magyar"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="nemet" className="form-label">
              Németek:
            </label>
            <input
              ref={nemetInput}
              type="text"
              className="form-control"
              name="nemet"
              id="nemet"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="szlovak"> Szlovákok </label>
            <input
              ref={szlovakInput}
              className="form-control"
              type="text"
              id="szlovak"
              name="szlovak"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="egyeb" className="form-label">
              Egyebek:
            </label>
            <input
              ref={egyebInput}
              className="form-control"
              type="text"
              id="egyeb"
              name="egyeb"
            />
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
