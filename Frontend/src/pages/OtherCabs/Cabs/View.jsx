import React, { useEffect, useState } from "react";
import { useAppContext } from "@context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { otherCabsDetail } from "@api/urls";
import { Loader } from "@components";
import { OtherCabsDriverList, OtherCabsVehicleList } from "@pages";

export default function View() {
  const { setBreadcrumbs } = useAppContext();
  const [viewDetail, setViewDetail] = useState();
  const { uuid } = useParams();
  const navigate=useNavigate();
  const navigate1=useNavigate();
  useEffect(() => {
    setBreadcrumbs({
      title: "Othercabs View",
      sidebarActiveId: 5,
      list: [
        {
          label: "Othercabs List",
          path: "/othercabs/list",
        },
        {
          label: "Othercabs View",
        },
      ],
    });
  }, [setBreadcrumbs]);

  useEffect(() => {
    if (uuid) {
      localStorage.setItem("othercabs_uuid", uuid); // Save to localStorage
    }
    const FatchData = async () => {
      const response = await otherCabsDetail(uuid);

      const mapedData = {
        "OtherCab Name": response.identity,
        "Owner Name": response.owner_name,
        "Phone Number": response.phone_number,
        Address: response.address,
        Balance: response.balance,
      };
      setViewDetail(mapedData);
    };
    FatchData();
    return () => {
      localStorage.removeItem("othercabs_uuid");
    };
  }, []);
  const handleNavigate = () => {
    navigate("/othercabs-driver/form");
  };
  const handleNavigate1 = () => {
    navigate1("/othercabs-vehicle/form");
  };
  if (!viewDetail) return <Loader />;

  return (
    <>
      <div className="col-md-12 col-lg-8">
        <div className="card shadow-sm border-0 rounded">
          <div className="card-header bg-light py-3">
            <h5 className="mb-0 text-dark fw-bold">OtherCabs Details</h5>
          </div>
          <div className="card-body p-4">
            <table className="table table-bordered">
              <tbody>
                {Object.entries(viewDetail).map(([key, value], index) => (
                  <tr key={index}>
                    <th className="text-secondary text-uppercase w-50">
                      {key.replace(/_/g, " ")}
                    </th>
                    <td className="text-dark">
                      {value || <span className="text-muted">N/A</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-xxl-12 mt-4">
      <div className="col-xl-12 col-xxl-12 mt-4 d-flex justify-content-end">
        <button
          className="btn btn-primary waves-effect"
          onClick={handleNavigate}
        >
        Add Other Cab Driver
        </button>
      </div><br></br>
        <OtherCabsDriverList />
      </div>
      <div className="col-xl-12 col-xxl-12 mt-4">
      <div className="col-xl-12 col-xxl-12 mt-4 d-flex justify-content-end">
        <button
          className="btn btn-primary waves-effect"
          onClick={handleNavigate1}
        >
        Add Other Vehicle
        </button>
      </div><br></br>
        <OtherCabsVehicleList />
      </div>
    </>
  );
}
