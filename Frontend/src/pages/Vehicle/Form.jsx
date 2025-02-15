import React, { useEffect, useState } from "react";
import { DynamicForm } from "@components";
import * as Yup from "yup";
import {
  vehicleTableMeta,
  getVehicleCud,
  postVehicleCud,
  patchVehicleCud,
} from "@api/urls";

const validationSchema = Yup.object().shape({
  identity: Yup.string().trim().required("Vehicle Name is required"),
  vehicle_type: Yup.string().trim().required("Vehicle Type is required"),
  vehicle_no: Yup.string().trim().required("Vehicle No is required"),
  is_ac_available: Yup.boolean().required("AC Availability is required"),
  last_km: Yup.number()
    .typeError("Last KM must be a number")
    .positive("Last KM must be a positive number")
    .required("Last KM is required"),
});

export default function Index() {
  const [formFieldMeta, setFormFieldMeta] = useState();

  useEffect(() => {
    const fetchTableMeta = async () => {
      const response = await vehicleTableMeta();
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
      dropdownOptions: formFieldMeta.filter_data?.vehicle_type || [],
    },
    vehicle_no: {
      type: "text",
      defaultValue: "",
      label: "Vehicle No",
      placeholder: "Enter Vehicle No",
    },
    is_ac_available: {
      type: "boolean",
      defaultValue: "",
      label: "AC Available",
      dropdownOptions: [
        { id: true, identity: "Yes" },
        { id: false, identity: "No" },
      ],
    },
    last_km: {
      type: "number",
      defaultValue: "",
      label: "Last KM",
      placeholder: "Enter Last KM",
    },
  };

  return (
    <DynamicForm
      formFields={FormFields}
      validationSchema={validationSchema}
      redirectUrl="/vehicle/list"
      apiFunction={{
        getForm: getVehicleCud,
        postForm: postVehicleCud,
        patchForm: patchVehicleCud,
      }}
      breadcrumbData={{
        title: "Vehicle Form",
        sidebarActiveId: 7,
        list: [
          {
            label: "Vehicle list",
            path: "/vehicle/list",
          },
          {
            label: "Vehicle Form",
          },
        ],
      }}
    />
  );
}
