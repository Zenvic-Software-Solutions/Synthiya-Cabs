import React from "react";
import { DynamicTable } from "@components";
import { otherCabsDriverTableMeta, otherCabsDriverTableData } from "@api/urls";
import { useParams } from "react-router-dom";

export default function index() {
  const { uuid } = useParams();
  return (
    <DynamicTable
      tableMetaApi={() => otherCabsDriverTableMeta(uuid)}
      tableDataApi={(extra) => otherCabsDriverTableData(uuid, extra)}
      actionLink={{
        editLink: "/othercabs-driver/form",
        deleteLink: "#",
      }}
      breadcrumbData={{
        title: "OtherCabs View",
        sidebarActiveId: 5,
        list: [
          {
            label: "OtherCabs View",
          },
        ],

        addButtonData: {
          name: "Add OtherCabs Driver",
          link: "/othercabs-driver/form",
        },
      }}
    />
  );
}
