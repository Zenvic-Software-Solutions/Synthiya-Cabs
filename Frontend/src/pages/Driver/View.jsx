import React, { useEffect, useState } from "react";
import { useAppContext } from "@context/AppContext";
import { useParams } from "react-router-dom";
import { driverDetail } from "@api/urls";
import { Loader } from "@components";

export default function View() {
  const { setBreadcrumbs } = useAppContext();
  const [viewDetail, setViewDetail] = useState();
  const { uuid } = useParams();

  useEffect(() => {
    setBreadcrumbs({
      title: "Driver View",
      sidebarActiveId: 4,
      list: [
        {
          label: "Driver List",
          path: "/driver/list",
        },
        {
          label: "Driver View",
        },
      ],
    });
  }, [setBreadcrumbs]);

  useEffect(() => {
    const FatchData = async () => {
      const response = await driverDetail(uuid);

      const mapedData = {
        "Driver Name": response.initial?.identity,
        "Driver ID": response.initial?.driver_id,
        Email: response.initial?.email,
        Address: response.initial?.address,
        "License Number": response.initial?.license_no,
        "Date of Birth": response.initial?.dob,
        "Phone Number": response.initial?.user_phone_number,
      };
      setViewDetail(mapedData);
    };
    FatchData();
  }, []);

  if (!viewDetail) return <Loader />;

  return (
    <div className="col-md-12 col-lg-8">
      <div className="card shadow-sm border-0 rounded p-4 p-5">
        <div
          className="card-header bg-light py-3"
          style={{ borderRadius: "10px" }}
        >
          <h5 className="mb-0 text-dark fw-bold">Driver Details</h5>
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
