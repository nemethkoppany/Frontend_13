export default function Laptop({serial,model,ram,onDelete}){
    return(
        <div className="laptop">
            <h2>{serial}</h2>
            <p>{model}</p>
            <p>{ram}GB</p>
            <button onClick={onDelete}>Törlés</button>
        </div>
    )
}