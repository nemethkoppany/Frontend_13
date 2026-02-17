import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import './App.css'
import Nyitooldal from "./components/Nyitooldal";
import Versenyzok from "./components/Versenyzok";
import Bejelenkzes from "./components/Bejelentkezes";

const router = createBrowserRouter([
  {path:"/",element:<Nyitooldal></Nyitooldal>},
  {path:"/eredmenyek", element:<Versenyzok></Versenyzok>},
  {path:"/login",element:<Bejelenkzes></Bejelenkzes>}
])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
