import { useState } from "react";

export default function FormCard({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

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

      <label>Életkor</label>
      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        type="number"
      />

      <button type="submit">Hozzáadás</button>
    </form>
  );
}
