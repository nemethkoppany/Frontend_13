import { felvesz, listaz } from "../data";
import Kartyak from "./kartyak";


export default function UjKartya({setKartyak}){
    function onSave(){
        const kartyaszam = document.getElementById("kartyaszam").value*1;
        const lejarat = document.getElementById("lejarat").value*1;
        const ccv = document.getElementById("ccv").value*1;
        const tulajdonos = document.getElementById("tulajdonos").value;
   
        const ujKartya ={
            kartyaszam: kartyaszam,
            lejarat: lejarat,
            ccv: ccv,
            tulajdonos_neve: tulajdonos
        }

        felvesz(ujKartya);
        setKartyak(listaz);
    }


    return(
        <section className="uj-kartyak-section">
            <p>Új kártya felvétele</p>

            <div className="uj-kartya">
                <table>
                    <tbody>
                        <tr>
                            <td>Kártyaszám</td>
                            <td><input type="number" name="kartyaszam" id="kartyaszam" /></td>
                        </tr>
                           <tr>
                            <td>Lejárat</td>
                            <td><input type="number" name="lejarat" id="lejarat" /></td>
                        </tr>
                           <tr>
                            <td>CCV</td>
                            <td><input type="number" name="ccv" id="ccv" /></td>
                        </tr>
                           <tr>
                            <td>Tulajdonos neve</td>
                            <td><input type="text" name="tulajdonos" id="tulajdonos" /></td>
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