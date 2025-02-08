import React from "react";
import { DynamicTable } from "@components";
import { otherCabsDriverTableMeta, otherCabsDriverTableData } from "@api/urls";

export default function CategoryList() {
  return (
    <DynamicTable
      tableMetaApi={otherCabsDriverTableMeta}
      tableDataApi={otherCabsDriverTableData}
      actionLink={{
        viewLink: "#",
        editLink: "/othercabs-driver/form",
        deleteLink: "#",
      }}
      breadcrumbData={{
        title: "OtherCabs Driver list",
        sidebarActiveId: 4,
        list: [
          {
            label: "OtherCabs Driver list",
          },
        ],
        reportLink: "#",
        addButtonData: {
          name: "Add OtherCabs Driver",
          link: "/othercabs-driver/form",
        },
      }}
    />
  );
}
