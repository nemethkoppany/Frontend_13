import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
//import Layout from "./components/Layout";
import FormCard from "./components/FormCard";
import PersonList from "./components/PersonList";

export default function App() {
  const [people, setPeople] = useState([]);

  function handleAdd(person) {
    setPeople((prev) => [...prev, person]);
  }

  function handleDelete(indexToDelete) {
  setPeople((previousPeople) => {
    const updatedPeople = previousPeople.filter((person, index) => {
      return index !== indexToDelete;
    });

    return updatedPeople;
  });
}


  return (
    <div>
      <Header />

      <main>
          <FormCard onAdd={handleAdd} />
          <PersonList data={people} onDelete={handleDelete} />
      </main>
    </div>
  );
}
