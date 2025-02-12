import React from "react";
import { DynamicTable } from "@components";
import { otherCabsTableMeta, otherCabsTableData } from "@api/urls";

export default function index() {
  return (
    <DynamicTable
      tableMetaApi={otherCabsTableMeta}
      tableDataApi={otherCabsTableData}
      actionLink={{
        viewLink: "/othercabs/view",
        editLink: "/othercabs/form",
        deleteLink: "#",
      }}
      breadcrumbData={{
        title: "Other-Cabs list",
        sidebarActiveId: 5,
        list: [
          {
            label: "Other-Cabs list",
          },
        ],

        addButtonData: {
          name: "Add Other-Cabs",
          link: "/othercabs/form",
        },
      }}
    />
  );
}
