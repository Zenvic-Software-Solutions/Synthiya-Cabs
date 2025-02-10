import React from "react";
import { DynamicForm } from "@components";
import * as Yup from "yup";
import { getBankCUD, postBankCUD, patchBankCUD} from "@api/urls";                                                 

const validationSchema = Yup.object().shape({
  identity: Yup.string().trim().required("Bank Name is required"),

  branch: Yup.string().trim().required("Bank Type is required"),

  account_no: Yup.string()
    .trim()
    .matches(/^[A-Za-z0-9\s-]+$/, "Invalid Bank Number format")
    .required("Bank Number is required"),

  account_holder_name: Yup.boolean().required("Account Holder is required"),

  ifsc_code: Yup.number()
    .typeError("IFSC Number must be a number")
    // .positive("IFSC Number be a positive number")
    .required("IFSC Number is required"),
});

export default function index() {
  const FormFields = {
    identity: {
      type: "text",
      defaultValue: "",
      label: "Bank Name",
      placeholder: "Enter Bank Name",
    },
    branch: {
      type: "text",
      defaultValue: "",
      label: "Bank Name",
      placeholder: "Enter Branch Name",
    },
    account_no: {
      type: "text",
      defaultValue: "",
      label: "Bank Number",
      placeholder: "Enter Bank Number",
    },
    account_holder_name: {
      type: "text",
      label: "Account Holder Name",
      defaultValue: "",
      placeholder:"Enter Account Holder Name"

    },
    ifsc_code: {
      type: "text",
      defaultValue: "",
      label: "IFSC Code",
      placeholder: "",
    },
  };
  return (
    <DynamicForm
      formFields={FormFields}
      validationSchema={validationSchema}
      redirectUrl="/bank/list"
      apiFunction={{
        getForm: getBankCUD,
        postForm: postBankCUD,
        patchForm: patchBankCUD,
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
