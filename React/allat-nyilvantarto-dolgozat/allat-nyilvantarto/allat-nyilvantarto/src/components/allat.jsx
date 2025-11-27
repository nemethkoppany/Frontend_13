export default function Allat({fajta,taplalkozas,eletkor, onDelete}){
    <div className="allat">
    <h2>{fajta}</h2>
    <p>Táplálkozás: {taplalkozas}</p>
    <p>Életkor: {eletkor}</p>
    <button onClick={onDelete}>Törlés</button>
</div>
}