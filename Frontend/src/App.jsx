import React from "react";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import DataContextProvider from "@context/DataContext";
import "./styles/App.css";

function App() {
  return (
    <DataContextProvider>
      <RouterProvider router={AppRoutes} />
    </DataContextProvider>
  );
}

export default App;
