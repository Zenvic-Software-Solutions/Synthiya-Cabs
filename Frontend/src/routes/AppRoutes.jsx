import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import * as Pages from "@pages";
import ErrorBoundary from "./ErrorBoundary";

const AppRoutes = createBrowserRouter([
  {
    index: true,
    errorElement: <ErrorBoundary />,
    element: <Pages.Login />,
  },
  {
    path: "/",
    element: <MainLayout />,

    children: [
      { path: "dashboard", element: <Pages.Dashboard /> },
      {
        path: "employee",
        children: [
          { path: "list", element: <Pages.EmployeeList /> },
          { path: "form/:uuid?", element: <Pages.EmployeeForm /> },
          { path: "view/:uuid?", element: <Pages.EmployeeView /> },
        ],
      },
    ],
  },
]);

export default AppRoutes;
