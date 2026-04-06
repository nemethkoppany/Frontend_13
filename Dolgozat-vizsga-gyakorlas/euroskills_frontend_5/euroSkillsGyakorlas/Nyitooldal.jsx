import { Link } from "react-router-dom";
import kep from "../forrasok/nyitokep.webp"
import { useState } from "react";

export default function Nyitooldal() {
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  function handleKijelentkezes() {
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <div className="container my-4">
      <div className="border p-4">

        <h1 className="text-center fw-bold">EuroSkills Budapest 2018</h1>

        <p className="text-center">
          Ünnepélyes záró ceremónia keretében hirdették ki a EuroSkills Budapest
          2018 győzteseit a Papp László Budapest Sportarénában 2018. szeptember
          29-én. Magyar versenyző 27 szakmában indult, ebből 17
          versenyszakmákban értek el helyezést. Hazánk ismét bebizonyította,
          hogy a magyar fiatalok nem maradnak el szaktudásban és tehetségben
          európai társaiktól.
        </p>

        <p>
          A magyar szakemberek ismét bizonyították, hogy tudásuk és szakértelmük
          kiemelkedő az európai mezőnyben is: 3 arany, 3 ezüst, 3 bronz és 8
          kiválósági érmet nyertek, összesen 17 helyezést. A EuroSkills Budapest
          2018 Nemzet Legjobbja kitüntetést Nagy Ádám János tudhatja magáénak.
        </p>

        <h2 className="text-center">Eredmények</h2>

        <div className="row">
          <div className="col-12 col-md-6">
            <img src={kep} alt="EuroSkills Budapest 2018" className="img-fluid" />
          </div>

          <div className="col-12 col-md-6">
            <h5 className="fw-bold">Aranyérem és a nemzet legjobbja:</h5>
            <ul>
              <li>Nagy Ádám János, épületasztalos</li>
            </ul>

            <h5 className="fw-bold">Aranyérem:</h5>
            <ul>
              <li>Simon Krisztián, bútorasztalos</li>
              <li>Sipos Kristóf Balázs, mechatronika (csapat)</li>
              <li>Takács Zoltán, mechatronika (csapat)</li>
            </ul>

            <h5 className="fw-bold">Ezüstérem:</h5>
            <ul>
              <li>Hasza Attila, autószerelő</li>
              <li>Varholik Dávid, ápolás és gondozás</li>
              <li>Cseke Szabolcs, festő, díszítőfestő</li>
              <li>Balogh Ákos, webfejlesztő</li>
            </ul>

            <h5 className="fw-bold">Bronzérem:</h5>
            <ul>
              <li>Zaja Dániel, hegesztő</li>
              <li>Balogh Krisztián, kőfaragó</li>
              <li>Takács Dániel, virágkötő</li>
            </ul>
          </div>
        </div>

        <p className="text-center fw-bold mt-3">
          Szívből gratulálunk minden résztvevőnek az elhivatott munkájához és a
          kiemelkedő eredményekhez!
        </p>

        <div className="d-flex justify-content-between mt-3">
          <Link className="btn btn-primary" to="/eredmenyek">
            További eredmények
          </Link>

          {token ? (
            <button className="btn btn-success" onClick={handleKijelentkezes}>
              Kijelentkezés
            </button>
          ) : (
            <Link className="btn btn-success" to="/login">
              Bejelentkezés
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}