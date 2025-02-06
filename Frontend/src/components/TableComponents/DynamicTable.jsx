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
    count: 36,
    columns: {
      "image_details.file": "Images",
      full_name: "Name",
      email: "Email",
      phone_number: "Phone",
      "role_details.identity": "Role",
      is_working_profession: "Working Profession",
      status: "Status",
    },
    filters: {
      role: "Role",
      education: "Education",
      is_working_profession: "Working Profession",
    },
    filter_data: {
      education: [
        {
          id: "Secondary School",
          identity: "Secondary School",
        },
        {
          id: "Higher Secondary",
          identity: "Higher Secondary",
        },
        {
          id: "Diplomo",
          identity: "Diplomo",
        },
        {
          id: "Bachelors",
          identity: "Bachelors",
        },
        {
          id: "Masters",
          identity: "Masters",
        },
      ],
      is_working_profession: [
        {
          id: true,
          identity: "Yes",
        },
        {
          id: false,
          identity: "No",
        },
      ],
      role: [
        {
          id: "1",
          identity: "Admin",
        },
      ],
    },
  });
  const [tableData, setTableData] = useState({
    count: 36,
    next: "https://backendlive.nexemy.com/cms/user/list/?page=2",
    previous: null,
    results: [
      {
        id: 36,
        uuid: "17d19e62-a7cc-4f75-8f5c-81cc524c500e",
        full_name: "uma",
        email: "umasigmaconstellation@gmail.com",
        phone_number: null,
        role_details: null,
        image_details: null,
        is_working_profession: "No",
        education: null,
        current_profession: null,
        status: "Active",
      },
      {
        id: 35,
        uuid: "dc22bf52-1ceb-409e-911a-2c958db74406",
        full_name: "Jesper",
        email: "jesper@gmail.com",
        phone_number: null,
        role_details: null,
        image_details: null,
        is_working_profession: "No",
        education: null,
        current_profession: null,
        status: "Active",
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
