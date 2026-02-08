import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import Nyitooldal from './components/Nyitooldal'
import Meresek from './components/Meresek'
import UjMeres from './components/UjMeres'
import './App.css'

const router = createBrowserRouter([
  {path:"/",element: <Nyitooldal></Nyitooldal>},
  {path:"/adatok", element:<Meresek></Meresek>},
  {path:"/ujadat",element:<UjMeres></UjMeres>}
])

function App() {


  return (
    <RouterProvider router={router}/>
  )
}

export default App
