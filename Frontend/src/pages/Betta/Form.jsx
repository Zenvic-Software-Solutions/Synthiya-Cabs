import React, { useEffect, useState } from "react";
import { DynamicForm } from "@components";
import * as Yup from "yup";
import {
  getbettaCud,
  bettaTableMeta,
  postbettaCud,
  patchbettaCud,
} from "@api/urls";

const validationSchema = Yup.object().shape({
  driver: Yup.number().required("Driver is required"),
  booking: Yup.string().required("Booking is required"),
  amount: Yup.number()
    .typeError("Amount must be a number")
    .positive("Amount must be a positive number")
    .required("Amount is required"),
  status: Yup.string().trim().required("Status is required"),
  // paid_date: Yup.date(),
});

export default function Index() {
  const [formFieldMeta, setFormFieldMeta] = useState();
  const [bookingMeta, setBookingMeta] = useState();

  useEffect(() => {
    const fetchTableMeta = async () => {
      const response = await bettaTableMeta();
      const bookingList = response.filter_data?.booking.map((item) => ({
        id: item.id,
        identity: item.booking_id,
      }));
      setBookingMeta(bookingList);
      setFormFieldMeta(response);
    };
    fetchTableMeta();
  }, []);

  if (!formFieldMeta) return;

  const FormFields = {
    driver: {
      type: "select",
      defaultValue: 1,
      label: "Driver",
      dropdownOptions: formFieldMeta.filter_data.driver || [],
    },
    booking: {
      type: "select",
      defaultValue: 1,
      label: "Booking",
      dropdownOptions: bookingMeta || [],
    },
    amount: {
      type: "text",
      defaultValue: "1000",
      label: "Amount",
      placeholder: "Enter Amount",
    },
    status: {
      type: "select",
      defaultValue: "paid",
      label: "Status",
      dropdownOptions: formFieldMeta.filter_data.status || [],
    },
    paid_date: {
      type: "date",
      defaultValue: "",
      label: "Paid Date",
    },
  };

  return (
    <DynamicForm
      formFields={FormFields}
      validationSchema={validationSchema}
      redirectUrl="/betta/list"
      apiFunction={{
        getForm: getbettaCud,
        postForm: postbettaCud,
        patchForm: patchbettaCud,
      }}
      breadcrumbData={{
        title: "Betta Form",
        sidebarActiveId: 13,
        list: [
          {
            label: "Betta list",
            path: "/betta/list",
          },
          {
            label: "Betta Form",
          },
        ],
      }}
    />
  );
}
