import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorNotFound from "./components/ErrorNotFound";

export const route = [
  {
    path: "/",
    element: <Navigation></Navigation>,
    errorElement: <ErrorNotFound></ErrorNotFound>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]