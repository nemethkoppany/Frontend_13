export default function Csapat({nev,varos,alapitasEve, onDelete}){
    return(
        <div>
            <h2>{nev}</h2>
            <p>{varos}</p>
            <p>{alapitasEve}</p>
            <button onClick={onDelete}>Törlés</button>
        </div>
    )
}