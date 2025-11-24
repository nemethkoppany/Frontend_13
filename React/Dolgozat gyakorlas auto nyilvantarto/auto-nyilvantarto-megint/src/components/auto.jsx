export default function Auto({rendszam, evjarat, fogysztas, onDelete}){
    return(
        <div className="auto">
            <h3>{rendszam}</h3>
            <p>Évjárat: {evjarat}</p>
            <p>Fogysztás: {fogysztas}</p>
            <button onClick={onDelete}>Törlés</button>
        </div>
    )
}