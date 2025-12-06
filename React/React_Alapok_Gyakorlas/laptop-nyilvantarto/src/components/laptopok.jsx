import Laptop from "./laptop";
import { listaz, torol } from "../data";

export default function Laptopok({laptopok,setLaptopok}){
    
    function deleteLaptop(serial){
        torol(serial);
        setLaptopok(listaz());
    }

    return(
        <section className="laptopok-section">
            <h2>Laptopok listája</h2>
            <div className="laptopok">
                {laptopok.map((laptop)=>(
                    <Laptop
                    {...laptop}
                    key={laptop.serial}
                    onDelete={()=>deleteLaptop(laptop.serial)}
                    ></Laptop>
                ))}
            </div>
        </section>
    )
}