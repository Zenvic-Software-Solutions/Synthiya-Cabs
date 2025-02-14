import React from "react";
import { DynamicTable } from "@components";
import { maintenanceTableMeta, maintenanceTableData } from "@api/urls";

export default function index() {
  return (
    <DynamicTable
      tableMetaApi={maintenanceTableMeta}
      tableDataApi={maintenanceTableData}
      actionLink={{
        viewLink: "/maintenance/view",
        editLink: "/maintenance/form",
        deleteLink: "#",
      }}
      breadcrumbData={{
        title: "Maintenance list",
        sidebarActiveId: 12,
        list: [
          {
            label: "Maintenance list",
          },
        ],

        addButtonData: {
          name: "Add Maintenance",
          link: "/maintenance/form",
        },
      }}
    />
  );
}
