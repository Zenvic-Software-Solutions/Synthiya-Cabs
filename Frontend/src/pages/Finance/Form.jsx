import React, { useEffect, useState } from "react";
import { DynamicForm } from "@components";
import * as Yup from "yup";
import {
    getfinanceCud,
    financeTableMeta,
postfinanceCud,
patchfinanceCud,
} from "@api/urls";

const validationSchema = Yup.object().shape({
    vehicle: Yup.number().required("Vehicle is required"),
    identity: Yup.string().trim().required("Finance Name is required"),
    finance_address: Yup.string().trim().required("Finance Address is required"),
    contact_number: Yup.string()
      .matches(/^[0-9]{10}$/, "Contact number must be a 10-digit number")
      .required("Contact Number is required"),
    total_amount: Yup.number()
      .typeError("Total Amount must be a number")
      .positive("Total Amount must be a positive number")
      .required("Total Amount is required"),
    total_no_due: Yup.number()
      .typeError("Total No Due must be a number")
      .positive("Total No Due must be a positive number")
      .required("Total No Due is required"),
    due_amount: Yup.number()
      .typeError("Due Amount must be a number")
      .positive("Due Amount must be a positive number")
      .required("Due Amount is required"),
    initiated_date: Yup.date().required("Initiated Date is required"),
    due_date: Yup.date().required("Due Date is required"),
  });
  

export default function Index() {
  const [formFieldMeta, setFormFieldMeta] = useState();

  useEffect(() => {
    const fetchTableMeta = async () => {
      const response = await financeTableMeta();
      setFormFieldMeta(response);
    };
    fetchTableMeta();
  }, []);

  if (!formFieldMeta) return;

  const FormFields = {
    vehicle: {
      type: "select",
      defaultValue: 1,
      label: "Vehicle",
      dropdownOptions: formFieldMeta.filter_data.vehicle || [],
    },
    identity: {
      type: "text",
      defaultValue: "abcde",
      label: "Finance Name",
      placeholder: "Enter Finance Name",
    },
    finance_address: {
      type: "text",
      defaultValue: "xyz",
      label: "Finance Address",
      placeholder: "Enter Finance Address",
    },
    contact_number: {
      type: "text",
      defaultValue: "9874563210",
      label: "Contact Number",
      placeholder: "Enter Contact Number",
    },
    total_amount: {
      type: "text",
      defaultValue: "100.00",
      label: "Total Amount",
      placeholder: "Enter Total Amount",
    },
    total_no_due: {
      type: "text",
      defaultValue: "1",
      label: "Total No Due",
      placeholder: "Enter Total No Due",
    },
    due_amount: {
      type: "text",
      defaultValue: "1000.00",
      label: "Due Amount",
      placeholder: "Enter Due Amount",
    },
    initiated_date: {
      type: "date",
      defaultValue: "2024-01-10",
      label: "Initiated Date",
    },
    due_date: {
      type: "date",
      defaultValue: "2024-11-09",
      label: "Due Date",
    },
  };
  

  return (
    <DynamicForm
      formFields={FormFields}
      validationSchema={validationSchema}
      redirectUrl="/finance/list"
      apiFunction={{
        getForm: getfinanceCud,
        postForm: postfinanceCud,
        patchForm: patchfinanceCud,
      }}
      breadcrumbData={{
        title: "Finance Form",
        sidebarActiveId: 19,
        list: [
          {
            label: "Finance list",
            path: "/finance/list",
          },
          {
            label: "Finance Form",
          },
        ],
      }}
    />
  );
}
