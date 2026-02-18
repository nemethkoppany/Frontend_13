import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import './App.css'
import Nyitooldal from "./components/Nyitooldal";
import Eredmenyek from "./components/Eredmenyek";
import Bejelentekezs from "./components/Bejelentkezes";

const router = createBrowserRouter([
  {path:"/",element:<Nyitooldal></Nyitooldal>},
  {path:"/eredmenyek", element:<Eredmenyek></Eredmenyek>},
  {path:"/login",element:<Bejelentekezs></Bejelentekezs>}
])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
