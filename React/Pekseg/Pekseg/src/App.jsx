import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import Nyitooldal from './components/Nyitooldal'
import Termekek from './components/Termekek'
import UjTermek from './components/UjTermek'

const router = createBrowserRouter([
  { path: "/", element: <Nyitooldal /> },
  { path: "/termekek", element: <Termekek /> },
  { path: "/ujtermek", element: <UjTermek /> }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
