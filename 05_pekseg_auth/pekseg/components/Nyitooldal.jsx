import kep from "../../forrás/indexkep.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function Nyitooldal({ isAuthenticated, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div>
      <h2>Pékség</h2>
      <div className="row">
        <div className="col-6">
          <section >
            <p>
              A pékség olyan létesítmény, amely kemencében sült lisztalapú
              ételeket, például kenyeret, kekszeket, süteményeket, fánkot,
              péksüteményeket és pitéket állít elő és értékesít.
            </p>
            <p>
              Vedd fel velünk még ma a kapcsolatot elérhetőségeink egyikén, vagy
              ugorj be reggeli-, ebéd-, vagy vacsoraidőben finomságainkért!
            </p>
          </section>
          <section>
            <h2>Nyitvatartás: </h2>
            <p>
              Hétfő-Péntek: 07:00- 17:00 <br />
              Szombat: 08:00-14:00 <br />
              Vasárnap: 08:00-14:00
            </p>
          </section>
        </div>

        <img className="col-6" src={kep} alt="" />
      </div>
      <div className="row">
        <Link  to="/termekek" className="btn btn-warning col-6">
          Termékek
        </Link>
        {isAuthenticated ? (
          <button onClick={handleLogout} className="btn btn-danger ">
            Kijelentkezés
          </button>
        ) : (
          <Link to="/login" className="btn btn-success col-6">
            Bejelentkezés
          </Link>
        )}
      </div>
    </div>
  );
}
