import React from "react";
import { DynamicTable } from "@components";
import { bookingTableMeta, bookingTableData } from "@api/urls";

export default function index() {
  return (
    <DynamicTable
      tableMetaApi={bookingTableMeta}
      tableDataApi={bookingTableData}
      actionLink={{
        viewLink: "/booking/view",
        editLink: "/booking/form",
        deleteLink: "#",
      }}
      breadcrumbData={{
        title: "Booking list",
        sidebarActiveId: 11,
        list: [
          {
            label: "Booking list",
          },
        ],

        addButtonData: {
          name: "Add Booking",
          link: "/booking/form",
        },
      }}
    />
  );
}
