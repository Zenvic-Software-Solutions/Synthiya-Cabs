import React, { useEffect, useState } from "react";
import { useAppContext } from "@context/AppContext";
import { useParams } from "react-router-dom";
import { maintenanceDetail } from "@api/urls";
import { Loader } from "@components";

export default function View() {
  const { setBreadcrumbs } = useAppContext();
  const [viewDetail, setViewDetail] = useState();
  const { uuid } = useParams();

  useEffect(() => {
    setBreadcrumbs({
      title: "Maintenance View",
      sidebarActiveId: 12,
      list: [
        {
          label: "Maintenance List",
          path: "/maintenance/list",
        },
        {
          label: "Maintenance View",
        },
      ],
    });
  }, [setBreadcrumbs]);

  useEffect(() => {
    const FatchData = async () => {
      const response = await maintenanceDetail(uuid);

      const mapedData = {
        "Workshop Identity": response.workshop_details?.identity,
        "Vehicle Identity": response.vehicle_details?.identity,
        "Driver Name": response.driver_details?.identity,
        "Driver Phone Number":
          response.driver_details?.user_details?.phone_number,
        Status: response.status,
        Description: response.description,
        "Start KM": response.start_km,
        "End KM": response.end_km,
        "Start Date": response.start_date,
        "End Date": response.end_date,
      };
      setViewDetail(mapedData);
    };
    FatchData();
  }, []);

  if (!viewDetail) return <Loader />;

  return (
    <div className="col-md-12 col-lg-8">
      <div className="card shadow-sm border-0 rounded p-5">
        <div
          className="card-header bg-light py-3"
          style={{ borderRadius: "10px" }}
        >
          <h5 className="mb-0 text-dark fw-bold">Maintenance Details</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive-sm">
            <table className="table table-centered table-borderless mb-0">
              <tbody>
                {Object.entries(viewDetail).map(([key, value], index) => (
                  <tr key={index}>
                    <th>{key.replace(/_/g, " ")}</th>
                    <th>:</th>
                    <td> {value || <span className="text-muted">N/A</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
