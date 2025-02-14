import React from "react";
import { DynamicTable } from "@components";
import { financeTableMeta, financeTableData } from "@api/urls";

export default function index() {
  return (
    <DynamicTable
      tableMetaApi={financeTableMeta}
      tableDataApi={financeTableData}
      actionLink={{
        viewLink: "/finance/view",
        editLink: "/finance/form",
        deleteLink: "#",
      }}
      breadcrumbData={{
        title: "Finance list",
        sidebarActiveId: 19,
        list: [
          {
            label: "Finance list",
          },
        ],

        addButtonData: {
          name: "Add Finance",
          link: "/finance/form",
        },
      }}
    />
  );
}
