import React, { useEffect, useState } from "react";
import { DynamicForm } from "@components";
import * as Yup from "yup";
import {
  getOtherCabsVehicleCud,
  postOtherCabsVehicleCud,
  patchOtherCabsVehicleCud,
  otherCabsVehicleTableMeta,
} from "@api/urls";

const validationSchema = Yup.object().shape({
  identity: Yup.string().trim().required("Vehicle Name is required"),

  vehicle_type: Yup.string().trim().required("Vehicle Type is required"),

  other_cab_name: Yup.string().trim().required("Cab service Name is required"),

  vehicle_no: Yup.string()
    .trim()
    .matches(/^[A-Za-z0-9\s-]+$/, "Invalid Vehicle Number format")
    .required("Vehicle Number is required"),

  is_ac_available: Yup.boolean().required("AC Availability is required"),

  // last_km: Yup.number()
  //   .typeError("Last KM must be a number")
  //   .positive("Last KM must be a positive number")
  //   .required("Last KM is required"),
});

export default function index() {
 

  const [formFieldMeta, setFormFieldMeta] = useState();
const [uuid, setUuid] = useState(localStorage.getItem("othercabs_uuid"));
  useEffect(() => {
    const fetchTableMeta = async () => {
      const response = await otherCabsVehicleTableMeta();
      setFormFieldMeta(response);
    };
    fetchTableMeta();
  }, []);

  if (!formFieldMeta) return;

  const FormFields = {
    identity: {
      type: "text",
      defaultValue: "",
      label: "Vehicle Name",
      placeholder: "Enter Vehicle Name",
    },
    vehicle_type: {
      type: "select",
      defaultValue: "",
      label: "Vehicle Type",
      dropdownOptions: formFieldMeta.filter_data.vehicle_type || [],
    },
    other_cab_name: {
      type: "select",
      defaultValue: "",
      label: "Cab Service Name",
      dropdownOptions: formFieldMeta.filter_data.other_cab_name || [],
    },
    vehicle_no: {
      type: "text",
      defaultValue: "",
      label: "Vehicle Number",
      placeholder: "Enter Vehicle Number",
    },
    is_ac_available: {
      type: "boolean",
      label: "AC Availability",
      defaultValue: "",
      dropdownOptions: [
        { id: true, identity: "Yes" },
        { id: false, identity: "No" },
      ],
    },
    // last_km: {
    //   type: "text",
    //   defaultValue: "",
    //   label: "Last KM",
    //   placeholder: "Enter Last KM",
    // },
  };
  return (
    <DynamicForm
      formFields={FormFields}
      validationSchema={validationSchema}
      redirectUrl={`/othercabs/view/${uuid}`}
      apiFunction={{
        getForm: getOtherCabsVehicleCud,
        postForm: postOtherCabsVehicleCud,
        patchForm: patchOtherCabsVehicleCud,
      }}
      breadcrumbData={{
        title: "OtherCabs Vehicle Form",
        sidebarActiveId: 5,
        list: [
          {
            label: "Othercabs List",
            path: "/othercabs/list",
          },
          {
            label: "Othercabs View",
            path: `/othercabs/view/${uuid}`,
          },
          {
            label: "OtherCabs Vehicle Form",
          },
        ],
      }}
    />
  );
}
