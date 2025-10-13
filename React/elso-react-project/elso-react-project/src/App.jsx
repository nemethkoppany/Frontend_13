import MyComponent from "./MyComponent";
import "./App.css";

export default function App() {
  const kedvencSzinem = "piros";

  return (
    <>
      <h1>Hello Világ!</h1>
      <h2>Egy újabb alcím</h2>
      <h2>Összeadás: 2+2</h2>
      <h2>Összeadás: {2 + 2} </h2>
      <h3>A kedvenc színem a {kedvencSzinem} </h3>
      <br />
      <MyComponent szin="fekete" />
      <MyComponent szin="zöld" />
    </>
  );
}
