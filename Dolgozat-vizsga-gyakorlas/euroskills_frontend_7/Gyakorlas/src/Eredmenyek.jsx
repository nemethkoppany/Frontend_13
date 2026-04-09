import { useEffect,useState } from "react"

export default function Eredmenyek(){
    const [versenyzok,setVersenyzok] = useState([])
    const [hiba,setHiba] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/versenyzok")
        .then((res)=>{
            if(!res.ok) throw new Error(res.message);
            return res.json()
        })
        .then((data)=>{
            const rendezett = data.sort((a,b)=>{
              const rendezettNev =   a.szakmaNev.localeCompare(b.szakmaNev)
              if(rendezettNev !== 0) return rendezettNev
              return Number(b.pont) - Number(a.pont);
            })
            setVersenyzok(rendezett)
        })
        .catch((err)=>setHiba(err.message))

    },[])
    
    
    return(
        <div>
            <h1>A döntú versenyzői és eredményeik</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Szakam</th>
                            <th>Név</th>
                            <th>Ország</th>
                            <th>Pontszám</th>
                        </tr>
                    </thead>
                    <tbody>
                        {versenyzok.map((v)=>(
                            <tr key={v.id}>
                                <td>{v.szakmaNev}</td>
                                <td>{v.nev}</td>
                                <td>{v.orszagNev}</td>
                                <td>{v.pont}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}