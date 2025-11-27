import { useRef } from "react";
import { felvesz, listaz } from "../data";

export default function UjAuto({ autok, setAutok }) {
  const rendszamRef = useRef();
  const evjaratRef = useRef();
  const fogyasztasRef = useRef();

  function onSave() {
    const ujAuto = {
      rendszam: rendszamRef.current.value,
      evjarat: Number(evjaratRef.current.value),
      fogyasztas: Number(fogyasztasRef.current.value),
    };

    felvesz(ujAuto);
    setAutok(listaz());
  }

  return (
    <section className="uj-auto-section">
      <h2>Új autó felvétele</h2>
      <div className="uj-auto">
        <table>
          <tbody>
            <tr>
              <td className="first-td">Rendszám</td>
              <td className="first-td">
                <input type="text" ref={rendszamRef} />
              </td>
            </tr>

            <tr>
              <td>Évjárat:</td>
              <td>
                <input type="number" min={1900} ref={evjaratRef} />
              </td>
            </tr>

            <tr>
              <td>Fogyasztás</td>
              <td>
                <input type="number" step={0.1} ref={fogyasztasRef} />
              </td>
            </tr>

            <tr>
              <td colSpan={2}>
                <button onClick={onSave}>Mentés</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
