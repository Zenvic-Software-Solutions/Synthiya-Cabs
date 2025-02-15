import React, { useEffect, useState } from "react";
import { useAppContext } from "@context/AppContext";
import { useParams } from "react-router-dom";
import { financeDetail } from "@api/urls";
import { Loader } from "@components";
import { FinanceHistoryList } from "..";

export default function View() {
  const { setBreadcrumbs } = useAppContext();
  const [viewDetail, setViewDetail] = useState();
  const { uuid } = useParams();

  useEffect(() => {
    setBreadcrumbs({
      title: "Finance View",
      sidebarActiveId: 19,
      list: [
        {
          label: "Finance List",
          path: "/finance/list",
        },
        {
          label: "Finance View",
        },
      ],
      addButtonData: {
        name: "Add Finance history",
        link: "/financehistory/form",
      },
    });
  }, [setBreadcrumbs]);

  useEffect(() => {
    if (uuid) {
      localStorage.setItem("finance_uuid", uuid); // Save to localStorage
    }
    const fetchData = async () => {
      const response = await financeDetail(uuid);

      const mappedData = {
        "Vehicle No": response.vehicle_details?.vehicle_no,
        "Vehicle Identity": response.vehicle_details?.identity,
        "Finance Name": response.finance_name,
        "Finance Address": response.finance_address,
        "Contact Number": response.contact_number,
        "Total Amount": response.total_amount,
        "Total No Due": response.total_no_due,
        "Due Amount": response.due_amount,
        "Initiated Date": response.initiated_date,
        "Due Date": response.due_date,
      };
      setViewDetail(mappedData);
    };
    fetchData();
    return () => {
      localStorage.removeItem("finance_uuid");
    };
  }, [uuid]);

  if (!viewDetail) return <Loader />;

  return (
    <>
      <div className="col-md-12 col-lg-8">
        <div className="card shadow-sm border-0 rounded p-5">
          <div
            className="card-header bg-light py-3"
            style={{ borderRadius: "10px" }}
          >
            <h5 className="mb-0 text-dark fw-bold">Finance Details</h5>
          </div>
          <div className="card-body">
            <div className="table-responsive-sm">
              <table className="table table-centered table-borderless mb-0">
                <tbody>
                  {Object.entries(viewDetail).map(([key, value], index) => (
                    <tr key={index}>
                      <th>{key.replace(/_/g, " ")}</th>
                      <th>:</th>
                      <td>
                        {" "}
                        {value || <span className="text-muted">N/A</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-xxl-12 mt-4">
        <div className="card shadow-sm border-0 rounded">
          <div className="card-header bg-light py-3">
            <h5 className="mb-0 text-dark fw-bold">Finance History</h5>
          </div>
          <FinanceHistoryList />
        </div>
      </div>
    </>
  );
}
