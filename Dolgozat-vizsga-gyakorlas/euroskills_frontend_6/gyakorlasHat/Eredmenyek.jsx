import { useState, useEffect } from "react";

export default function Eredmenyek() {
  const [eredmenyek, setEredmenyek] = useState([]);
  const [hiba, setHiba] = useState(null);
  const token = localStorage.getItem("token")

  useEffect(() => {
    fetch("http://localhost:3000/versenyzok")
      .then((res) => {
        if (!res.ok) throw new Error(`Hiba: ${res.message}`);
        return res.json();
      })
      .then((data) => {
        const rendezett = data.sort((a, b) => {
          const szakmaOsszehasonlitas = a.szakmaNev.localeCompare(b.szakmaNev);
          if (szakmaOsszehasonlitas !== 0) return szakmaOsszehasonlitas;
          return Number(b.pont) - Number(a.pont);
        });
        setEredmenyek(rendezett);
      })
      .catch((err) => setHiba(err.message));
  }, []);

  function handleDelete(id){
    fetch(`http://localhost:3000/versenyzok/${id}`,{
      method:"DELETE",
      headers:{ Authorization: `Bearer ${token}`}
    })
    .then((res)=>{
      if(!res.ok) throw new Error(res.message);
      setEredmenyek(eredmenyek.filter((v)=>v.id !== id))
    })
    .catch((err)=>{err.message})
  }
  return (
    <div>
      <h1>A döntő versenyzői ás eredményeik</h1>
      <table>
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
            {eredmenyek.map((v)=>(
                <tr key={v.id}>
                    <td>{v.szakmaNev}</td>
                    <td>{v.nev}</td>
                    <td>{v.orszagNev}</td>
                    <td>{v.pont}</td>
                    {token && <td><button className="btn btn-danger btn-sm" onClick={()=>{handleDelete(v.id)}}>Törlés</button></td>}
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
