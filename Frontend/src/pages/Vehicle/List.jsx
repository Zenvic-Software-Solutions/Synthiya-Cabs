import React from "react";
import { DynamicTable } from "@components";
import { vehicleTableData, vehicleTableMeta } from "@api/urls";

export default function index() {
  return (
    <DynamicTable
      tableMetaApi={vehicleTableMeta}
      tableDataApi={vehicleTableData}
      actionLink={{
        viewLink: "#",
        editLink: "/vehicle/form",
        deleteLink: "#",
      }}
      breadcrumbData={{
        title: "Vehicle list",
        sidebarActiveId: 7,
        list: [
          {
            label: "Vehicle list",
          },
        ],

        addButtonData: {
          name: "Add Vehicle",
          link: "/vehicle/form",
        },
      }}
    />
  );
}
