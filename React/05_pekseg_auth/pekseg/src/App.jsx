import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import './App.css'
import { useState, useEffect } from "react"
import Nyitooldal from '../components/Nyitooldal'
import Jelentkezes from '../components/Jelentkezes'
import Termekek from '../components/Termekek'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const router = createBrowserRouter([
    {path:"/", element:<Nyitooldal isAuthenticated={isAuthenticated} onLogout={handleLogout}></Nyitooldal>},
    {path:"/termekek", element: <Termekek isAuthenticated={isAuthenticated}></Termekek>},
    {path: "/login", element: <Jelentkezes onLoginSuccess={() => setIsAuthenticated(true)}></Jelentkezes>}
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
