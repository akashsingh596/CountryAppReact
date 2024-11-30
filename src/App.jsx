import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import Country from "./Pages/ContactPage";
import Contact from "./Pages/ContactPage";
import {ErrorPage} from "./Pages/ErrorPage";


import { AppLayout } from "./components/Layout/AppLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      errorElement : <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "country",
          element: <Country />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
