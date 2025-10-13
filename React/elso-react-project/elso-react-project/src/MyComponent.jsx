export default function MyComponent(props) {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, sint
        odio voluptatem nulla, minus quas nostrum quod, laborum quia natus
        rerum. Ea officiis in assumenda iure praesentium, iste non quisquam!
      </p>
      <ul>
        <li>Egy</li>
        <li>II</li>
        <li>3</li>
      </ul>
      <h2>A kedvenc színem: {props.szin} </h2>
    </>
  );
}
