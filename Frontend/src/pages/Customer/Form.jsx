import React from "react";
import { DynamicForm } from "@components";
import * as Yup from "yup";
import { getCustomerCud, postCustomerCud, patchCustomerCud } from "@api/urls";

const validationSchema = Yup.object().shape({
  identity: Yup.string().trim().required("Name is required"),
  user_phone_number: Yup.string()
    .trim()
    .matches(/^[0-9]{10}$/, "Phone Number must be a 10-digit number")
    .required("Phone Number is required"),
});

export default function Index() {
  const FormFields = {
    identity: {
      type: "text",
      defaultValue: "",
      label: "Name",
      placeholder: "Enter Name",
    },
    user_phone_number: {
      type: "text",
      defaultValue: "",
      label: "Phone Number",
      placeholder: "Enter Phone Number",
    },
  };

  return (
    <DynamicForm
      formFields={FormFields}
      validationSchema={validationSchema}
      redirectUrl="/customer/list"
      apiFunction={{
        getForm: getCustomerCud,
        postForm: postCustomerCud,
        patchForm: patchCustomerCud,
      }}
      breadcrumbData={{
        title: "Customer Form",
        sidebarActiveId: 3,
        list: [
          {
            label: "Customer list",
            path: "/customer/list",
          },
          {
            label: "Customer Form",
          },
        ],
      }}
    />
  );
}
