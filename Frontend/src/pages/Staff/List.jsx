import React from "react";
import { DynamicTable } from "@components";
import { staffTableMeta, staffTableData } from "@api/urls";

export default function index() {
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

        addButtonData: {
          name: "Add Staff",
          link: "/staff/form",
        },
      }}
    />
  );
}
