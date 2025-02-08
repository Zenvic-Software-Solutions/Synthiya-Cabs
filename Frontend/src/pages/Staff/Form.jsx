import React from "react";
import { DynamicForm } from "@components";
import * as Yup from "yup";
import { getstaffCud, poststaffCud, patchstaffCud } from "@api/urls";

const validationSchema = Yup.object().shape({
  identity: Yup.string().trim().required("Name is required"),

  staff_id: Yup.string().trim().required("Staff ID is required"),

  phone_number: Yup.string()
    .trim()
    .matches(/^[0-9]{10}$/, "Phone Number must be a 10-digit number")
    .required("Phone Number is required"),

  dob: Yup.date()
    .typeError("Invalid Birth Date format")
    .required("Birth Date is required"),

  date_of_joining: Yup.date()
    .typeError("Invalid Joining Date format")
    .required("Joining Date is required"),
});

export default function index() {
  const FormFields = {
    identity: {
      type: "text",
      defaultValue: "",
      label: "Name",
      placeholder: "Enter Name",
    },
    staff_id: {
      type: "text",
      defaultValue: "",
      label: "Staff ID",
      placeholder: "Enter Staff ID",
    },
    phone_number: {
      type: "text",
      defaultValue: "",
      label: "Phone Number",
      placeholder: "Enter Phone Number",
    },
    dob: {
      type: "date",
      defaultValue: "",
      label: "Birth Date",
      placeholder: "Select Birth Date",
    },
    date_of_joining: {
      type: "date",
      defaultValue: "",
      label: "Joining Date",
      placeholder: "Select Joining Date",
    },
  };
  return (
    <DynamicForm
      formFields={FormFields}
      validationSchema={validationSchema}
      redirectUrl="/staff/list"
      apiFunction={{
        getForm: getstaffCud,
        postForm: poststaffCud,
        patchForm: patchstaffCud,
      }}
      breadcrumbData={{
        title: "Staff Form",
        sidebarActiveId: 3,
        list: [
          {
            label: "Staff list",
            path: "/staff/list",
          },
          {
            label: "Staff Form",
          },
        ],
      }}
    />
  );
}
