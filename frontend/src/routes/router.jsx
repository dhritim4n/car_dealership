import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import Car_listing from "../pages/Car_listing";
import RouterError from "../components/ui/RouterError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,        // layout with <Outlet />
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'cars',
        element: <Car_listing/>
      }      
    ],
  },
]);

export {
    router
}