import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [breadcrumbs, setBreadcrumbs] = useState({
    title: "Dashboard",
    sidebarActiveId: 1,
    list: [
      {
        label: "Dashboard",
      },
    ],
  });
  const [sidebarToggle, setSidebarToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 1200) {
        setSidebarToggle(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppContext.Provider
      value={{
        breadcrumbs,
        setBreadcrumbs,

        sidebarToggle,
        setSidebarToggle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);
