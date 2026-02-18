import { useState, useEffect } from "react";

export default function Eredmenyek() {
  const [versenyzok, setVersenyzok] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    async function getVersenyzok() {
      try {
        const response = await fetch("http://localhost:3000/versenyzok");

        if (!response.ok) {
          throw new Error(`Hibakód: ${response.status} ${response.statusText}`);
        }

        const resData = await response.json();
        const rendezett = resData.sort((a, b) => {
          const szakma = a.szakmaNev.localeCompare(b.szakmaNev);
          if (szakma != 0) return szakma;
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
        <h1>
        A döntő versenyzői és eredményeik
        </h1>
        </header>
      <table>
        <thead>
          <tr>
            <th>Szakma</th>
            <th>Név</th>
            <th>Ország</th>
            <th>Pontszám</th>
          </tr>
        </thead>
        <tbody>
          {versenyzok.length > 0 &&
            versenyzok.map((versenyzo) => (
              <tr key={versenyzo.id}>
                <td>{versenyzo.szakmaNev}</td>
                <td>{versenyzo.nev}</td>
                <td>{versenyzo.orszagNev}</td>
                <td>{versenyzo.pont}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
