import React from "react";
import { DynamicTable } from "@components";
import { staffTableData, staffTableMeta } from "@api/urls";

export default function CategoryList() {
  return (
    <DynamicTable
      tableMetaApi={staffTableMeta}
      tableDataApi={staffTableData}
      actionLink={{
        viewLink: "/staff/view",
        editLink: "/staff/form",
        deleteLink: "#",
      }}
      breadcrumbData={{
        title: "Staff list",
        sidebarActiveId: 3,
        list: [
          {
            label: "Staff list",
          },
        ],
        reportLink: "#",
        addButtonData: {
          name: "Add Staff",
          link: "/staff/form",
        },
      }}
    />
  );
}
