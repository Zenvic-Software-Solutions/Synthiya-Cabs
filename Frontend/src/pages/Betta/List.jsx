import React from "react";
import { DynamicTable } from "@components";
import { bettaTableMeta, bettaTableData } from "@api/urls";

export default function index() {
  return (
    <DynamicTable
      tableMetaApi={bettaTableMeta}
      tableDataApi={bettaTableData}
      actionLink={{
        viewLink: "/betta/view",
        editLink: "/betta/form",
        deleteLink: "#",
      }}
      breadcrumbData={{
        title: "Betta list",
        sidebarActiveId: 13,
        list: [
          {
            label: "Betta list",
          },
        ],

        addButtonData: {
          name: "Add Betta",
          link: "/betta/form",
        },
      }}
    />
  );
}
