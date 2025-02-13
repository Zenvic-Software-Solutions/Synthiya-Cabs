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
        path: "bank",
        children: [
          { path: "list", element: <Pages.BankList /> },
          { path: "form/:uuid?", element: <Pages.BankForm /> },
          { path: "view/:uuid?", element: <Pages.BankView /> },
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
        path: "workshop",
        children: [
          { path: "list", element: <Pages.WorkshopList /> },
          { path: "form/:uuid?", element: <Pages.WorkshopForm /> },
          { path: "view/:uuid?", element: <Pages.WorkshopView /> },
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
        ],
      },
      {
        path: "othercabs-vehicle",
        children: [
          { path: "list", element: <Pages.OtherCabsVehicleList /> },
          { path: "form/:uuid?", element: <Pages.OtherCabsVehicleForm /> },
        ],
      },
      {
        path: "booking",
        children: [
          { path: "list", element: <Pages.BookingList /> },
          { path: "form/:uuid?", element: <Pages.BookingForm /> },
          { path: "view/:uuid?", element: <Pages.BookingView /> },
        ],
      },
      {
        path: "customer",
        children: [
          {path: "list", element: <Pages.CustomerList />},
          {path: "form/:uuid?", element: <Pages.CustomerForm/>},
          {path: "view/:uuid?", element: <Pages.CustomerView/>},
        ]
      },
      {
        path: "maintenance",
        children: [
          {path: "list", element: <Pages.MaintenanceList />},
          {path: "form/:uuid?", element: <Pages.MaintenanceForm/>},
          {path: "view/:uuid?", element: <Pages.MaintenanceView/>},
        ]
      },
      {
        path: "betta",
        children: [
          {path: "list", element: <Pages.BettaList />},
          {path: "form/:uuid?", element: <Pages.BettaForm/>},
          {path: "view/:uuid?", element: <Pages.BettaView/>},
        ]
      },
      { path: "report", element: <Pages.Report /> },
    ],
  },
]);

export default AppRoutes;
