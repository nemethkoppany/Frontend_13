import { listaz, torol } from "../data";
import Kartya from "./kartya";

export default function Kartyak({kartya, setKartyak}){
    function deleteKartya(kartyaszam){
        torol(kartyaszam);
        setKartyak(listaz());
    }
    
    return(
        <section className="kartyak-section">
            <p>Kártyák listája</p>

            <div className="kartyak">
                {kartya.map((kartya)=>(
                    <Kartya
                     {...kartya}
                     key={kartya.kartyaszam}
                     onDelete={()=>deleteKartya(kartya.kartyaszam)}
                     ></Kartya>
                ))}
            </div>
        </section>
    )
}