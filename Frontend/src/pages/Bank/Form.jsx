import React from "react";
import { DynamicForm } from "@components";
import * as Yup from "yup";
import {} from "@api/urls";

const validationSchema = Yup.object().shape({
  vehicle_name: Yup.string().trim().required("Vehicle Name is required"),

  vehicle_type: Yup.string().trim().required("Vehicle Type is required"),

  vehicle_no: Yup.string()
    .trim()
    .matches(/^[A-Za-z0-9\s-]+$/, "Invalid Vehicle Number format")
    .required("Vehicle Number is required"),

  is_ac_available: Yup.boolean().required("AC Availability is required"),

  last_km: Yup.number()
    .typeError("Last KM must be a number")
    .positive("Last KM must be a positive number")
    .required("Last KM is required"),
});

export default function index() {
  const FormFields = {
    vehicle_name: {
      type: "text",
      defaultValue: "",
      label: "Vehicle Name",
      placeholder: "Enter Vehicle Name",
    },
    vehicle_type: {
      type: "text",
      defaultValue: "",
      label: "Vehicle Type",
      placeholder: "Enter Vehicle Type",
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
    last_km: {
      type: "text",
      defaultValue: "",
      label: "Last KM",
      placeholder: "Enter Last KM",
    },
  };
  return (
    <DynamicForm
      formFields={FormFields}
      validationSchema={validationSchema}
      redirectUrl="/vechile/list"
      apiFunction={{
        getForm: "",
        postForm: "",
        patchForm: "",
      }}
      breadcrumbData={{
        title: "Vehicle Form",
        sidebarActiveId: 7,
        list: [
          {
            label: "Vehicle list",
            path: "/vechile/list",
          },
          {
            label: "Vehicle Form",
          },
        ],
      }}
    />
  );
}
