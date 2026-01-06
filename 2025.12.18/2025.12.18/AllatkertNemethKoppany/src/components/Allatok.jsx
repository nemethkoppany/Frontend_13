import { useEffect, useState } from "react";

export default function Allatok() {
  
    const [allatok, setAllatok] = useState([]);

    useEffect(()=>{
        async function getAllatok() {
            const response = await fetch("http://localhost:5000/allatok");
            const resData = await response.json();
            const rendezett = resData.sort((a,b) => a.gondozo > b.gondozo? 1:-1);
            setAllatok(rendezett);
        }
        getAllatok();
    },[]);


    return (
    <>
      <header className="text-center m-5">
        <h1>Állatkertünk jelenlegi lakó</h1>
      </header>
      <main className="m-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Állat neve</th>
              <th>Faj</th>
              <th>Gondozója</th>
              <th>Helye az állatkertben</th>
              <th>Érkezése</th>
            </tr>
          </thead>
          <tbody>
            {
                allatok.length > 0 && 
                    allatok.map((allat) => (
                    <tr key={allat.nev}>
                        <td>{allat.nev}</td>
                        <td>{allat.faj}</td>
                        <td>{allat.gondozo}</td>
                        <td>{allat.helye}</td>
                        <td>{allat.erkezes}</td>
                        
                    </tr>
                    )
                )
            }
          </tbody>
        </table>
      </main>
    </>
  );
}
