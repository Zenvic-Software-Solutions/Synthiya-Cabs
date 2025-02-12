import React from "react";
import { DynamicTable } from "@components";
import {
  otherCabsVehicleTableMeta,
  otherCabsVehicleTableData,
} from "@api/urls";
import { useParams } from "react-router-dom";

export default function index() {
  const { uuid } = useParams();
  return (
    <DynamicTable
      tableMetaApi={() => otherCabsVehicleTableMeta(uuid)}
      tableDataApi={(extra) => otherCabsVehicleTableData(uuid, extra)}
      actionLink={{
        viewLink: "#",
        editLink: "/othercabs-vehicle/form",
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
          name: "Add OtherCabs Vehicle",
          link: "/othercabs-vehicle/form",
        },
      }}
    />
  );
}
