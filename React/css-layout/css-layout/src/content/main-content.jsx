import "./main-content.css";
import kiskutya from "../assets/fressnapf.jpg";

export default function MainContent() {
  return (
    <main>
      <h2>Hahóóóó!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        tempore sed culpa vitae velit a tempora eligendi ea saepe alias vero
        minima sint quae delectus, minus reprehenderit totam architecto laborum.
      </p>
      <h2>Itt lesz egy szép kép</h2>
      <div className="image">
        <img src={kiskutya} alt="" id="kiskutya" />
      </div>
    </main>
  );
}
