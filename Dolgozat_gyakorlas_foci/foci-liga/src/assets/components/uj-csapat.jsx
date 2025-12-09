import { felvesz, listaz } from "../../data";
import Csapatok from "./csapatok";

export default function UjCsapat({setCsapatok}){
    
    function onSave(){
        const nev = document.getElementById("nev").value;
        const varos = document.getElementById("varos").value;
        const alapitasEve = document.getElementById("alapitasEve").value*1;

        const ujCsapat = {
            nev: nev,
            varos: varos,
            alapitasEve: alapitasEve
        }

        felvesz(ujCsapat);
        setCsapatok(listaz());
    }

    return(
        <section>
            <h2>Új csapat felvétele</h2>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Név</td>
                            <td>
                                <input type="text" name="nev" id="nev" />
                            </td>
                        </tr>
                         <tr>
                            <td>Város</td>
                            <td>
                                <input type="text" name="varos" id="varos" />
                            </td>
                        </tr>
                         <tr>
                            <td>Alapítás Éve</td>
                            <td>
                                <input type="number" name="alapitasEve" id="alapitasEve" />
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
    )
}