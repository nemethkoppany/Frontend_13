import { useState } from "react"
import { useEffect } from "react"


export default function Eredemenyek(){
    const [eredmenyek, setEredmenyek] = useState([]);
    const [err, setErr] = useState(null);

useEffect(()=>{
     async function getversenyzok(){
        try{
            const response = await fetch("http://localhost:3000/versenyzok")

            if(response.ok){
                console.log("ok")
            }

            const resData = await response.json();

            const rendezett = resData.sort((a,b)=>{
                const munka = a.szakmaNev.localeCompare(b.szakmaNev)
                if(munka !== 0) return munka
                return Number(b.pont) - Number(a.pont)
            })
            setEredmenyek(rendezett);
        }
        catch(err){
            setErr(err.message)
        }
    }
    getversenyzok();
},[])

      if(err){
            return <p className="text-danger">Hiba történt: {err}</p>
        }
    
    return(
        <>
        <header>A döntő cersenyzői és eredményeik</header>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Szakma</th>
                    <th>Név</th>
                    <th>Ország</th>
                    <th>Pontszám</th>
                </tr>
            </thead>
            <tbody>
                {
                    eredmenyek.length > 0  && 
                    eredmenyek.map((eredmeny)=>(
                        <tr>
                            <td>{eredmeny.szakmaNev}</td>
                            <td>{eredmeny.nev}</td>
                            <td>{eredmeny.orszagNev}</td>
                            <td>{eredmeny.pont}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    
    </>
    )
}