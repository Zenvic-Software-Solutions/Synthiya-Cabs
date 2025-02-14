import React, { useEffect, useState } from "react";
import { DynamicForm } from "@components";
import * as Yup from "yup";
import {
    getfinancehistoryCud,
    financehistoryTableMeta,
    postfinancehistoryCud,
    patchfinancehistoryCud,
} from "@api/urls";

const validationSchema = Yup.object().shape({
   
    finance: Yup.number().required("Finance is required"),
    due_month: Yup.date().required("Due Month is required"),
    paid_date: Yup.date().required("Paid Date is required"),
    amount: Yup.number()
      .typeError("Amount must be a number")
      .positive("Amount must be a positive number")
      .required("Amount is required"),
  });
  
  

export default function Index() {
  const [formFieldMeta, setFormFieldMeta] = useState();

  useEffect(() => {
    const fetchTableMeta = async () => {
      const response = await financehistoryTableMeta();
      setFormFieldMeta(response);
    };
    fetchTableMeta();
  }, []);

  if (!formFieldMeta) return;

  const FormFields = {
    finance: {
      type: "select",
      defaultValue: 1,
      label: "Finance",
      dropdownOptions: formFieldMeta.filter_data.finance || [],
    },
    due_month: {
      type: "date",
      defaultValue: "2024-09-09",
      label: "Due Month",
    },
    paid_date: {
      type: "date",
      defaultValue: "2024-09-09",
      label: "Paid Date",
    },
    amount: {
      type: "text",
      defaultValue: "1000.90",
      label: "Amount",
      placeholder: "Enter Amount",
    },
  };
  
  

  return (
    <DynamicForm
      formFields={FormFields}
      validationSchema={validationSchema}
      redirectUrl="/finance/list"
      apiFunction={{
        getForm: getfinancehistoryCud,
        postForm: postfinancehistoryCud,
        patchForm: patchfinancehistoryCud,
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
