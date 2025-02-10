import React from "react";
import { useAppContext } from "@context/AppContext";
import { Link } from "react-router-dom";
import { ExcelButtons } from "@components";

export default function Index() {
  const { breadcrumbs } = useAppContext();

  if (!breadcrumbs) return;

  // const isListPage = useLocation().pathname.split("/").includes("form");

  // const params = new URLSearchParams(selectedFilters).toString();
  const filelink = `${process.env.BACKEND_URL}${breadcrumbs?.reportLink}`;

  return (
    <div className="container-xxl flex-grow-1">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center row-gap-4">
        <div className="d-flex flex-column justify-content-center">
          <h4 className="mb-1">{breadcrumbs.title}</h4>
          <nav aria-label="breadcrumb">
            {breadcrumbs?.list && (
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/dashboard">Dashboard</Link>
                </li>

                {breadcrumbs.list.map((item, index) => {
                  return item.path ? (
                    <li key={index} className="breadcrumb-item">
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ) : (
                    <li key={index} className="breadcrumb-item active">
                      <Link to="#">{item.label}</Link>
                    </li>
                  );
                })}
              </ol>
            )}
          </nav>
        </div>
        <div className="d-flex align-content-center flex-wrap gap-4">
          {breadcrumbs?.reportLink && <ExcelButtons fileUrl={filelink} />}
          {breadcrumbs?.addButtonData && (
            <Link
              to={breadcrumbs?.addButtonData?.link}
              className="btn btn-primary waves-effect waves-light"
            >
              <i class="ti ti-plus ti-md"></i>
              {breadcrumbs?.addButtonData?.name}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
