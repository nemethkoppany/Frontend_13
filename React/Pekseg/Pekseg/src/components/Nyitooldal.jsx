import { Link } from "react-router-dom";
import kep from "../assets/indexkep.jpg"

export default function Nyitooldal(){
    return(
        <div>
           <header>Pékség</header>
           <section>
            <p>
                A pékség olyan létesítmény, amely kemencében sült lisztalapú ételeket, például kenyeret, kekszeket, süteményeket, fánkot, péksüteményeket és pitéket állít elő és értékesít.
            </p>
            <p>Vedd fel velünk még ma a kapcsolatot elérhetőségeink egyikén, vagy ugorj be reggeli-, ebéd-, vagy vacsoraidőben finomságainkért! </p>
           <h2>
            Nyitvatartás:
           </h2>
           <p>
            Hétfő-Péntek: 07:00- 17:00
Szombat: 08:00-14:00
Vasárnap: 08:00-14:00
           </p>

           </section>
           <section>
            <div className="col-12 col-lg-6">
                <img src={kep} alt="Pékség" />
            </div>
           </section>
           <section>
             <div className="row">
          <div className="col-12 col-md-6 mb-1">
            <Link to="/termekek" className="btn btn-info">
              Termékeink
            </Link>
          </div>
          <div className="col-12 col-md-6 mb-1">
            <Link to="/ujtermek" className=" btn btn-warning">
              Új termék felvétele
            </Link>
          </div>
        </div>
           </section>
        </div>
    )
}