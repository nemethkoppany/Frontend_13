import PersonCard from "./PersonCard";

export default function PersonList({ data, onDelete }) {
  return (
    <div className="list-column">
      {data.length === 0 && <p>Nincs megjelenítendő adat.</p>}

      {data.map((person, index) => (
        <PersonCard
          key={index}
          {...person}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
}
