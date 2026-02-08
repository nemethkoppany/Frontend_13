import { useEffect, useState } from "react";

export default function Meresek() {
  const [meresek, setMeresek] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    async function getMeresek() {
      try {
        const response = await fetch("http://localhost:5000/meresek");
        const resData = await response.json();
        const rendezett = resData.sort((a, b) => b.evszam - a.evszam);
        setMeresek(rendezett);
        if (response.ok) {
          console.log("ok");
        } else {
          throw new Error(
            `Hibakód: ${response.status}, Hibaüzenet: ${response.statusText}`
          );
        }
      } catch (err) {
        setErr(`Hiba a mérések megjelenítése közben ${err.message}`);
      }
    }
    getMeresek();
  }, []);
  async function torles(evszam) {
    try {
      const res = await fetch("http://localhost:5000/meresek", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ evszam }),
      });
      if (res.ok) {
        console.log("ok");
      } else {
        throw new Error(
          `Hibakód: ${res.status}, Hibaüzenet: ${res.statusText}`
        );
      }
      setMeresek((prev) => prev.filter((r) => r.evszam !== evszam));
    } catch (err) {
      setErr(`Hiba a mérések törlése közben ${err.message}`);
    }
  }
  return (
    <>
      <header className="text-center m-5">
        <h1>Állatkertünk jelenlegi lakó</h1>
      </header>
      <main className="m-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Évszám </th>
              <th>Magyar</th>
              <th>Német</th>
              <th>Szlovák</th>
              <th>Egyéb</th>
              <th>Törlés</th>
            </tr>
          </thead>
          <tbody>
            {meresek.length > 0 &&
              meresek.map((meres) => (
                <tr key={meres.evszam}>
                  <td>{meres.evszam}</td>
                  <td>{meres.magyar}</td>
                  <td>{meres.nemet}</td>
                  <td>{meres.szlovak}</td>
                  <td>{meres.egyeb}</td>
                  <td>
                    <button onClick={() => torles(meres.evszam)}>Törlés</button>
                  </td>
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
