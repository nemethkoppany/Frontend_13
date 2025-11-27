import {lekerdez, beszur} from "../data"
import Allatok from "./allatok";


export default function UjAllat({ setAllatok}){
    function onSave(){
        const fajta = document.getElementById("fajta").value;
        const taplalkozas = document.getElementById("taplalkozas").value;
        const eletkor = document.getElementById("eletkor").value*1;

        const ujAllat = {
            fajta:fajta,
            taplalkozas:taplalkozas,
            eletkor:eletkor
        }

        beszur(ujAllat);
        setAllatok(lekerdez())
    }

    return(
        <section className="uj-allatok-section">
            <div className="uj-allat">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p>Fajta</p>
                                <input type="text" name="fajta" id="fajta"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Táplálkozás</p>
                                <input type="text" name="taplalkozas" id="taplalkozas"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Életkor</p>
                                <input type="number" name="eletkor" id="eletkor"/>
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