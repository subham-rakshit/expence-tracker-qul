import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  NotFoundPage,
  SignUpPage,
  TransactionPage,
} from "../pages";
import PublicRoute from "./PublicRoute";
import PublicLayout from "../layout/PublicLayout";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/",
    element: (
      <PublicRoute>
        <PublicLayout />
      </PublicRoute>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "transaction/:id",
        element: <TransactionPage />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const RouteIndex = () => {
  return <RouterProvider router={router} />;
};

export default RouteIndex;
