import React, { useEffect, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";

export default function DateSelector({ handleFilterChange }) {
  const [dateRange, setDateRange] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    flatpickr("#flatpickr-date", {
      mode: "range",
      dateFormat: "Y-m-d",
      onChange: (selectedDates) => {
        const [startDate, endDate] = selectedDates;

        // Validation: Prevent same start and end date
        if (
          startDate &&
          endDate &&
          startDate.toDateString() === endDate.toDateString()
        ) {
          setError("Dates cannot be same.");
          setDateRange("");
          handleFilterChange("created_at__gte", "");
          handleFilterChange("created_at__lte", "");
          return;
        }
        setError("");

        const formatDate = (date) => {
          if (!date) return "";
          const utcDate = new Date(
            Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
          );
          const day = String(utcDate.getUTCDate()).padStart(2, "0");
          const month = utcDate.toLocaleString("en-GB", { month: "short" });
          const year = utcDate.getUTCFullYear();
          return `${day}-${month}-${year}`;
        };

        const formattedStartDate = formatDate(startDate);
        const formattedEndDate = formatDate(endDate);

        setDateRange(
          `${formattedStartDate}${
            formattedStartDate && formattedEndDate ? " to " : ""
          }${formattedEndDate}`
        );

        // Convert formatted date to a standard format for the backend
        const dateFormatter = (dateString) => {
          if (!dateString) return "";
          const [day, month, year] = dateString.split("-");
          const monthIndex = new Date(`${month} 1`).getMonth() + 1; // convert month name to number
          return `${year}-${String(monthIndex).padStart(2, "0")}-${day}`;
        };

        handleFilterChange(
          "created_at__gte",
          dateFormatter(formattedStartDate)
        );
        handleFilterChange("created_at__lte", dateFormatter(formattedEndDate));
      },
    });
  }, []);

  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Select date range"
        id="flatpickr-date"
        value={dateRange}
        readOnly
      />
      {error && <div className="text-danger mt-2">{error}</div>}
    </>
  );
}
