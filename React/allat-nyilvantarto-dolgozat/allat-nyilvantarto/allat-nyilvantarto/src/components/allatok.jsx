import {lekerdez, torol} from "../data";
import Allat from "./allat";

export default function Allatok({allatok, setAlltok}){

    function deleteAllat(fajta){
        torol(fajta);
        setAlltok(lekerdez());
    } 

    return(
        <section className="allatok-section">
            <h2>Állatok listája</h2>
            <div className="allatok">
                {allatok.map((allatok)=>(
                    <Allat
                        {...allatok}
                        key={allatok.fajta}
                        onDelete = {()=> deleteAllat(allatok.fajta)}
                    />
                    
                ))}
            </div>
        </section>
    )
}