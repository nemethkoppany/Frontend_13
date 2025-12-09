export default function Kartya({kartyaszam, lejarat, ccv, tulajdonos_neve, onDelete}){
    return(
        <div className="kartya">
            <h2>{kartyaszam}</h2>
            <p>Lejárati dátum: {lejarat}</p>
            <p>CCV: {ccv}</p>
            <p>Tulajdonos neve: {tulajdonos_neve}</p>
            <button onClick={onDelete}>Törlés</button>
        </div>
    )
}
