export default function PersonCard({ name, email, age, onDelete }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Életkor:</strong> {age}</p>
      <button onClick={onDelete}>Törlés</button>
    </div>
  );
}
