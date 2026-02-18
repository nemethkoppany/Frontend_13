import { useState } from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

export default function Versenyzok(){
    const versenyzok = useLoaderData();
    const [racers, setRacers] = useState(versenyzok);
    const user = useRouteLoaderData("root");
    
    console.log(versenyzok);
    async function handleTorles(id){
         
        try{
            const response = await fetch(`http://localhost:3000/versenyzok/${id}`,{
                method: "DELETE",
                headers:{
                    "Authorization": `Bearer ${user}`
                }
            });

            if(response.ok){
                setRacers(prev => prev.filter(versenyzo => versenyzo.id !== id))
            }

            return await response.json();
        }
        catch(err){
            throw new Error("Hiba a versenyző törlése közben!");
        }
    }
    return(
        <>
            <main>
                <header className="text-center">
                    <h1>A döntő versenyző és eredményeik</h1>
                </header>
                <section>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Név</th>
                                <th>Ország</th>
                                <th>Szakma</th>
                                <th>Pontszám</th>
                                {user && (<th>Törlés</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {racers.map(versenyzo => 
                                <tr key={versenyzo.id}>
                                    <td>{versenyzo.nev}</td>
                                    <td>{versenyzo.orszagNev}</td>
                                    <td>{versenyzo.szakmaNev}</td>
                                    <td>{versenyzo.pont}</td>
                                    {user && (<td><button className="btn btn-danger" onClick={() => handleTorles(versenyzo.id)}>Törlés</button></td>)}
                                </tr>
                            )}
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    );
};