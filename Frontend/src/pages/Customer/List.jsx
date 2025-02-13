import React from "react";
import { DynamicTable } from "@components";
import { customerTableMeta, customerTableData } from "@api/urls";

export default function index() {
  return (
    <DynamicTable
      tableMetaApi={customerTableMeta}
      tableDataApi={customerTableData}
      actionLink={{
        viewLink: "/customer/view",
        editLink: "/customer/form",
        deleteLink: "#",
      }}
      breadcrumbData={{
        title: "Customer list",
        sidebarActiveId: 3,
        list: [
          {
            label: "Customer list",
          },
        ],

        addButtonData: {
          name: "Add Customer",
          link: "/customer/form",
        },
      }}
    />
  );
}
