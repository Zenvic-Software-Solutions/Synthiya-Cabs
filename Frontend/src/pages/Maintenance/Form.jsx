import React, { useEffect, useState } from "react";
import { DynamicForm } from "@components";
import * as Yup from "yup";
import {
    getMaintenanceCud,
maintenanceTableMeta,
postMaintenanceCud,
patchMaintenanceCud,
} from "@api/urls";

const validationSchema = Yup.object().shape({
  workshop: Yup.number().required("Workshop is required"),
  vehicle: Yup.number().required("Vehicle is required"),
  driver: Yup.number().required("Driver is required"),
  status: Yup.string().trim().required("Status is required"),
  description: Yup.string().trim().required("Description is required"),
  start_date: Yup.date().required("Start Date is required"),
  start_km: Yup.number()
    .typeError("Start KM must be a number")
    .positive("Start KM must be a positive number")
    .required("Start KM is required"),
  end_km: Yup.number()
    .typeError("End KM must be a number")
    .positive("End KM must be a positive number")
    .required("End KM is required"),
  end_date: Yup.date().required("End Date is required"),
});

export default function Index() {
  const [formFieldMeta, setFormFieldMeta] = useState();

  useEffect(() => {
    const fetchTableMeta = async () => {
      const response = await maintenanceTableMeta();
      setFormFieldMeta(response);
    };
    fetchTableMeta();
  }, []);

  if (!formFieldMeta) return;

  const FormFields = {
    workshop: {
      type: "select",
      defaultValue: 1,
      label: "Workshop",
      dropdownOptions: formFieldMeta.filter_data.workshop || [],
    },
    vehicle: {
      type: "select",
      defaultValue: 12,
      label: "Vehicle",
      dropdownOptions: formFieldMeta.filter_data.vehicle || [],
    },
    driver: {
      type: "select",
      defaultValue: 1,
      label: "Driver",
      dropdownOptions: formFieldMeta.filter_data.driver || [],
    },
    status: {
      type: "select",
      defaultValue: "Scheduled",
      label: "Status",
      dropdownOptions: formFieldMeta.filter_data.status || [],
    },
    description: {
      type: "text",
      defaultValue: "fj",
      label: "Description",
      placeholder: "Enter Description",
    },
    start_date: {
      type: "date",
      defaultValue: "2025-01-02",
      label: "Start Date",
    },
    start_km: {
      type: "text",
      defaultValue: "3",
      label: "Start KM",
      placeholder: "Enter Start KM",
    },
    end_km: {
      type: "text",
      defaultValue: "11.2",
      label: "End KM",
      placeholder: "Enter End KM",
    },
    end_date: {
      type: "date",
      defaultValue: "2025-01-10",
      label: "End Date",
    },
  };

  return (
    <DynamicForm
      formFields={FormFields}
      validationSchema={validationSchema}
      redirectUrl="/maintenance/list"
      apiFunction={{
        getForm: getMaintenanceCud,
        postForm: postMaintenanceCud,
        patchForm: patchMaintenanceCud,
      }}
      breadcrumbData={{
        title: "Maintenance Form",
        sidebarActiveId: 12,
        list: [
          {
            label: "Maintenance list",
            path: "/maintenance/list",
          },
          {
            label: "Maintenance Form",
          },
        ],
      }}
    />
  );
}
