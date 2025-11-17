import Header from "./components/header.jsx";
import CoreConcepts from "./components/core-concepts.jsx";
import Examples from "./components/examples.jsx";


function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples/>
      </main>
    </div>
  );
}

export default App;
