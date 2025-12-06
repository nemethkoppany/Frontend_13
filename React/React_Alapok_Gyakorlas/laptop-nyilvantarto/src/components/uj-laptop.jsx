import { felvesz, listaz } from "../data";

export default function UjLaptop({setLaptopok}){
    function onSave(){
        const serial = document.getElementById("serial").value*1
        const model = document.getElementById("model").value
        const ram = document.getElementById("ram").value*1

        const ujLaptop={
            serial: serial,
            model: model,
            ram: ram
        }
        felvesz(ujLaptop)
        setLaptopok(listaz());
    }
    
    return(
        <section className="uj-laptop-section">
            <h2>Laptopok felvétele</h2>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Serial
                            </td>
                            <td>
                                <input type="number" name="serial" id="serial" />
                            </td>
                        </tr>
                         <tr>
                            <td>
                                Model
                            </td>
                            <td>
                                <input type="text" name="model" id="model" />
                            </td>
                        </tr>
                         <tr>
                            <td>
                                RAM
                            </td>
                            <td>
                                <input type="number" name="ram" id="ram" />
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