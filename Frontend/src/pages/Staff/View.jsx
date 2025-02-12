import React, { useEffect } from "react";
import { useAppContext } from "@context/AppContext";
export default function View() {
  const { setBreadcrumbs } = useAppContext();
  useEffect(() => {
    setBreadcrumbs({
      title: "Staff View",
      sidebarActiveId: 3,
      list: [
        {
          label: "Staff List",
          path: "/staff/list",
        },
        {
          label: "Staff View",
        },
      ],
    });
  }, [setBreadcrumbs]);

  return (
    <div className="col-md-12 col-lg-5">
      <div className="card card-action mb-6">
        <div className="card-header align-items-center">
          <h5 className="card-action-title mb-0">Staff Details</h5>
        </div>
        <div className="card-body">
          <ul className="list-unstyled mb-0">
            <li className="mb-4">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <h6 className="mb-0">Staff Name</h6>
                  </div>
                </div>
                <div className="ms-auto">
                  <p>Mugeshwaran</p>
                </div>
              </div>
            </li>
            <li className="mb-4">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <h6 className="mb-0">Age</h6>
                  </div>
                </div>
                <div className="ms-auto">
                  <p>40</p>
                </div>
              </div>
            </li>
            <li className="mb-4">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <h6 className="mb-0">Address</h6>
                  </div>
                </div>
                <div className="ms-auto">
                  <p>Testing address</p>
                </div>
              </div>
            </li>
            <li className="mb-4">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <h6 className="mb-0">Phone number</h6>
                  </div>
                </div>
                <div className="ms-auto">
                  <p>99999999999</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
