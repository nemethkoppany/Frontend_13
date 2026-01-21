import { useEffect, useState } from "react";

export default function Termekek() {
  const [termekek, setTermekek] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    async function getTermekek() {
      try {
        const response = await fetch("http://localhost:5000/termekek");
        const resData = await response.json();
        const rendezes = resData.sort((a, b) => {
          a.megnevezes.localeCompare(b.megnevezes);
        });
        setTermekek(rendezes);
        if (response.ok) {
          console.log("ok");
        } else {
          throw new Error(
            `Hibakód: ${response.status}, Hibaüzenet: ${response.statusText}`,
          );
        }
      } catch (err) {
        setErr(`Hiba a termékek lekérdezése közben ${err.message}`);
      }
    }
    getTermekek();
  }, []);

  return (
    <>
      <header className="text-center m-5">
        <h1>Pékségünk termékei</h1>
      </header>
      <main className="m-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Fénykép</th>
              <th>Megnevezés</th>
              <th>Fajta</th>
              <th>Kiszerelés</th>
              <th>Ízvilág</th>
              <th>Miben mentes</th>
              <th>Allergének</th>
            </tr>
          </thead>
          <tbody>
            {termekek.length > 0 &&
              termekek.map((termek) => (
                <tr key={termek.kepUrl}>
                  <td>
                    <img
                      src={termek.kepUrl}
                      alt={termek.megnevezes}
                      style={{ width: "100px" }}
                    />
                  </td>

                  <td>{termek.megnevezes}</td>
                  <td>{termek.fajta}</td>
                  <td>{termek.kiszereles}</td>
                  <td>{termek.iz}</td>
                  <td>{termek.mentes}</td>
                  <td>{termek.allergenek}</td>
                </tr>
              ))}
          </tbody>
        </table>
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
      </main>
    </>
  );
}
