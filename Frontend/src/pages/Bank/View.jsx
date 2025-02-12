import React, { useEffect, useState } from "react";
import { useAppContext } from "@context/AppContext";
import { useParams } from "react-router-dom";
import { bankDetail } from "@api/urls";
import { Loader } from "@components";

export default function View() {
  const { setBreadcrumbs } = useAppContext();
  const [viewDetail, setViewDetail] = useState();
  const { uuid } = useParams();

  useEffect(() => {
    setBreadcrumbs({
      title: "Bank View",
      sidebarActiveId: 8,
      list: [
        {
          label: "Bank List",
          path: "/bank/list",
        },
        {
          label: "bank View",
        },
      ],
    });
  }, [setBreadcrumbs]);

  useEffect(() => {
    const FatchData = async () => {
      const response = await bankDetail(uuid);

      const mapedData = {
        "Bank Name": response.identity,
        "Branch Name": response.branch,
        " Account Number": response.account_no,
        "Account Holder Name": response.account_holder_name,
        "IFSC Code": response.ifsc_code,
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
          <h5 className="mb-0 text-dark fw-bold">Bank Details</h5>
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
