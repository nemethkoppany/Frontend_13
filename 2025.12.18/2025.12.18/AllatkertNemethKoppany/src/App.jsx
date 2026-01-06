import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import './App.css'
import Nyitooldal from "./components/Nyitooldal";
import Allatok from "./components/Allatok";
import Ujallat from "./components/UjAllat";

const router = createBrowserRouter([
  {path: "/", element: <Nyitooldal></Nyitooldal>},
  {path: "/allataink", element: <Allatok></Allatok>},
  {path: "/ujallat", element: <Ujallat></Ujallat>}
])

function App() {

  return(
    <RouterProvider router={router}/>
  );
}

export default App
