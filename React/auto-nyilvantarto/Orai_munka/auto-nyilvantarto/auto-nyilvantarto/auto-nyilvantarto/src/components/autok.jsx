import { listaz, torol } from "../data";
import Auto from "./auto";

export default function Autok({ autok, setAutok }) {
  function deleteAuto(rendszam) {
    torol(rendszam);
    setAutok(listaz());
  }

  return (
    <section className="autok-section">
      <h2>Autok listája</h2>
      <div className="autok">
        {autok.map((auto) => (
          <Auto
            {...auto}
            key={auto.rendszam}
            onDelete={() => deleteAuto(auto.rendszam)}
          />
        ))}
      </div>
    </section>
  );
}
