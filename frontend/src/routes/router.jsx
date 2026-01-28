import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import Car_listing from "../pages/Car_listing";
import RouterError from "../components/ui/RouterError";
import Car_details from "../pages/Car_details";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,        // layout with <Outlet />
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'cars',
        element: <Car_listing />,
      },
      {
        path: 'car/:car_id',
        element: <Car_details />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ],
  },
]);

export {
  router
}