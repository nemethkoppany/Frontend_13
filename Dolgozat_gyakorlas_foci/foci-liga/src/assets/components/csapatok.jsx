import { listaz, torol } from "../../data";
import Csapat from "./csapat";

export default function Csapatok({csapatok, setCsapatok}){
    function deleteCsapatok(nev){
        torol(nev);
        setCsapatok(listaz());
    }
    return(
        <section>
            <h2>Csapatok listája</h2>
            <div>
               {csapatok.map((csapat)=>(
                <Csapat
                {...csapat}
                key={csapat.nev}
                onDelete={()=>deleteCsapatok(csapat.nev)}
                ></Csapat>
               ))}
            </div>
        </section>
    )
}