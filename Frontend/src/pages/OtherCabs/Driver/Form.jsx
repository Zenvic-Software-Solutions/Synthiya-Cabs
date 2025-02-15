import React, { useEffect, useState } from "react";
import { DynamicForm } from "@components";
import * as Yup from "yup";
import {
  otherCabsDriverTableMeta,
  getOtherCabsDriverCud,
  postOtherCabsDriverCud,
  patchOtherCabsDriverCud,
} from "@api/urls";

const validationSchema = Yup.object().shape({
  identity: Yup.string().trim().required("Name is required"),
  other_cab_name: Yup.string().trim().required("Cab Name is required"),
  phone_number: Yup.string()
    .trim()
    .matches(/^[0-9]{10}$/, "Phone Number must be a 10-digit number")
    .required("Phone Number is required"),
});

export default function Index() {
  const [formFieldMeta, setFormFieldMeta] = useState();
  const [uuid, setUuid] = useState(localStorage.getItem("othercabs_uuid"));
  useEffect(() => {
    const fetchTableMeta = async () => {
      const response = await otherCabsDriverTableMeta();
      setFormFieldMeta(response);
    };
    fetchTableMeta();
  }, []);

  if (!formFieldMeta) return;

  const FormFields = {
    identity: {
      type: "text",
      defaultValue: "",
      label: "Name",
      placeholder: "Enter Name",
    },
    other_cab_name: {
      type: "select",
      label: "Cab Name",
      defaultValue: "",
      dropdownOptions: formFieldMeta.filter_data.other_cab_name || [],
    },
    phone_number: {
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
      redirectUrl={`/othercabs/view/${uuid}`}
      apiFunction={{
        getForm: getOtherCabsDriverCud,
        postForm: postOtherCabsDriverCud,
        patchForm: patchOtherCabsDriverCud,
      }}
      breadcrumbData={{
        title: "OtherCabs Driver list",
        sidebarActiveId: 5,
        list: [
          {
            label: "Othercabs List",
            path: "/othercabs/list",
          },
          {
            label: "Othercabs View",
            path: `/othercabs/view/${uuid}`,
          },
          {
            label: "OtherCabs Driver Form",
          },
        ],
      }}
    />
  );
}
