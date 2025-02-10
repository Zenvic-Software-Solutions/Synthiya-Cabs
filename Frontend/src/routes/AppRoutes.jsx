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
      {
        path: "vehicle",
        children: [
          { path: "list", element: <Pages.VehicleList /> },
          { path: "form/:uuid?", element: <Pages.VehicleForm /> },
          { path: "view/:uuid?", element: <Pages.VehicleView /> },
        ],
      },
      {
        path: "driver",
        children: [
          { path: "list", element: <Pages.DriverList /> },
          { path: "form/:uuid?", element: <Pages.DriverForm /> },
          { path: "view/:uuid?", element: <Pages.DriverView /> },
        ],
      },
      {
        path: "othercabs",
        children: [
          { path: "list", element: <Pages.OtherCabsList /> },
          { path: "form/:uuid?", element: <Pages.OtherCabsForm /> },
          { path: "view/:uuid?", element: <Pages.OtherCabsView /> },
        ],
      },
      {
        path: "othercabs-driver",
        children: [
          { path: "list", element: <Pages.OtherCabsDriverList /> },
          { path: "form/:uuid?", element: <Pages.OtherCabsDriverForm /> },
          { path: "view/:uuid?", element: <Pages.OtherCabsDriverView /> },
        ],
      },
      {
        path: "othercabs-vehicle",
        children: [
          { path: "list", element: <Pages.OtherCabsVehicleList /> },
          { path: "form/:uuid?", element: <Pages.OtherCabsVehicleForm /> },
          { path: "view/:uuid?", element: <Pages.OtherCabsVehicleView /> },
        ],
      },
      { path: "report", element: <Pages.Report /> },
    ],
  },
]);

export default AppRoutes;
