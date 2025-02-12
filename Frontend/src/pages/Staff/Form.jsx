import React from "react";
import { DynamicForm } from "@components";
import * as Yup from "yup";
import { getStaffCud, postStaffCud, patchStaffCud } from "@api/urls";

const validationSchema = Yup.object().shape({
  identity: Yup.string().trim().required("Name is required"),
  staff_id: Yup.string().trim().required("Staff ID is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email format")
    .required("Email is required"),
  user_phone_number: Yup.string()
    .trim()
    .matches(/^[0-9]{10}$/, "Phone Number must be a 10-digit number")
    .required("Phone Number is required"),
  password: Yup.string().trim().min(4, "Password must be 4 letters required"),
  address: Yup.string().trim().required("Address is required"),
  dob: Yup.date()
    .typeError("Invalid Birth Date format")
    .required("Birth Date is required"),
  date_of_joining: Yup.date()
    .typeError("Invalid Joining Date format")
    .required("Joining Date is required"),
});

export default function Index() {
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
    email: {
      type: "text",
      defaultValue: "",
      label: "Email",
      placeholder: "Enter Email",
    },
    user_phone_number: {
      type: "text",
      defaultValue: "",
      label: "Phone Number",
      placeholder: "Enter Phone Number",
    },
    password: {
      type: "password",
      defaultValue: "",
      label: "Password",
      placeholder: "Enter Password",
    },
    address: {
      type: "text",
      defaultValue: "",
      label: "Address",
      placeholder: "Enter Address",
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
        getForm: getStaffCud,
        postForm: postStaffCud,
        patchForm: patchStaffCud,
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
