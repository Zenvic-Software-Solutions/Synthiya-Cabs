import React from "react";
import { DynamicForm } from "@components";
import * as Yup from "yup";
import {} from "@api/urls";

const validationSchema = Yup.object().shape({
  identity: Yup.string().trim().required("Employee Name is required"),

  email: Yup.string()
    .trim()
    .email("Invalid email format")
    .required("Email is required"),

  phone_number: Yup.string()
    .trim()
    .matches(/^[0-9]{10}$/, "Phone Number must be a 10-digit number")
    .required("Phone Number is required"),

  role: Yup.string().trim().required("Role is required"),

  is_active: Yup.boolean().required("Active Status is required"),
  password: Yup.string()
    .trim()
    .min(4, "Password must be at least 4 characters long"),
});

export default function index() {
  const FormFields = {
    identity: {
      type: "text",
      defaultValue: "",
      label: "Employee Name",
      placeholder: "Employee Name",
    },
    email: {
      type: "text",
      defaultValue: "",
      label: "Email",
      placeholder: "Email",
    },
    phone_number: {
      type: "text",
      defaultValue: "",
      label: "Phone Number",
      placeholder: "Phone Number",
    },

    is_active: {
      type: "boolean",
      label: "Active Status",
      defaultValue: "",
      dropdownOptions: [
        { id: true, identity: "Active" },
        { id: false, identity: "InActive" },
      ],
    },
    password: {
      type: "text",
      defaultValue: "",
      label: "Password",
      placeholder: "Enter new password",
    },
  };
  return (
    <DynamicForm
      formFields={FormFields}
      validationSchema={validationSchema}
      redirectUrl="/rolesandpermissions/list"
      apiFunction={{
        getForm: "",
        postForm: "",
        patchForm: "",
      }}
      breadcrumbData={{
        title: "Employee Form",
        activeID: 2,
        list: [
          {
            label: "Employee list",
            path: "/employee/list",
          },
          {
            label: "Employee Form",
          },
        ],
      }}
    />
  );
}
