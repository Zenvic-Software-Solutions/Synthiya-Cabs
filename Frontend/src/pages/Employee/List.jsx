import React from "react";
import { DynamicTable } from "@components";
import { employeeTableData, employeeTableMeta } from "@api/urls";

export default function CategoryList() {
  return (
    <DynamicTable
      tableMetaApi={employeeTableMeta}
      tableDataApi={employeeTableData}
      actionLink={{
        viewLink: "/employee/view",
        editLink: "/employee/form",
      }}
      breadcrumbData={{
        title: "Employee list",
        activeID: 2,
        list: [
          {
            label: "Employee list",
          },
        ],
        reportLink: "#",
        addButtonData: {
          name: "Add Employee",
          link: "/employee/form",
        },
      }}
    />
  );
}
