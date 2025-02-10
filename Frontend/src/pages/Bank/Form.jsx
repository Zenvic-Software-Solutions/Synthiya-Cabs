import React from "react";
import { DynamicForm } from "@components";
import * as Yup from "yup";
import {} from "@api/urls";

const validationSchema = Yup.object().shape({
  bank_name: Yup.string().trim().required("Bank Name is required"),

  bank_type: Yup.string().trim().required("Bank Type is required"),

  bank_no: Yup.string()
    .trim()
    .matches(/^[A-Za-z0-9\s-]+$/, "Invalid Bank Number format")
    .required("Bank Number is required"),

  is_ac_available: Yup.boolean().required("AC Availability is required"),

  last_km: Yup.number()
    .typeError("Last KM must be a number")
    .positive("Last KM must be a positive number")
    .required("Last KM is required"),
});

export default function index() {
  const FormFields = {
    bank_name: {
      type: "text",
      defaultValue: "",
      label: "Bank Name",
      placeholder: "Enter Bank Name",
    },
    bank_type: {
      type: "text",
      defaultValue: "",
      label: "Bank Type",
      placeholder: "Enter Bank Type",
    },
    bank_no: {
      type: "text",
      defaultValue: "",
      label: "Bank Number",
      placeholder: "Enter Bank Number",
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
      redirectUrl="/bank/list"
      apiFunction={{
        getForm: "",
        postForm: "",
        patchForm: "",
      }}
      breadcrumbData={{
        title: "Bank Form",
        sidebarActiveId: 7,
        list: [
          {
            label: "Bank list",
            path: "/bank/list",
          },
          {
            label: "Bank Form",
          },
        ],
      }}
    />
  );
}
