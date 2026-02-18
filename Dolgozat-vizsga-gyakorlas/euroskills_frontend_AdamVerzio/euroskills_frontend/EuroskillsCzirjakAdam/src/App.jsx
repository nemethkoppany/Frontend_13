import Home from './components/Home';
import Login from './components/LoginPage';
import Versenyzok from './components/Versenyzok';
import versenyzokLoader from './loaders/versenyzokLoader';
import  "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import loginAction from './actions/loginAction';
import logOutAction from './actions/logoutAction';
import { tokenLoader } from './actions/logoutAction';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      id: "root",
      loader: tokenLoader,
      children: [
        {
          index:true,
          element: <Home/>
        },
        {
          path: "login",
          action: loginAction,
          element: <Login/>
        },
        {
          path: "eredmenyek",
          loader: versenyzokLoader,
          element: <Versenyzok/>
        },
        {
          path: "logout",
          action: logOutAction
        }

      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
