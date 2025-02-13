import React, { useEffect, useState } from "react";
import { useAppContext } from "@context/AppContext";
import { useParams } from "react-router-dom";
import { customerDetail } from "@api/urls";
import { Loader } from "@components";

export default function View() {
  const { setBreadcrumbs } = useAppContext();
  const [viewDetail, setViewDetail] = useState();
  const { uuid } = useParams();

  useEffect(() => {
    setBreadcrumbs({
      title: "Customer View",
      sidebarActiveId: 3,
      list: [
        {
          label: "Customer List",
          path: "/customer/list",
        },
        {
          label: "Customer View",
        },
      ],
    });
  }, [setBreadcrumbs]);

  useEffect(() => {
    const FatchData = async () => {
      const response = await customerDetail(uuid);

      const mapedData = {
        "Customer Name": response.initial?.identity,
        "Customer ID": response.initial?.customer_id,
        // Email: response.initial?.email,
        // Address: response.initial?.address,
        // "Date of Birth": response.initial?.dob,
        "Phone Number": response.initial?.user_phone_number,
        //"Date of Joining": response.initial?.date_of_joining,
      };
      setViewDetail(mapedData);
    };
    FatchData();
  }, []);

  if (!viewDetail) return <Loader />;

  return (
    <div className="col-md-12 col-lg-8">
      <div className="card shadow-sm border-0 rounded">
        <div className="card-header bg-light py-3">
          <h5 className="mb-0 text-dark fw-bold">Customer Details</h5>
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
  );
}
