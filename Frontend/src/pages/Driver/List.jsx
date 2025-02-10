import React from "react";
import { DynamicTable } from "@components";
import { driverTableMeta, driverTableData } from "@api/urls";

export default function CategoryList() {
  return (
    <DynamicTable
      tableMetaApi={driverTableMeta}
      tableDataApi={driverTableData}
      actionLink={{
        viewLink: "#",
        editLink: "/driver/form",
        deleteLink: "#",
      }}
      breadcrumbData={{
        title: "Driver list",
        sidebarActiveId: 4,
        list: [
          {
            label: "Driver list",
          },
        ],
        reportLink: "#",
        addButtonData: {
          name: "Add Driver",
          link: "/driver/form",
        },
      }}
    />
  );
}
