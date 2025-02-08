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
        path: "vechile",
        children: [
          { path: "list", element: <Pages.VehicleList /> },
          { path: "form/:uuid?", element: <Pages.VehicleForm /> },
          { path: "view/:uuid?", element: <Pages.VehicleView /> },
        ],
      },
      { path: "report", element: <Pages.Report /> },
    ],
  },
]);

export default AppRoutes;
