import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { route } from "./route";


const router = createBrowserRouter(route);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
