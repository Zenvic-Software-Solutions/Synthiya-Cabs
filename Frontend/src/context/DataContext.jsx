import { createContext, useContext, useEffect, useState } from "react";
import { getUserDetails } from "@api/urls";

const DataContext = createContext();

function DataContextProvider({ children }) {
  const [userDetails, setUserDetails] = useState();
  const [previews, setPreviews] = useState([]);
  const [trigger, setTrigger] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem("accessToken");
  //   const FatchData = async () => {
  //     const response = await getUserDetails();
  //     setUserDetails(response);
  //   };
  //   if (token) {
  //     FatchData();
  //   }
  // }, []);

  // useEffect(() => console.log("Modal UUID :" + modalUUID), [modalUUID]);

  return (
    <DataContext.Provider
      value={{
        userDetails,
        trigger,
        setTrigger,
        previews,
        setPreviews,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;

export const useDataContext = () => useContext(DataContext);
