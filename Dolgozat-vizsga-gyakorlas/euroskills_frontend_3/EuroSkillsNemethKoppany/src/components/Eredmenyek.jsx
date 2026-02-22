import { useState, useEffect, version } from "react"
import { UNSAFE_ErrorResponseImpl } from "react-router-dom";

export default function Eredmenyek(){
    const [eredmenyek, setEredmenyek] = useState([]);

    async function handleDelete(id) {
        try{
            const token = localStorage.getItem("token");

            const response = await fetch(`http://localhost:3000/versenyzok/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            if(response.status !== 204){
                throw new Error("Nem sikerült");
            }

            setEredmenyek((prev)=> prev.filter((v) => v.id !== id))
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        async function getversenyzok() {
           try{
             const response = await fetch("http://localhost:3000/versenyzok")

            if(response.ok){
                console.log("ok");
            }
            

            const resData = await response.json()
            const rendezett = resData.sort((a,b)=>{
                const szakma = a.szakmaNev.localeCompare(b.szakmaNev)
                if(szakma != 0) return szakma
                return Number(b.pont) - Number(a.pont)
            })
            setEredmenyek(rendezett);
           }
           catch(err){
            console.log(err);
           }
        }
        getversenyzok();
    },[])
    
    return(
        <>
        <header>A döntő cersenyzői és eredményeik</header>
        <table>
            <thead>
                <tr>
                    <th>Szakma</th>
                    <th>Név</th>
                    <th>Ország</th>
                    <th>Pontszám</th>
                    <th>Törlés</th>
                </tr>
            </thead>
            <tbody>
                {eredmenyek.length > 0 && 
                eredmenyek.map((eredmeny)=>(
                    <tr key={eredmeny.id}>
  <td>{eredmeny.szakmaNev}</td>
                    <td>{eredmeny.nev}</td>
                    <td>{eredmeny.orszagNev}</td>
                    <td>{eredmeny.pont}</td>
                    <td>{localStorage.getItem("token") &&(
                        <button className="btn btn-danger" onClick={()=>handleDelete(eredmeny.id)}>Törlés</button>
                    )}</td>
                    </tr>
                  
                ))}
            </tbody>
        </table>
        </>
    )
}