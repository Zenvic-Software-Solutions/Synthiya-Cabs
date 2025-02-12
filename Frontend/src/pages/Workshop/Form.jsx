import React from "react";
import { DynamicForm } from "@components";
import * as Yup from "yup";
import { getWorkshopCud, postWorkshopCud, patchWorkshopCud } from "@api/urls";

const validationSchema = Yup.object().shape({
  identity: Yup.string().trim().required("Workshop Name is required"),

  owner_name: Yup.string().trim().required("Owner Name is required"),

  phone: Yup.string()
    .trim()
    .matches(/^[0-9]{10}$/, "Phone Number must be a 10-digit number")
    .required("Phone Number is required"),

    address: Yup.string().trim().required("Address is required"),

    description: Yup.string().trim(),

    specialist: Yup.string().trim().required("Specialist is required"),

    balance: Yup.string().trim(),
});

export default function index() {
  const FormFields = {
    identity: {
      type: "text",
      defaultValue: "",
      label: "Workshop Name",
      placeholder: "Enter Workshop Name",
    },
    owner_name: {
      type: "text",
      defaultValue: "",
      label: "Owner Name",
      placeholder: "Enter Owner Name",
    },
    phone: {
      type: "text",
      defaultValue: "",
      label: "Phone Number",
      placeholder: "Enter Phone Number",
    },
    address: {
      type: "text",
      defaultValue: "",
      label: "Address",
      placeholder: "Enter Workshop Address",
    },
    description: {
      type: "text",
      defaultValue: "",
      label: "Description",
      placeholder: "Enter Description",
    },
    specialist: {
      type: "text",
      defaultValue: "",
      label: "Specialist",
      placeholder: "Enter Specialist",
    },
    balance: {
      type: "number",
      defaultValue: "",
      label: "Balance",
      placeholder: "Enter Balance",
    },
  };
  return (
    <DynamicForm
      formFields={FormFields}
      validationSchema={validationSchema}
      redirectUrl="/workshop/list"
      apiFunction={{
        getForm: getWorkshopCud,
        postForm: postWorkshopCud,
        patchForm: patchWorkshopCud,
      }}
      breadcrumbData={{
        title: "Workshop Form",
        sidebarActiveId: 9,
        list: [
          {
            label: "Workshop list",
            path: "/workshop/list",
          },
          {
            label: "Workshop Form",
          },
        ],
      }}
    />
  );
}
