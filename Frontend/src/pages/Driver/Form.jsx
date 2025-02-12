import React from "react";
import { DynamicForm } from "@components";
import * as Yup from "yup";
import { getDriverCud, postDriverCud, patchDriverCud } from "@api/urls";

const validationSchema = Yup.object().shape({
  identity: Yup.string().trim().required("Name is required"),
  driver_id: Yup.string().trim().required("Driver ID is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email format")
    .required("Email is required"),
  user_phone_number: Yup.string()
    .trim()
    .matches(/^[0-9]{10}$/, "Phone Number must be a 10-digit number")
    .required("Phone Number is required"),
  password: Yup.string().trim().min("Password minimun 4 lettters required"),
  address: Yup.string().trim().required("Address is required"),
  license_no: Yup.string().trim().required("License Number is required"),
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
    driver_id: {
      type: "text",
      defaultValue: "",
      label: "Driver ID",
      placeholder: "Enter Driver ID",
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
    license_no: {
      type: "text",
      defaultValue: "",
      label: "License Number",
      placeholder: "Enter License Number",
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
      redirectUrl="/driver/list"
      apiFunction={{
        getForm: getDriverCud,
        postForm: postDriverCud,
        patchForm: patchDriverCud,
      }}
      breadcrumbData={{
        title: "Driver Form",
        sidebarActiveId: 4,
        list: [
          {
            label: "Driver list",
            path: "/driver/list",
          },
          {
            label: "Driver Form",
          },
        ],
      }}
    />
  );
}
