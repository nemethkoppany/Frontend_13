import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UjTermek() {
  const navigate = useNavigate();

  const [termekek, setTermekek] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    async function getTermekek() {
      try {
        const response = await fetch("http://localhost:5000/termekfajtak");
        const resData = await response.json();

        if (response.ok) {
          console.log("ok");
          console.log(resData);
          setTermekek(resData);
        } else {
          throw new Error(
            `Hibakód: ${response.status}, Hibaüzenet: ${response.statusText}`,
          );
        }
      } catch (err) {
        setErr(`Hiba a gondozók lekérése közben ${err.message}`);
      }
    }
    getTermekek();
  }, []);

  const datum = new Date().toISOString().substring(0, 10);
  //console.log(datum);

  const termekInput = useRef("");
  const kiszerelesInput = useRef("");
  const allergenekInput = useRef("");
  const mentesInput = useRef("");
  const kepUrlInput = useRef("");
  const izInput = useRef("");
  const fajtaInput = useRef("");

  const [isValid, setIsvalid] = useState({
    megnevezes: false,
    kiszereles: false,
    allergenek: false,
    mentes: false,
    kepUrl: false,
    iz: false,
    fajta: false,
  });

  const [isEdit, setIsEdit] = useState({
    megnevezes: false,
    kiszereles: false,
    allergenek: false,
    mentes: false,
    kepUrl: false,
    iz: false,
    fajta: false,
  });

  function validateField(value, inputName) {
    const valid = value.trim() !== "";

    setIsvalid((prev) => ({
      ...prev,
      [inputName]: valid,
    }));

    setIsEdit((prev) => ({
      ...prev,
      [inputName]: true,
    }));
  }

  async function onSave(event) {
    event.preventDefault();
    const ujTermek = {
      megnevezes: termekInput.current.value,
      kiszereles: kiszerelesInput.current.value,
      allergenek: allergenekInput.current.value,
      mentes: mentesInput.current.value,
      kepUrl: kepUrlInput.current.value,
      iz: izInput.current.value,
      fajta: fajtaInput.current.value,
    };

    try {
      const response = await fetch("http://localhost:5000/termekek", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ujTermek),
      });

      if (response.ok) {
        navigate("/termekek");
      } else {
        throw new Error(
          `Hibakód: ${response.status}, Hibaüzenet: ${response.statusText}`,
        );
      }
      //console.log(response);
    } catch (err) {
      setErr(`Hiba az új állat felvétele közben ${err.message}`);
    }
  }
  return (
    <div className="container">
      <h2 className="my-4 text-center">Új termék felvétele</h2>
      <div className="row">
        <div className="col-lg-10 col-md-10 col-12 mx-auto">
          <form onSubmit={onSave}>
            <div className="mb-3">
              <div className="row">
                <div className="col-6">
                  <label htmlFor="megnevezes"> Új termék megnevezése </label>
                </div>
                <div className="col-6 text-end">
                  {isEdit.megnevezes && !isValid.megnevezes && (
                    <span className="text-danger">
                      Kérem adjon meg egy megnevezést
                    </span>
                  )}
                </div>
              </div>
              <input
                ref={termekInput}
                type="text"
                className="form-control"
                name="termek"
                onChange={() =>
                  validateField(
                    termekInput.current.value,
                    termekInput.current.name,
                  )
                }
                onBlur={() =>
                  validateField(
                    termekInput.current.value,
                    termekInput.current.name,
                  )
                }
              />
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col-6">
                  <label htmlFor="kiszereles">
                    {" "}
                    Termék kiszerelése (+gramm){" "}
                  </label>
                </div>
                <div className="col-6 text-end">
                  {isEdit.kiszereles && !isValid.kiszereles && (
                    <span className="text-danger">Kiszerelés hiba</span>
                  )}
                </div>
              </div>

              <input
                ref={kiszerelesInput}
                className="form-control"
                type="text"
                id="kiszereles"
                name="kiszereles"
                onChange={() =>
                  validateField(
                    kiszerelesInput.current.value,
                    kiszerelesInput.current.name,
                  )
                }
                onBlur={() =>
                  validateField(
                    kiszerelesInput.current.value,
                    kiszerelesInput.current.name,
                  )
                }
              />
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col-6">
                  <label htmlFor="allergenek" className="form-label">
                    Allergének
                  </label>
                </div>
                <div className="col-6 text-end">
                  {isEdit.allergenek && !isValid.allergenek && (
                    <span className="text-danger">Allergének hiba</span>
                  )}
                </div>
              </div>

              <input
                ref={allergenekInput}
                type="text"
                className="form-control"
                name="allergenek"
                id="allergenek"
                onChange={() =>
                  validateField(
                    allergenekInput.current.value,
                    allergenekInput.current.name,
                  )
                }
                onBlur={() =>
                  validateField(
                    allergenekInput.current.value,
                    allergenekInput.current.name,
                  )
                }
              />
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col-6">
                  <label htmlFor="szlovak"> Mentes </label>
                </div>
                <div className="col-6 text-end">
                  {isEdit.mentes && !isValid.mentes && (
                    <span className="text-danger">Mentes hiba</span>
                  )}
                </div>
              </div>

              <input
                ref={mentesInput}
                className="form-control"
                type="text"
                id="mentes"
                name="mentes"
                onChange={() =>
                  validateField(
                    mentesInput.current.value,
                    mentesInput.current.name,
                  )
                }
                onBlur={() =>
                  validateField(
                    mentesInput.current.value,
                    mentesInput.current.name,
                  )
                }
              />
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col-6">
                  <label htmlFor="egyeb" className="form-label">
                    Kép Url-je
                  </label>
                </div>
                <div className="col-6 text-end">
                  {isEdit.kepUrl && !isValid.kepUrl && (
                    <span className="text-danger">Kep Url hiba</span>
                  )}
                </div>
              </div>
              <input
                ref={kepUrlInput}
                className="form-control"
                type="text"
                id="kepUrl"
                name="kepUrl"
                onChange={() =>
                  validateField(
                    kepUrlInput.current.value,
                    kepUrlInput.current.name,
                  )
                }
                onBlur={() =>
                  validateField(
                    kepUrlInput.current.value,
                    kepUrlInput.current.name,
                  )
                }
              />
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col-6">
                  <label htmlFor="iz">Ízvilág</label>
                </div>
                <div className="col-6 text-end">
                  {isEdit.iz && !isValid.iz && (
                    <span className="text-danger">Válasszon egy ízvilágot</span>
                  )}
                </div>
              </div>

              <select
                ref={izInput}
                id="iz"
                name="iz"
                className="form-select"
                defaultValue=""
                onChange={() =>
                  validateField(izInput.current.value, izInput.current.name)
                }
                onBlur={() =>
                  validateField(izInput.current.value, izInput.current.name)
                }
              >
                <option value="">Kérem válasszon</option>
                <option value="Édes">Édes</option>
                <option value="Sós">Sós</option>
                <option value="Semleges">Semleges</option>
              </select>
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col-6">
                  <label htmlFor="fajta">Termék fajtája</label>
                </div>
                <div className="col-6 text-end">
                  {isEdit.fajta && !isValid.fajta && (
                    <span className="text-danger">Válasszon egy fajtát</span>
                  )}
                </div>
              </div>

              <select
                ref={fajtaInput}
                id="fajta"
                name="fajta"
                className="form-select"
                defaultValue=""
                onChange={() =>
                  validateField(
                    fajtaInput.current.value,
                    fajtaInput.current.name,
                  )
                }
                onBlur={() =>
                  validateField(
                    fajtaInput.current.value,
                    fajtaInput.current.name,
                  )
                }
              >
                <option value="">Kérem válasszon</option>

                {termekek.map((fajta) => (
                  <option key={fajta.id} value={fajta.termekFajta}>
                    {fajta.termekFajta}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3 text-center">
              <button className="btn btn-primary px-5">Felvétel</button>
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
