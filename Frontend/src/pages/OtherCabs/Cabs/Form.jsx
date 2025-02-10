import React from "react";
import { DynamicForm } from "@components";
import * as Yup from "yup";
import {
  getOtherCabsCud,
  postOtherCabsCud,
  patchOtherCabsCud,
} from "@api/urls";

const validationSchema = Yup.object().shape({
  identity: Yup.string().trim().required("Cab Service Name is required"),

  owner_name: Yup.string().trim().required("Owner Name is required"),

  phone_number: Yup.string()
    .trim()
    .matches(/^[0-9]{10}$/, "Phone Number must be a 10-digit number")
    .required("Phone Number is required"),

  address: Yup.string().trim().required("Address is required"),

  balance: Yup.number()
    .typeError("Balance must be a number")
    .positive("Balance must be a positive number")
    .required("Balance is required"),
});

export default function index() {
  const FormFields = {
    identity: {
      type: "text",
      defaultValue: "",
      label: "Cab Service Name",
      placeholder: "Enter Cab Service Name",
    },
    owner_name: {
      type: "text",
      defaultValue: "",
      label: "Owner Name",
      placeholder: "Enter Owner Name",
    },
    phone_number: {
      type: "text",
      defaultValue: "",
      label: "Phone Number",
      placeholder: "Enter Phone Number",
    },
    address: {
      type: "text",
      defaultValue: "",
      label: "Address",
      placeholder: "Enter Address",
    },
    balance: {
      type: "number",
      defaultValue: "",
      label: "Balance",
      placeholder: "Enter Balance Amount",
    },
  };
  return (
    <DynamicForm
      formFields={FormFields}
      validationSchema={validationSchema}
      redirectUrl="/othercabs/list"
      apiFunction={{
        getForm: getOtherCabsCud,
        postForm: postOtherCabsCud,
        patchForm: patchOtherCabsCud,
      }}
      breadcrumbData={{
        title: "Other-Cabs Form",
        sidebarActiveId: 5,
        list: [
          {
            label: "Other-Cabs list",
            path: "/othercabs/list",
          },
          {
            label: "Other-Cabs Form",
          },
        ],
      }}
    />
  );
}
