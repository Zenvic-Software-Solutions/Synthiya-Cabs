import React from "react";
import { DynamicTable } from "@components";
import { otherCabsTableMeta, otherCabsTableData } from "@api/urls";

export default function CategoryList() {
  return (
    <DynamicTable
      tableMetaApi={otherCabsTableMeta}
      tableDataApi={otherCabsTableData}
      actionLink={{
        viewLink: "#",
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
        reportLink: "#",
        addButtonData: {
          name: "Add Other-Cabs",
          link: "/othercabs/form",
        },
      }}
    />
  );
}
