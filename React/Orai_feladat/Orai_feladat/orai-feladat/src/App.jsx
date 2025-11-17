import { useState } from "react";
import "./App.css";

function Header() {
  return (
    <header>
      <h1>Nagyon egyedi Header</h1>
    </header>
  );
}

function Layout({ children }) {
  return <div className="layout">{children}</div>;
}

function FormCard({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");   // <-- Telefon helyett Életkor

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !age) return;

    onAdd({ name, email, age }); 
    setName("");
    setEmail("");
    setAge("");
  }

  return (
    <form className="card form-card" onSubmit={handleSubmit}>
      <h3>Nagyon egyedi form</h3>

      <label>Név</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <label>Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Életkor</label> {/* <-- Átírva */}
      <input 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
        type="number" 
      />

      <button type="submit">Hozzáadás</button>
    </form>
  );
}

function PersonCard({ name, email, age, onDelete }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Életkor:</strong> {age}</p> {/* <-- Telefon helyett Életkor */}
      <button onClick={onDelete}>Törlés</button>
    </div>
  );
}

function PersonList({ data, onDelete }) {
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

export default function App() {
  const [people, setPeople] = useState([]);

  function handleAdd(person) {
    setPeople((prev) => [...prev, person]);
  }

  function handleDelete(index) {
    setPeople((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div>
      <Header />

      <main>
        <Layout>
          <FormCard onAdd={handleAdd} />
          <PersonList data={people} onDelete={handleDelete} />
        </Layout>
      </main>
    </div>
  );
}
