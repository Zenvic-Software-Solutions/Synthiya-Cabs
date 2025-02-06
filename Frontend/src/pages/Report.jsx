import React, { useState, useEffect } from "react";
import { DateSelector } from "@components";
import { useAppContext } from "@context/AppContext";

export default function Report() {
  const { setBreadcrumbs } = useAppContext();
  const [reportCard, setReportCard] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    setBreadcrumbs({
      title: "Report list",
      sidebarActiveId: 18,
      list: [
        {
          label: "Report list",
        },
      ],
    });
  }, [setBreadcrumbs]);

  useEffect(() => {
    setReportCard([
      {
        title: "Report 1",
        link: `${process.env.BACKEND_URL}/cms/product/report/${
          selectedFilters?.created_at__lte || selectedFilters?.created_at__gte
            ? `?${
                selectedFilters?.created_at__lte
                  ? `created_at__lte=${selectedFilters.created_at__lte}`
                  : ""
              }${
                selectedFilters?.created_at__gte
                  ? `&created_at__gte=${selectedFilters.created_at__gte}`
                  : ""
              }`
            : ""
        }`,
      },
      {
        title: "Report 2",
        link: `${process.env.BACKEND_URL}/cms/stock/report/${
          selectedFilters?.created_at__lte || selectedFilters?.created_at__gte
            ? `?${
                selectedFilters?.created_at__lte
                  ? `created_at__lte=${selectedFilters.created_at__lte}`
                  : ""
              }${
                selectedFilters?.created_at__gte
                  ? `&created_at__gte=${selectedFilters.created_at__gte}`
                  : ""
              }`
            : ""
        }`,
      },
      {
        title: "Report 3",
        link: `${process.env.BACKEND_URL}/cms/warehouse/report/${
          selectedFilters?.created_at__lte || selectedFilters?.created_at__gte
            ? `?${
                selectedFilters?.created_at__lte
                  ? `created_at__lte=${selectedFilters.created_at__lte}`
                  : ""
              }${
                selectedFilters?.created_at__gte
                  ? `&created_at__gte=${selectedFilters.created_at__gte}`
                  : ""
              }`
            : ""
        }`,
      },
    ]);
  }, [selectedFilters]);

  const handleFilterChange = (key, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-6 row-gap-4">
        <div style={{ display: "flex", alignItems: "center", width: "290px" }}>
          <h5 className="m-0 me-2">Filter</h5>
          <DateSelector handleFilterChange={handleFilterChange} />
        </div>
      </div>
      <div className="row" style={{ padding: 20 }}>
        {reportCard.map((item, index) => (
          <div
            key={index}
            className="card mb-10"
            style={{
              width: 300,
              alignItems: "center",
              marginRight: 40,
              height: 260,
              padding: 30,
              justifyContent: "space-between",
            }}
          >
            <h5 className="card-title mb-0">{item.title}</h5>
            <img
              src="../../assets/img/default/PngItem.png"
              alt=""
              width={100}
            />
            <button
              onClick={() => window.open(item.link, "_blank")}
              className="btn btn-primary waves-effect waves-light mt-5"
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
