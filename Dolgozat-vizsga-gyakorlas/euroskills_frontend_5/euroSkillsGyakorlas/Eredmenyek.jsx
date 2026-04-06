import { useEffect,useState } from "react"
import { Link } from "react-router"

export default function Eredmenyek(){
    const [versenyzok,SetVersenyzok] = useState([]);
    const [hiba, setHiba] = useState(null);
    const token = localStorage.getItem("token");

    useEffect(()=>{
        fetch("http://localhost:3000/versenyzok")
        .then((res)=>{
            if(!res.ok) throw new Error(`Hiba: ${res.status}`)
            return res.json();
        })
        .then((data)=>{
            const rendezett = data.sort((a,b)=>{
                const szakmaOsszehasonlitas = a.szakmaNev.localeCompare(b.szakmaNev,"hu")
                if(szakmaOsszehasonlitas !== 0) return szakmaOsszehasonlitas;
                return Number(b.pont) - Number(a.pont);
            })
            SetVersenyzok(rendezett);
        })
        .catch((err)=>setHiba(err.message));
    },[])
    
    function handleDelete(id){
        fetch(`http://localhost:3000/versenyzok/${id}`,{
            method:"DELETE",
            headers:{Authorization:`Bearer ${token}`}
        })
        .then((res)=>{
            if (res.status !== 204) throw new Error(`Hiba: ${res.status}`);
            SetVersenyzok(versenyzok.filter((v)=>v.id !== id))
        })
        .catch((err)=>setHiba(err.message));
    }



     return (
    <div className="container my-4">
      <div className="border p-4">
        <h2 className="text-center fw-bold mb-4">A döntő versenyzői és eredményeik</h2>

        {hiba && (
          <div className="alert alert-danger">
            <strong>Hiba történt:</strong> {hiba}
          </div>
        )}

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Szakma</th>
              <th>Név</th>
              <th>Ország</th>
              <th>Pontszám</th>
              {token && <th>Törlés</th>}
            </tr>
          </thead>
          <tbody>
            {versenyzok.map((v) => (
              <tr key={v.id}>
                <td>{v.szakmaNev}</td>
                <td>{v.nev}</td>
                <td>{v.orszagNev}</td>
                <td>{v.pont}</td>
                {token &&(
                    <td>
                        <button className="btn btn-danger btn-sm" onClick={()=>handleDelete(v.id)}>Törlés</button>
                    </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <Link className="btn btn-secondary" to="/">Vissza a főoldalra</Link>
      </div>
    </div>
  );
}