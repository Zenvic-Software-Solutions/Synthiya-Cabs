import React from "react";
import { DynamicTable } from "@components";
import { bankTableMeta, bankTableData } from "@api/urls";

export default function CategoryList() {
  return (
    <DynamicTable
      tableMetaApi={vehicleTableMeta}
      tableDataApi={vehicleTableData}
      actionLink={{
        viewLink: "#",
        editLink: "/vechile/form",
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
        reportLink: "#",
        addButtonData: {
          name: "Add Vehicle",
          link: "/vechile/form",
        },
      }}
    />
  );
}
