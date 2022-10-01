import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import ErrorPage from "./pages/Error";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

import { Register } from "./pages/Register";
import { Single } from "./pages/Single";
import { Write } from "./pages/Write";
import "./style.scss"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/write",
        element: <Write />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/single",
        element: <Single />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/post/:id",
        element: <Single />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      }

    ],
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
 
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
