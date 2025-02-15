import React from "react";
import { DynamicTable } from "@components";
import { financehistoryTableMeta, financehistoryTableData } from "@api/urls";

export default function index({uuid}) {
  return (
    <DynamicTable
      tableMetaApi={financehistoryTableMeta}
      tableDataApi={financehistoryTableData}
      actionLink={{
        
        editLink: "/financehistory/form",
        deleteLink: "#",
      }}
      breadcrumbData={{
        title: "Finance View",
        sidebarActiveId: 19,
        list: [
            {
              label: "Finance List",
              path: "/finance/list",
            },
            {
              label: "Finance View",
            },
          ],

        addButtonData: {
          name: "Add Finance history",
          link: "/financehistory/form",
        },
      }}
    />
  );
}
