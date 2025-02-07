import React, { useEffect, useState } from "react";
import { DataTable, Pagination, Filters } from "@components";
import { useDataContext } from "@context/DataContext";
import { useAppContext } from "@context/AppContext";

export default function index({
  tableMetaApi,
  tableDataApi,
  actionLink,
  staticTableData,
  isStaticTable = false,
  breadcrumbData,
}) {
  const { setBreadcrumbs } = useAppContext();
  const { trigger } = useDataContext();
  const [tableMeta, setTableMeta] = useState({
    columns: {
      vehicle_name: "Vehicle Name",
      vehicle_type: "Vehicle Type",
      vehicle_no: "Vehicle No",
      is_ac_available: "AC Availability",
      last_km: "Last KM",
    },
    filters: {
      vehicle_type: "Vehicle Type",
      is_ac_available: "AC Availability",
    },
    filter_data: {
      vehicle_type: [
        {
          id: "Car",
          identity: "Car",
        },
        {
          id: "Bike",
          identity: "Bike",
        },
        {
          id: "Truck",
          identity: "Truck",
        },
        {
          id: "Bus",
          identity: "Bus",
        },
      ],
      is_ac_available: [
        {
          id: true,
          identity: "Yes",
        },
        {
          id: false,
          identity: "No",
        },
      ],
    },
  });
  const [tableData, setTableData] = useState({
    count: 36,
    next: "https://example.com/cms/vehicle/list/?page=2",
    previous: null,
    results: [
      {
        id: 36,
        uuid: "17d19e62-a7cc-4f75-8f5c-81cc524c500e",
        vehicle_name: "Toyota Corolla",
        vehicle_type: "Car",
        vehicle_no: "TN01AB1234",
        is_ac_available: "Yes",
        last_km: "25000",
      },
      {
        id: 35,
        uuid: "dc22bf52-1ceb-409e-911a-2c958db74406",
        vehicle_name: "Honda Civic",
        vehicle_type: "Car",
        vehicle_no: "KA05XY9876",
        is_ac_available: "No",
        last_km: "18000",
      },
    ],
  });
  const [selectedFilters, setSelectedFilters] = useState({});

  const paginationData = {
    next: tableData?.next,
    previous: tableData?.previous,
  };
  useEffect(() => {
    setBreadcrumbs(breadcrumbData);
  }, [setBreadcrumbs]);

  useEffect(() => {
    const FetchData = async () => {
      const response = await tableMetaApi();
      setTableMeta(response);
    };

    // !isStaticTable && FetchData();
  }, []);

  useEffect(() => {
    const FetchData = async () => {
      const response = await tableDataApi(selectedFilters);
      setTableData(response);
    };
    // !isStaticTable && FetchData();
  }, [selectedFilters, trigger]);

  if (!(tableData && tableMeta) && !isStaticTable) {
    return;
  }

  return (
    <div className="card">
      <div className="card-header border-bottom">
        <h5 className="card-title mb-0">Filters</h5>
        {!isStaticTable && (
          <Filters
            filterMetaData={tableMeta}
            setSelectedFilters={setSelectedFilters}
          />
        )}
      </div>
      <div className="card-datatable">
        <div className="dataTables_wrapper dt-bootstrap5 no-footer">
          <DataTable
            tableMeta={
              isStaticTable ? staticTableData.columns : tableMeta.columns
            }
            tableData={isStaticTable ? staticTableData : tableData}
            actionLink={actionLink}
          />
          <div className="row">
            <div className="col-sm-12 col-md-12">
              {!isStaticTable && (
                <Pagination
                  paginationData={paginationData}
                  dataFunction={setTableData}
                  // totalCount={80}
                />
              )}
            </div>
          </div>
          <div style={{ width: "1%" }} />
        </div>
      </div>
    </div>
  );
}
