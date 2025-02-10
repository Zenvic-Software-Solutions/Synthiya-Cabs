import React from "react";
import { DynamicTable } from "@components";
import { bankTableMeta, bankTableData } from "@api/urls";

export default function CategoryList() {
  return (
    <DynamicTable
      tableMetaApi={bankTableMeta}
      tableDataApi={bankTableData}
      actionLink={{
        viewLink: "#",
        editLink: "/bankform",
        deleteLink: "#",
      }}
      breadcrumbData={{
        title: "Bank list",
        sidebarActiveId: 8,
        list: [
          {
            label: "Bank list",
          },
        ],
        reportLink: "#",
        addButtonData: {
          name: "Add Bank",
          link: "/bank/form",
        },
      }}
    />
  );
}
