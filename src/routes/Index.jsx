import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout";

import Dashboard from "../pages/Dashboard";
import AuthProtected from "./AuthProtected";
import PublicRoute from "./PublicRoutes";

import Register from "../pages/authentication/Register";
import AddStock from "../pages/addStock/AddStock";
import HRM from "../pages/hrm/HRM";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "/",
    element: (
      <AuthProtected>
        <Layout />
      </AuthProtected>
    ),
    children: [
      {
        path: "/",
        element: <Layout />,
      },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/addStock", element: <AddStock /> },
      {
        path: "/hrm",
        element: <HRM />,
      },

      {
        path: "*",
        element: (
          <h1
            style={{
              height: `calc(100vh - 64px)`,
            }}
            className={`flex justify-center items-center`}
          >
            working on the site
          </h1>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
]);

export default router;
