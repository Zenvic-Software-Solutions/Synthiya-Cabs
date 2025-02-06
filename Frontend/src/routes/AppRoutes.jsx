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
        path: "staff",
        children: [
          { path: "list", element: <Pages.StaffList /> },
          { path: "form/:uuid?", element: <Pages.StaffForm /> },
          { path: "view/:uuid?", element: <Pages.StaffView /> },
        ],
      },
      { path: "report", element: <Pages.Report /> },
    ],
  },
]);

export default AppRoutes;
