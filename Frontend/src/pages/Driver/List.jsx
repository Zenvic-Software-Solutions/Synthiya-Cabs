import React from "react";
import { DynamicTable } from "@components";
import { driverTableMeta, driverTableData } from "@api/urls";

export default function index() {
  return (
    <DynamicTable
      tableMetaApi={driverTableMeta}
      tableDataApi={driverTableData}
      actionLink={{
        viewLink: "/driver/view",
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

        addButtonData: {
          name: "Add Driver",
          link: "/driver/form",
        },
      }}
    />
  );
}
