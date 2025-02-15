import React, { useEffect, useState } from "react";
import { DataTable, Pagination, Filters, Loader } from "@components";
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
  const [tableMeta, setTableMeta] = useState();
  const [tableData, setTableData] = useState();
  const [selectedFilters, setSelectedFilters] = useState({});

  const paginationData = {
    next: tableData?.next,
    previous: tableData?.previous,
  };
  useEffect(() => {
    if (breadcrumbData) {
      setBreadcrumbs(breadcrumbData);
    }
  }, [setBreadcrumbs]);

  useEffect(() => {
    const FetchData = async () => {
      const response = await tableMetaApi();
      setTableMeta(response);
    };

    !isStaticTable && FetchData();
  }, []);

  useEffect(() => {
    const FetchData = async () => {
      const response = await tableDataApi(selectedFilters);
      setTableData(response);
    };
    !isStaticTable && FetchData();
  }, [selectedFilters, trigger]);

  if (!(tableData && tableMeta) && !isStaticTable) {
    return <Loader />;
  }

  return (
    <div className="card">
      <div className="card-header border-bottom">
        <h5 className="card-title mb-0">Filters</h5>
        {!isStaticTable?.filters && (
          <Filters
            filterMetaData={isStaticTable ? staticTableData : tableMeta}
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
            tableData={
              isStaticTable ? staticTableData.results : tableData.results
            }
            actionLink={actionLink}
          />
          <div className="row">
            <div className="col-sm-12 col-md-12">
              {!isStaticTable?.pagination && (
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
