import React, { useEffect, useState } from "react";
import { useAppContext } from "@context/AppContext";
import { useParams } from "react-router-dom";
import { vehicleDetail } from "@api/urls";
import { Loader } from "@components";

export default function View() {
  const { setBreadcrumbs } = useAppContext();
  const [viewDetail, setViewDetail] = useState();
  const { uuid } = useParams();

  useEffect(() => {
    setBreadcrumbs({
      title: "Vehicle View",
      sidebarActiveId: 7,
      list: [
        {
          label: "Vehicle List",
          path: "/vehicle/list",
        },
        {
          label: "Vehicle View",
        },
      ],
    });
  }, [setBreadcrumbs]);

  useEffect(() => {
    const FatchData = async () => {
      const response = await vehicleDetail(uuid);

      const mapedData = {
        "Vehicle Name": response.identity,
        "Vehicle Number": response.vehicle_no,
        "Vehicle Type": response.vehicle_type,
        "AC Available": response.is_ac_available ? "Yes" : "No",
        "Last KM": response.last_km,
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
          <h5 className="mb-0 text-dark fw-bold">Vehicle Details</h5>
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
