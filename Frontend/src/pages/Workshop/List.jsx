import React from "react";
import { DynamicTable } from "@components";
import { workshopTableMeta, workshopTableData } from "@api/urls";

export default function WorkshopList() {
  return (
    <DynamicTable
      tableMetaApi={workshopTableMeta}
      tableDataApi={workshopTableData}
      actionLink={{
        viewLink: "#",
        editLink: "/workshop/form",
        deleteLink: "#",
      }}
      breadcrumbData={{
        title: "Workshop list",
        sidebarActiveId: 9,
        list: [
          {
            label: "Workshop list",
          },
        ],

        addButtonData: {
          name: "Add Workshop",
          link: "/workshop/form",
        },
      }}
    />
  );
}
