import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import Nyitooldal from './components/Nyitooldal';
import Allatok from './components/Allatok';
import Bejelentkezes from './components/Bejelentkezes';

function App() {

  const router = createBrowserRouter([
    {path:"/",element:<Nyitooldal></Nyitooldal>},
    {path:"/allataink", element:<Allatok></Allatok>},
    {path:"/login", element:<Bejelentkezes></Bejelentkezes>}
  ]);

  return (
    <RouterProvider router = {router}></RouterProvider>
  )
}

export default App
