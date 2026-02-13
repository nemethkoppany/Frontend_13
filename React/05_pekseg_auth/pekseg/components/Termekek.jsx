import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Termekek({ isAuthenticated }){

    const [termekek, setTermekek] = useState([]);
    const [err, setErr] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        async function getTermekek() {
            try{
                const response = await fetch("http://localhost:3000/termekek")
                const resData = await response.json();
                const rendezett = resData.sort((a,b)=>{
                    return a.megnevezes.localeCompare(b.megnevezes)
                })
                setTermekek(rendezett);
                if(response.ok){
                    console.log("ok")
                }
            }
            catch(err){
                console.log("Valami nem jó")
            }
            
        }
        getTermekek();
    },[])

    async function handleDelete(id) {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setErr("Nincs jogosultsága törléshez. Kérjük, jelentkezzen be!");
                navigate("/login");
                return;
            }

            const response = await fetch(`http://localhost:3000/termekek/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Hiba a termék törlése során");
            }

            setTermekek(termekek.filter(t => t.id !== id));
        } catch (err) {
            setErr(err.message);
        }
    }

    return(
        <div>
            <header>
                <h1>Pékségünk termékei</h1>
            </header>
            {err && <div style={{ color: "red", marginBottom: "10px" }}>{err}</div>}
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>Fénykép</th>
                            <th>Megnevezés</th>
                            <th>Fajta</th>
                            <th>Kiszerelés</th>
                            <th>Ízvilág</th>
                            <th>Miben mentes</th>
                            <th>Allergének</th>
                            {isAuthenticated && <th>Műveletek</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            termekek.length>0 && 
                            termekek.map((termek)=>(
                                <tr key={termek.megnevezes}>
                                    <td> <img src={termek.kepUrl} alt="" /> </td>
                                    <td>{termek.megnevezes}</td>
                                    <td>{termek.fajta}</td>
                                    <td>{termek.kiszereles}</td>
                                    <td>{termek.iz}</td>
                                    <td>{termek.mentes}</td>
                                    <td>{termek.allergenek}</td>
                                    {isAuthenticated && (
                                        <td>
                                            <button 
                                                onClick={() => handleDelete(termek.id)}
                                                className="btn btn-danger btn-sm"
                                            >
                                                Törlés
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </main>
        </div>
    )
}