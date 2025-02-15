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
        editLink: "/othercabs-vehicle/form",
        deleteLink: "#",
      }}
     
    />
  );
}
