import { useEffect, useState } from "react";

export default function Versenyzok() {
  const [versenyzo, setVersenyzok] = useState([]);
  const [err, setErr] = useState(null);

  async function handleDelete(id) {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`http://localhost:3000/versenyzok/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status !== 204) {
        throw new Error("Nem sikerült törölni!");
      }

      setVersenyzok((prev) => prev.filter((v) => v.id !== id));
    } catch (err) {
      setErr(err.message);
    }
  }

  useEffect(() => {
    async function getVersenyzok() {
      try {
        const response = await fetch("http://localhost:3000/versenyzok");

        if (!response.ok) {
          throw new Error(
            `Hibakód: ${response.status}, ${response.statusText}`,
          );
        }

        const resData = await response.json();

        const rendezett = resData.sort((a, b) => {
          const szakma = a.szakmaNev.localeCompare(b.szakmaNev);
          if (szakma !== 0) return szakma;
          return Number(b.pont) - Number(a.pont);
        });

        setVersenyzok(rendezett);
      } catch (err) {
        setErr(err.message);
      }
    }

    getVersenyzok();
  }, []);

  return (
    <>
      <header>
        <h1>A döntő versenyzői és eredményeik</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Szakma</th>
            <th>Név</th>
            <th>Ország</th>
            <th>Pontszám</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          {versenyzo.length > 0 &&
            versenyzo.map((verseny) => (
              <tr key={verseny.id}>
                <td>{verseny.szakmaNev}</td>
                <td>{verseny.nev}</td>
                <td>{verseny.orszagNev}</td>
                <td>{verseny.pont}</td>
                <td>
                  {localStorage.getItem("token") && (
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(verseny.id)}
                    >
                      Törlés
                    </button>
                  )}
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
    </>
  );
}
