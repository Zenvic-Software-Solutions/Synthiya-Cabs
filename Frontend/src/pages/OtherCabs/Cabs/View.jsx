import React, { useEffect, useState } from "react";
import { useAppContext } from "@context/AppContext";
import { useParams } from "react-router-dom";
import { otherCabsDetail } from "@api/urls";
import { Loader } from "@components";
import { OtherCabsDriverList, OtherCabsVehicleList } from "@pages";

export default function View() {
  const { setBreadcrumbs } = useAppContext();
  const [viewDetail, setViewDetail] = useState();
  const { uuid } = useParams();

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
  }, []);

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
      <div className="col-xl-12 col-xxl-8 mt-4">
        <OtherCabsDriverList />
      </div>
      <div className="col-xl-12 col-xxl-8 mt-4">
        <OtherCabsVehicleList />
      </div>
    </>
  );
}
